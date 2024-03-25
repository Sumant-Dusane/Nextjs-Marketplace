"use server"

import { loginSchema } from "@/model/login"

export const login = async ({email, password}: loginSchema) => {
    console.log(email);
    console.log(password);
}