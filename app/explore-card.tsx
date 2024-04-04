"use client"

import Link from "next/link";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";


interface ExploreCardProps {
    _id: string,
    title: string,
    imageUrl: string,
}

function ExploreCard({ _id, title, imageUrl }: ExploreCardProps) {
    const share = (e: any) => {
        e.preventDefault();
        navigator.clipboard.writeText(window.location.href + _id);
        toast({
            description: "Link Copied to Clipboard"
        })
    }

    return (
        <Link href={_id}>
            <Card>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <Image
                        src={imageUrl}
                        alt={title}
                        height={400}
                        width={400}
                    />
                </CardContent>
                <CardFooter>
                    <Button className="w-full" onClick={share}>Share</Button>
                </CardFooter>
            </Card>
        </Link>
    );
}

export default ExploreCard;