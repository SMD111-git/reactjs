import config from '../config/config.js'
import{Client,ID,Databases,Storage,Query} from "appwrite";

export class Service {
    client =new Client();
    Databases;
    bucket;

    constructor() {
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectID);
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);
    }
    async createpost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("appwrite service ::createpost :: error",error);
            
        }
    }
    async update(slug,{title,content,featuredImage,status}) {
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug,{
                    title,
                    content,
                    featuredImage,
                    status
                }
            );
        } catch (error) {
            console.log("appwrite service :: updatePost :: error",error);
            
        }
    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug
            )
            return true 
        } catch (error) {
            console.log("appwrite service::Deletpost error",error);
            return false
        }
    }
    async getPost(slug){
        try {
            return await this.Databases.getDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug
            )
        } catch (error) {
            console.log("appwrite service ::getpost:: error",error);
            return false
        }
    }
    async getposts(queries=[Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                queries,
            )
        } catch (error) {
            console.log("appwriteservice::getposts::error",error);
            return false
        }
    }
    //file upload service
    async uploadfile(file){
        try {
            return await this.bucket.createFile(
                config.appwriteBucketID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("appwriteservice::uploadfile::error",error);
            return false
        }
    }
    async deleteFile(fileID){
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketID,
                fileID
            )
            return true
        } catch (error) {
            console.log("appwriteservice::deletefile::error",error);
            return false
        }
    }
    getFilePreview(fileID){
        return this.bucket.getFilePreview(
            config.appwriteBucketID,
            fileID
        )

    }
}

const service =new Service()
export default service