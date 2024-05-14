import { v2 as cloudinary} from "cloudinary"
import fs from "fs"

 // Configuration
 cloudinary.config({ 
    cloud_name: "dlkzk9g9k", 
    api_key: "827714578668629", 
    api_secret: "lqVHcbgF7sj1RRcLMSeXspmfdts" // Click 'View Credentials' below to copy your API secret
});

export default async function uploadOnCloudinary(filePath){
    try {
        
         // Upload an image
    const uploadResult = await cloudinary.uploader.upload(filePath,{
        resource_type:"auto"
    })
    
    fs.unlinkSync(filePath)

    return uploadResult
    

    } catch (error) {
        console.log(error)
        fs.unlinkSync(filePath)
    }
}