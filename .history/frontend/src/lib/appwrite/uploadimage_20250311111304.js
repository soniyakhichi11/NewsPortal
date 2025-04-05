import { ImageGravity } from "appwrite";
import { appwriteConfig ,storage} from "./config";

//upload file
export async function uploadFile(file){
    try {
        const uploadedFile = await storage.createFile(
            appwriteConfig.storageId,
            ID.unique(),
            file
        )
        return uploadedFile

    } catch (error) {
        console.log(error)
    }
}

//get file url
export async function getFilePreview(fieldId){
    try {
        const fileUrl = storage.getFilePreview(
            appwriteConfig.storageId,
            fieldId,
            2000,
            2000,
            ImageGravity.Top,
            100
        )
        if(!)

    }catch(error){

    }

}