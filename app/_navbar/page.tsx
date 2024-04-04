import { Input } from "@/components/ui/input";
import { cookies } from "next/headers";
import Link from "next/link";
import Logout from "../(auth)/logout/page";

function Navbar() {
    const isLoggedIn = cookies().get('token') ? true : false;
    return (
        <nav className="fixed top-0 z-50 w-full bg-background">
            <div className="container justify-center flex h-20 max-w-screen-2xl items-center md:justify-between">
                <Link href="/" className="hidden md:block"><h1 className="text-2xl font-bold">Smart IoT</h1></Link>
                <div className="flex items-center gap-8 w-max">
                    <Link href="/">Explore</Link>
                    {!isLoggedIn && (
                        <>
                            <Link href="/login">Login</Link>
                            <Link href="/signup">Register</Link>
                        </>
                    )}
                    {isLoggedIn && <Logout />}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;