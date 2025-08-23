import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE || "demo-key",
  authDomain: import.meta.env.VITE_AUTH_DOMAIN || "demo-domain",
  projectId: import.meta.env.VITE_PROJECT_ID || "demo-project",
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET || "demo-bucket",
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID || "123456789",
  appId: import.meta.env.VITE_APP_ID || "demo-app-id",
  measurementId: import.meta.env.VITE_MEASUREMENTID || "demo-measurement"
};

// Initialize Firebase only if we have valid config
let app;
let db;

try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
} catch (error) {
  console.warn('Firebase initialization failed:', error);
  // Create a mock db object for development
  db = {
    collection: () => ({
      doc: () => ({
        get: () => Promise.resolve({ data: () => null, exists: false }),
        set: () => Promise.resolve(),
        update: () => Promise.resolve(),
        delete: () => Promise.resolve()
      }),
      add: () => Promise.resolve({ id: 'mock-id' }),
      get: () => Promise.resolve({ docs: [] })
    })
  };
}

export { db };