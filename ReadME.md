## FAQ
#### com.apple.compilers.llvm.clang.1_0.compiler

```shell
/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator14.5.sdk/usr/include/sys/errno.h:81:15: note: expanded from macro 'errno'
#define errno (*__error())
              ^
/Users/aceh/code/hxRn/ios/Pods/Pods.xcodeproj: warning: The iOS Simulator deployment target 'IPHONEOS_DEPLOYMENT_TARGET' is set to 8.0, but the range of supported deployment target versions is 9.0 to 14.5.99. (in target 'Flipper-Glog' from project 'Pods')
/Users/aceh/code/hxRn/ios/Pods/Pods.xcodeproj: warning: The iOS Simulator deployment target 'IPHONEOS_DEPLOYMENT_TARGET' is set to 8.0, but the range of supported deployment target versions is 9.0 to 14.5.99. (in target 'boost-for-react-native' from project 'Pods')
warning: Capabilities for Signing & Capabilities may not function correctly because its entitlements use a placeholder team ID. To resolve this, select a development team in the hxRn editor. (in target 'hxRn' from project 'hxRn')
/Users/aceh/code/hxRn/ios/Pods/Pods.xcodeproj: warning: The iOS Simulator deployment target 'IPHONEOS_DEPLOYMENT_TARGET' is set to 8.4, but the range of supported deployment target versions is 9.0 to 14.5.99. (in target 'Flipper-PeerTalk' from project 'Pods')
/Users/aceh/code/hxRn/ios/Pods/Pods.xcodeproj: warning: The iOS Simulator deployment target 'IPHONEOS_DEPLOYMENT_TARGET' is set to 8.0, but the range of supported deployment target versions is 9.0 to 14.5.99. (in target 'Flipper-DoubleConversion' from project 'Pods')
note: Removed stale file '/Users/aceh/Library/Developer/Xcode/DerivedData/hxRn-cuhoeueisifhltbwvhrcrjptgymx/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/YogaKit.build/Script-9C14B8405FD4BCB6E63BF033BBCE1CC7.sh'

/Users/aceh/code/hxRn/ios/Pods/Pods.xcodeproj: warning: The iOS Simulator deployment target 'IPHONEOS_DEPLOYMENT_TARGET' is set to 8.0, but the range of supported deployment target versions is 9.0 to 14.5.99. (in target 'YogaKit' from project 'Pods')
warning: no rule to process file '/Users/aceh/code/hxRn/ios/Pods/Flipper-RSocket/rsocket/benchmarks/CMakeLists.txt' of type 'text' for architecture 'x86_64' (in target 'Flipper-RSocket' from project 'Pods')
warning: no rule to process file '/Users/aceh/code/hxRn/ios/Pods/Flipper-RSocket/rsocket/benchmarks/README.md' of type 'net.daringfireball.markdown' for architecture 'x86_64' (in target 'Flipper-RSocket' from project 'Pods')
warning: no rule to process file '/Users/aceh/code/hxRn/ios/Pods/Flipper-RSocket/rsocket/README.md' of type 'net.daringfireball.markdown' for architecture 'x86_64' (in target 'Flipper-RSocket' from project 'Pods')

** BUILD FAILED **


The following build commands failed:
        CompileC /Users/aceh/Library/Developer/Xcode/DerivedData/hxRn-cuhoeueisifhltbwvhrcrjptgymx/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/Flipper-Folly.build/Objects-normal/x86_64/DistributedMutex.o /Users/aceh/code/hxRn/ios/Pods/Flipper-Folly/folly/synchronization/DistributedMutex.cpp normal x86_64 c++ com.apple.compilers.llvm.clang.1_0.compiler
```

- ???????????????
?????????????????????https://github.com/facebook/react-native/issues/31441
- ??????????????????????????????package.json??????react-native????????????`"react-native": "0.64.1",`, ????????????`yarn && npx pod-install ios`??? ????????????`npm run ios`
  


#### ??????react-navigation/stack ???????????? react-native-gesture-handler module was not found.

```
ExceptionsManager.js:180 react-native-gesture-handler module was not found. Make sure you're running your app on the native platform and your code is linked properly (cd ios && pod install && cd ..).
ExceptionsManager.js:180 Invariant Violation: requireNativeComponent: "RNSScreen" was not found in the UIManager
```

???????????????

- `yarn add @react-navigation/native`
- `yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view`
- `npx pod-install ios`
- `npm run ios`

????????????????????????????????????????????????`npx pod-install ios`, ???????????????????????????????????????`npm run ios`


