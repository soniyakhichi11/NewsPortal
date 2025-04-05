import { appwriteConfig } from "./config";

export async function uploadFile(file){
    try {
        const uploadedFile = await storage.createFile(
            appwriteConfig.storageId
        )
    } catch (error) {
        
    }
}