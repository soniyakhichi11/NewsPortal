import { Client, Account} from 'appwrite';

export const appwriteConfig ={
    projectId:import.meta.env.VITE_APPWRITE_ID,
    url:import.meta.env.VITE_STORAGE_ID
}