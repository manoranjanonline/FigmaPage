import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { error } from "console";
export const authOptions = {
    // Configure one or more authentication providers
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
      //...add more providers here
      CredentialsProvider({
        type: "credentials",
         credentials: {},
        async authorize(credentials){
             const {email, password} = credentials;
             if (email !== "mano@gmail.com" || password !== "manoranjan") {
<<<<<<< HEAD
              console.log("uauthorised");
=======
              console.log("unauthorised");
>>>>>>> 26d4c5f8be9c564e3b14e28c695df98be3ddf677
            }
            else{
            return{email:"mano@gmail.com",password:"manoranjan",image:"null",name:"Mano"};
            }
        },
      })
    ],
  }
  
export default NextAuth(authOptions);
