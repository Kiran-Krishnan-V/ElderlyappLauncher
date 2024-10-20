package com.example.flutter_application_1

import io.flutter.embedding.android.FlutterActivity

class MainActivity: FlutterActivity() {
}
package your.package.name

import android.content.Context
import android.hardware.Camera
import android.os.Bundle
import io.flutter.embedding.android.FlutterActivity
import io.flutter.plugin.common.MethodChannel

class MainActivity: FlutterActivity() {
    private val CHANNEL = "flashlight"

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        MethodChannel(flutterEngine?.dartExecutor?.binaryMessenger, CHANNEL).setMethodCallHandler { call, result ->
            if (call.method == "toggleFlashlight") {
                toggleFlashlight()
                result.success(null)
            } else {
                result.notImplemented()
            }
        }
    }

    private fun toggleFlashlight() {
        val camera = Camera.open()
        val params = camera.parameters
        val isFlashOn = params.flashMode == Camera.Parameters.FLASH_MODE_TORCH
        params.flashMode = if (isFlashOn) Camera.Parameters.FLASH_MODE_OFF else Camera.Parameters.FLASH_MODE_TORCH
        camera.parameters = params
        camera.startPreview()
        camera.release()
    }
}
