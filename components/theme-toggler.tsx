"use client"

import { Button } from "@/components/ui/button"; 
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export default function ThemeToggler() {
    const { setTheme, theme } = useTheme(); 
    const toggleTheme = () => {
        if (theme == 'dark') setTheme('light')
        else setTheme('dark');
    }
    return (
        <Button variant="outline" className="border-none mx-4 shadow-none" size="icon" onClick={toggleTheme}>
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
    )
}