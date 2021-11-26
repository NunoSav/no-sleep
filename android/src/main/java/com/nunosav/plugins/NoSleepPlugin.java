package com.nunosav.plugins;

import android.view.Window;
import android.view.WindowManager;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "NoSleep")
public class NoSleepPlugin extends Plugin {

    @PluginMethod
    public void stayAwake(PluginCall call) {
        getBridge()
            .executeOnMainThread(
                new Runnable() {
                    @Override
                    public void run() {
                        Window window = getActivity().getWindow();
                        window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
                        call.resolve();
                    }
                }
            );
    }

    @PluginMethod
    public void sleep(PluginCall call) {
        getBridge()
            .executeOnMainThread(
                new Runnable() {
                    @Override
                    public void run() {
                        Window window = getActivity().getWindow();
                        window.clearFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
                        call.resolve();
                    }
                }
            );
    }
}
