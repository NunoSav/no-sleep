#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(NoSleepPlugin, "NoSleep",
           CAP_PLUGIN_METHOD(stayAwake, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(sleep, CAPPluginReturnPromise);
)
