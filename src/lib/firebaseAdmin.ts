import { serviceAccount } from "env";
import {
  appCheck,
  AppOptions,
  auth,
  firestore,
  initializeApp,
} from "firebase-admin";
import { cert, getApp, getApps } from "firebase-admin/app";

const options: AppOptions = {
  credential: cert(serviceAccount as string),
  databaseURL: process.env.databaseURL,
};

function createFirebaseAdminApp(config: AppOptions) {
  if (getApps().length === 0) {
    return initializeApp(config);
  } else {
    return getApp();
  }
}

export const firebaseAdmin = createFirebaseAdminApp(options);
export const firestoreAdmin = firestore(firebaseAdmin);
export const appCheckAdmin = appCheck(firebaseAdmin);
export const authAdmin = auth(firebaseAdmin);
