import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import Navbar from "../_navbar/page";
import { getDataInfoById } from "@/action";
import JSZIP from "jszip";
import { toast } from "@/components/ui/use-toast";
import DownloadButton from "../_download/page";
import { cookies } from "next/headers";

interface DataSetParamProps {
    params: {
        dataset: string
    }
}

async function DatasetInfo({ params }: DataSetParamProps) {
    const data = (await getDataInfoById(params.dataset));
    const isLoggedIn = cookies().get('token') ? true : false;

    return (
        <>
            <Navbar />
            <div className="container pt-20 py-8 mt-12">
                <h1 className="text-center md:text-start text-5xl font-bold">{data?.title || 'TEST'}</h1>
                <div className="my-24">
                    <Carousel className="mx-auto my-0 max-w-4xl">
                        <CarouselContent>
                            {data?.data?.map((image: any, index: number) => (
                                <CarouselItem key={index}>
                                    <Image
                                        src={`data:image/jpg;base64,${image.toString('base64')}`}
                                        alt={`image ${index}`}
                                        width={600}
                                        height={600}
                                        className="mx-auto my-0 "
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
                <div className="text-center">
                    <DownloadButton data={data?.data} isLoggedIn={isLoggedIn} />
                </div>
            </div>
        </>
    );
}

export default DatasetInfo;