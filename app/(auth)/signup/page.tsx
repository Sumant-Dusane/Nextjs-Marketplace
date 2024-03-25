"use client"

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"

function Signup() {
    const onclick = () => {

    }

    return (
        <>
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-8">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Register</h1>
                        <p className="text-balance text-muted-foreground">
                            Create a new account to explore and download pretty ai datasets
                        </p>
                    </div>
                    <div className="grid gap-8">
                        <div className="grid gap-2">
                            <Label htmlFor="fname">Full Name</Label>
                            <Input
                                id="fname"
                                type="text"
                                placeholder="Sumant Dusane"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                            </div>
                            <Input id="password" type="password" required  placeholder="******"/>
                        </div>

                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Confirm Password</Label>
                            </div>
                            <Input id="cpassword" type="password" required  placeholder="******"/>
                        </div>

                        <Button type="submit" className="w-full" onClick={onclick}>
                            SIGNUP
                        </Button>
                        <Button variant="outline" className="w-full">
                            Signup with Google
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Already have an account?{" "}
                        <Link href="login" className="underline">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;