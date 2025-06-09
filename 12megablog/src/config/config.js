const config={
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectID:String(import.meta.env.VITE_Project_ID),
    appwriteDatabaseID:String(import.meta.env.VITE_Database_ID),
    appwriteCollectionID:String(import.meta.env.VITE_Collection_ID),
    appwriteBUCKETID:String(import.meta.env.VITE_BUCKET_ID)

}//so in this file we will acess the env varaibles , by parsing them into string and holding it into a varaible , so this file is good togo with variable of env


export default config