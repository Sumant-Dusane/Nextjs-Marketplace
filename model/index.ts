import * as zod from "zod";

export const loginSchema = zod.object({
    email: zod.string().email({
        message: "Email is Required"
    }),
    password: zod.string().min(1, {
        message: "Password is Required"
    })
});

export const signupSchema = zod.object({
    name: zod.string().min(2, {
        message: "Name is Required"
    }),
    email: zod.string().email({
        message: "Email is Required"
    }),
    password: zod.string().min(1, {
        message: "Password is Required"
    }),
    cpassword: zod.string().min(1, {
        message: "Password is Required"
    })
});


export const datasetSchema = zod.object({
    title: zod.string(),
    description: zod.string(),
    images: zod.array(zod.string()),
    dataset: zod.any()
})