import Link from "next/link";
import Image from "next/image";
import logo from "@/public/f-logo.png"
import googlelogo from "@/public/google.png"
import gitlogo from "@/public/github.png"
import Rlogo from "@/public/pngwing.com.png"
import { useForm,SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import{ZodType, z,string} from "zod";
import { Button } from "flowbite-react";
import {Divfrom,
  Erormsg,
  Rdiv2,
  Leftform,
  Imagerc,
  FormIma,
  Leftformin,
  Textera,
  Fdiv,
  Textq,
  Fa,
  InputDiv,
  Inputdiv1,
  InputDivtext,
  InputFie,
  Brdiv,
  BrTag,
  ButtonG,
  ButtonImg,
  Ldiv,
  Lspan,
  Llink,
  Signin1,
  Wel,
} from "./styled/mainp.styled"
import { useSession, signIn, signOut } from "next-auth/react"

type Inpuvalue = {
  email: string;
  password: string;
};

const FormPage=()=>{
  var { data: session } = useSession();
  const personSchema:ZodType<Inpuvalue> =  z.object({
      email:z.string().min(1, { message: "Email is required" }).email({
        message: "Must be a valid email",
      }),
      password:z
      .string()
      .min(6, { message: "Password must be atleast 6 characters" }),
    });

const {register,handleSubmit,formState:{errors}}= useForm<Inpuvalue>({resolver:zodResolver(personSchema)});

const submitData: SubmitHandler<Inpuvalue>=async(data:Inpuvalue)=>{
 await signIn('credentials',{
    email:data.email as string,
    password:data.password as string,
    redirect: false,
  })
}
return(<>
{session?.user?(
<>
<h1 color="dark" >Authorised</h1>
  <h1>{session.user?.email}</h1>
  <h1>{session.user?.name}</h1>
<Button onClick={() => signOut()} color="dark">Sign out</Button>
</>):(
<>
<Divfrom>
<Leftform onSubmit={handleSubmit(submitData)}>
<Leftformin>
<Fdiv>
<FormIma src={logo} alt="logo"/>
<Textera>Flowbite</Textera>
</Fdiv>
<Wel>Welcome back</Wel>
< Textq>Start your website in seconds. Don't have an account<Fa href="">SignUp</Fa></Textq>
</Leftformin>
<InputDiv>
<Inputdiv1>
<InputDivtext>Email</InputDivtext>
<InputFie type="text" placeholder="example@gmail.com" {...register("email")}></InputFie>
{errors.email&&<Erormsg>{errors.email?.message}</Erormsg>}
</Inputdiv1>
<Inputdiv1>
<InputDivtext>Pasword</InputDivtext>
<InputFie type="password" {...register("password")} id="pass"></InputFie>
{errors.email&&<Erormsg>{errors.password?.message}</Erormsg>}
</Inputdiv1>
</InputDiv>
<Brdiv>
<BrTag/>or<BrTag/>
</Brdiv>
<ButtonG onClick={() => signIn('google',{callbackUrl:"http://localhost:3000"})} ><ButtonImg src={googlelogo} alt=""/>Google SignUp</ButtonG>
<ButtonG><ButtonImg src={gitlogo} alt=""/>GitHub SignUp</ButtonG>
<Ldiv><Lspan>Remember me</Lspan><Llink href="">Forgot password?</Llink></Ldiv>
<Signin1 type="submit" >Sign in</Signin1>
</Leftform>
<Rdiv2>
<Imagerc src={Rlogo} alt="logo"/>
</Rdiv2>
</Divfrom>
</>
)}
</>
);
};
export default FormPage;