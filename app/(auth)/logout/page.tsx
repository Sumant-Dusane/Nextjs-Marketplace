"use client"

import { logout } from "@/action";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

function Logout() {
    const userLogout = async() => {
        await logout().then(res => {
            if(res.success) {
                toast({
                    description: 'User Loggedout successfully'
                });
                window.location.href='/';
            }
            else toast({
                description: 'Something went wrong please try again!'
            });
        });
    }
    return (
        <Button variant="link" className="hover:no-underline text-red-500" onClick={userLogout}>Logout</Button>
    );
}

export default Logout;