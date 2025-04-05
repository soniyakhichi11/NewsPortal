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
