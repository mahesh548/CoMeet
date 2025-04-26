package com.call.comrade;

import static androidx.core.content.ContextCompat.getSystemService;

import android.app.PictureInPictureParams;
import android.content.Context;
import android.content.SharedPreferences;
import android.graphics.Point;
import android.os.Build;
import android.os.Bundle;
import android.preference.PreferenceManager;
import android.util.Log;
import android.util.Rational;
import android.view.Display;
import android.view.WindowManager;


import com.getcapacitor.BridgeActivity;
import com.getcapacitor.PluginCall;

import androidx.activity.OnBackPressedCallback;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.app.AppCompatDelegate;
import androidx.core.app.NotificationManagerCompat;

import ar.com.anura.plugins.phonecallnotification.MyApplication;

public class MainActivity extends BridgeActivity {



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);


        getOnBackPressedDispatcher().addCallback(this, new OnBackPressedCallback(true) {
            @Override
            public void handleOnBackPressed() {
                SharedPreferences prefs = PreferenceManager.getDefaultSharedPreferences(MyApplication.getAppContext());
                String status = prefs.getString("status", "null");

                if (status.equals("true") && Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                    enterPipMode();
                } else {
                    // If you want to handle back press normally
                    setEnabled(false);
                    onBackPressed();
                }
            }
        });
    }



    @Override
    public void onUserLeaveHint() {
        super.onUserLeaveHint();
        SharedPreferences prefs = PreferenceManager.getDefaultSharedPreferences(MyApplication.getAppContext());
        String status = prefs.getString("status", "null");
        Log.d("status", status);
        if (status.equals("true") && Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            enterPipMode();
        }
    }
    public void enterPipMode() {

        WindowManager windowManager = (WindowManager) this.getSystemService(Context.WINDOW_SERVICE);
        Display display = windowManager.getDefaultDisplay();
        Point point = new Point();
        display.getSize(point);
        int width = point.x;
        int height = point.y;

        Rational aspectRatio = new Rational(width, height);

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            PictureInPictureParams.Builder pipBuilder = new PictureInPictureParams.Builder();
            pipBuilder.setAspectRatio(aspectRatio);
            this.enterPictureInPictureMode(pipBuilder.build());
        }
    }

}
