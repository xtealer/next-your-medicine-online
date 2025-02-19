export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

// * Firebase Service Account
export const serviceAccount = process.env.SERVICE_ACCOUNT_JSON;

// * Recaptcha
export const recapchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;
export const recapchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
