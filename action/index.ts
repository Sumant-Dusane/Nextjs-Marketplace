"use server"

import { connectDB } from "@/lib/db";
import { datasetSchema, loginSchema, signupSchema } from "@/model";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import * as zod from "zod";

export async function login(values: zod.infer<typeof loginSchema>) {
    const validatedFields = loginSchema.safeParse(values);

    if (!validatedFields.success) return { error: "Invalid Fields" }

    const { email, password } = validatedFields.data;

    const db = await connectDB();
    const userCollection = db.collection('users');
    const user: any = await userCollection.findOne({ email });
    
    if (!user) return { error: "User does not exist" }

    const validatePassword = await bcryptjs.compare(password, user.password);
    if (!validatePassword) {
        return { error: "Invalid Password" }
    }

    const tokenData = {
        id: user._id,
        email: user.email
    }
    const token = jwt.sign(tokenData, 'sumant:)', { expiresIn: '10d' });

    cookies().set('token', token);
    return { success: "User Logged in Succesfully" }
}

export async function signup(values: zod.infer<typeof signupSchema>) {
    const validatedFields = signupSchema.safeParse(values);
    if(!validatedFields.success) return {error: "Invalid Fields"}

    const {name, email, password} = validatedFields.data;

    const db = await connectDB();
    const userCollection = db.collection('users');
    const user: any = await userCollection.findOne({email});
    if(user) return {error: "User Already Exists"}
    
    const salt = await bcryptjs.genSalt();
    const hashPassword = await bcryptjs.hash(password, salt);

    const newUser = {
        name: name,
        email: email,
        password: hashPassword
    }
    const newUserId = (await userCollection.insertOne(newUser)).insertedId;

    if(!newUserId) return {error: "Something went wrong"}

    return {success: "User Registered Successfully"}
}

export async function logout() {
    try {
        cookies().delete('token');
    } catch(err) {
        console.error(err);
        return {success: false}
    }
    return {success: true}
}

export async function uploadData(values: zod.infer<typeof datasetSchema>) {
    try {
        const validatedFields = datasetSchema.safeParse(values);
        if(!validatedFields.success) return {error: "Invalid Fields!"}

        const {
            title,
            description,
            images,
            dataset
        } = validatedFields.data;

        const db = await connectDB();
        const datasetCollection = db.collection("datasets");

        const newDataset = {
            title: title,
            description: description,
            images: images,
            dataset: dataset
        };
        const newDatasetId = (await datasetCollection.insertOne(newDataset)).insertedId;

        if(!newDatasetId) return {error: "Something went wrong"}

        return {success: "New dataset added successfully"}
    } catch(err) {
        console.error(err);
        return {error: "Something went wrong."}
    }
}

export async function getDatasets() {
    try {
        const db = await connectDB();
        const datasetCollection = db.collection('datasets');
        const data = await datasetCollection.find({});
        return {
            success: true,
            data: data
        }
    } catch(err) {
        console.error(err);
        return {success: false, data: []}
    }
}