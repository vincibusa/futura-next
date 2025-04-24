import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL, listAll } from 'firebase/storage';
import firebaseConfig from '../firebase.config';

// Inizializza Firebase con la configurazione completa
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

/**
 * Ottiene l'URL di download di un file dallo storage Firebase
 * @param {string} path - Percorso del file nello storage
 * @returns {Promise<string>} URL del file
 */
export const getFileUrl = async (path) => {
  const fileRef = ref(storage, path);
  try {
    const url = await getDownloadURL(fileRef);
    return url;
  } catch (error) {
    console.error('Errore nel recupero del file:', error);
    throw error;
  }
};

/**
 * Soluzione alternativa per accedere ai file pubblici tramite URL diretto
 * Utile per evitare problemi CORS
 * @param {string} path - Percorso del file nello storage
 * @returns {string} URL pubblico diretto
 */
export const getPublicFileUrl = (path) => {
  // Formato URL pubblico per Firebase Storage
  return `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o/${encodeURIComponent(path)}?alt=media`;
};

/**
 * Elenca tutti i file in una directory dello storage Firebase
 * @param {string} directory - Directory da esplorare
 * @returns {Promise<Array>} Lista di riferimenti ai file
 */
export const listFiles = async (directory) => {
  const listRef = ref(storage, directory);
  try {
    const res = await listAll(listRef);
    return res;
  } catch (error) {
    console.error('Errore nella lista dei file:', error);
    throw error;
  }
};

export { storage }; 