import { initializeApp, getApps } from "firebase-admin/app";
import { credential } from "firebase-admin";
import serviceAccountKey from "@/serviceAccountKey.json";
import { ServiceAccount } from "firebase-admin/app";
//var serviceAccount = require("@/serviceAccountKey.json");

const privateKey = process.env.PRIVATE_KEY?.replaceAll("\\n", "\n");
var serviceAccount: ServiceAccount = {
  projectId: process.env.PROJECT_ID,

  privateKey: privateKey,
  clientEmail: process.env.CLIENT_EMAIL,
};

var sa: ServiceAccount = {};
const firebaseConfig = {
  credential: credential.cert(serviceAccount),
  databaseURL:
    "https://gulfview-website-2cfa7-default-rtdb.asia-southeast1.firebasedatabase.app",

  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

let firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebaseApp;
