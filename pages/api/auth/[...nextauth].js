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
              console.log("uauthorised");
            }
            else{
            return{email:"mano@gmail.com",password:"manoranjan",image:"null",name:"Mano"};
            }
        },
      })
    ],
  }
  
export default NextAuth(authOptions);