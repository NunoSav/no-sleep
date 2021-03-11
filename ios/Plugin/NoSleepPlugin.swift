import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(NoSleepPlugin)
public class NoSleepPlugin: CAPPlugin {
    @objc func stayAwake(_ call: CAPPluginCall) {
      DispatchQueue.main.async {
          if(!UIApplication.shared.isIdleTimerDisabled) {
              UIApplication.shared.isIdleTimerDisabled = true
          }
        
          call.resolve()
      }
    }
  
  @objc func sleep(_ call: CAPPluginCall) {
      DispatchQueue.main.async {
          if(UIApplication.shared.isIdleTimerDisabled) {
              UIApplication.shared.isIdleTimerDisabled = false
          }
        
          call.resolve()
      }
  }
}
