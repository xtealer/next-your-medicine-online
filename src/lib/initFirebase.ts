import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { initializeApp, getApp, FirebaseOptions } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig, recapchaSiteKey } from "@/lib/env";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

function createFirebaseApp(config: FirebaseOptions) {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
}

export const firebaseApp = createFirebaseApp(firebaseConfig);
export const firebaseFirestore = getFirestore(firebaseApp);
export const firebaseAuth = getAuth(firebaseApp);
// export const firebaseAnalytics = (() => {
//   if (typeof window === "undefined") {
//     return null;
//   }

//   return getAnalytics(firebaseApp);
// })();

// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.
export const appCheck = (() => {
  if (typeof window === "undefined") {
    return null;
  }

  if (process.env.NODE_ENV === "development") {
    // @ts-ignore
    self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
  }

  return initializeAppCheck(firebaseApp, {
    provider: new ReCaptchaV3Provider(recapchaSiteKey as string),

    // Optional argument. If true, the SDK automatically refreshes App Check
    // tokens as needed.
    isTokenAutoRefreshEnabled: true,
  });
})();
