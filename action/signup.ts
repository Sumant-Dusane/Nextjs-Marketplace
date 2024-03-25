import { signupSchema } from "@/model/signup";

export const signup = async ({name, email, password}: signupSchema) => {
    console.log(name);
    console.log(email);
    console.log(password);
}