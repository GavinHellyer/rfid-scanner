package io.ionic.starter;

import android.view.KeyEvent;
import android.util.Log;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;
import com.ultimafurniture.lynx.LynxPlugin;

public class MainActivity extends BridgeActivity {
    private static final String TAG = "MainActivity";

    @Override
    public boolean dispatchKeyEvent(KeyEvent event) {
        Log.i(TAG, "dispatchKeyEvent: " + event);

        if (event.getAction() == KeyEvent.ACTION_DOWN) {
        int keyCode = event.getKeyCode();

        switch (keyCode) {
            case KeyEvent.KEYCODE_F4:
                Log.i(TAG, "KeyEvent.KEYCODE_F4");
                LynxPlugin plugin = (LynxPlugin) getBridge().getPlugin("LynxPlugin").getInstance();
                plugin.startScan();
                break;
            }
        }

        return super.dispatchKeyEvent(event);
    }
}