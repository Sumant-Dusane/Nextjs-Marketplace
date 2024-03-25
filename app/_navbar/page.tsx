import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

function Navbar() {
    return (
        <nav className="fixed top-0 z-50 w-full bg-background">
            <div className="container justify-center flex h-20 max-w-screen-2xl items-center md:justify-between">
                <Link href="/" className="hidden md:block"><h1 className="text-2xl font-bold">Smart IoT</h1></Link>
                <div className="flex items-center gap-8 w-max">
                    <Link href="/">Explore</Link>
                    <Link href="/login">Login</Link>
                    <Link href="/signup">Register</Link>
                    <Link href="" className="text-red-500">Logout</Link>
                    <Input type="text" name="" id="" placeholder="Search Datasets" className="md:w-[350px]" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;