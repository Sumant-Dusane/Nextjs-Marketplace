"use client"

import Link from "next/link";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";


interface ExploreCardProps {
    title: string,
    desc: string,
    imageUrl: string,
}

function ExploreCard({ title, imageUrl, desc }: ExploreCardProps) {
    const save = (e: any) => {
        e.preventDefault();
    }
    const share = (e: any) => {
        e.preventDefault();
    }

    return (
        <Link href={title}>
            <Card>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="truncate">{desc}</CardDescription>
                </CardHeader>
                <CardContent>
                    <Image
                        src={imageUrl}
                        alt={title}
                        height={400}
                    />
                </CardContent>
                <CardFooter className="justify-center gap-2">
                    <Button onClick={save}>Save</Button>
                    <Button onClick={share} variant="secondary">Share</Button>
                </CardFooter>
            </Card>
        </Link>
    );
}

export default ExploreCard;