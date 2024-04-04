"use client"

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import JSZip from "jszip";

export default function DownloadButton({data, isLoggedIn}: any) {
    const downloadImages = async () => {
        if(isLoggedIn) {
            const zip = new JSZip();
            data?.forEach((image: any, index: number) => {
                const imageData = image.toString('base64');
                zip.file(`${index}.jpg`, imageData, {base64: true});
            });
    
            const zipBlob = await zip.generateAsync({type: 'blob'});
            const downloadLink = document.createElement('a');
            downloadLink.href = URL.createObjectURL(zipBlob);
            downloadLink.download = 'images.zip';
            downloadLink.click();
    
            toast({
                description: "Download will start shortly!"
            })
        } else {
            toast({
                description: "Please Login!",
                variant: "destructive"
            })
        }
    }

    return (
        <Button onClick={downloadImages} className="w-full md:w-max">DOWNLOAD DATASET ({data?.length || 0})</Button>
    )
}