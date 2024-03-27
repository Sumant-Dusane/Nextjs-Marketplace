import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Navbar from "../_navbar/page";

interface DataSetParamProps {
    params: {
        dataset: string
    }
}

function DatasetInfo({ params }: DataSetParamProps) {
    console.log(params.dataset);
    const data = {
        title: "DATA TITLE",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere recusandae dicta pariatur quod repellendus, et, architecto vel corrupti tempora assumenda saepe itaque esse vitae voluptates nostrum, doloribus id ut quam suscipit. Nemo rem harum, adipisci voluptatibus ad voluptatem delectus nobis rerum itaque eos, corrupti odit est placeat architecto praesentium fuga? Dolorem, odio? Aperiam ipsa iure possimus magni eveniet? Fugit illum laborum quibusdam iste, ut expedita? Aperiam autem odit animi deleniti porro velit voluptatum, dolore neque sequi nostrum, cupiditate doloribus facere, similique aliquid eos officiis excepturi aut iste et voluptate quisquam vel. Deserunt a quibusdam vitae quisquam error fugit ut laborum fugiat possimus debitis? Exercitationem consectetur eum quibusdam itaque ducimus maxime perferendis alias deserunt harum fugit facere, dolorum aspernatur commodi quidem voluptate mollitia blanditiis sequi officiis omnis cumque molestias dignissimos excepturi. Repellendus ullam porro magnam laudantium officia unde sunt velit nam quasi laboriosam, placeat et repellat ipsam aliquid natus accusantium quis aperiam voluptatibus reiciendis. Dolores magnam soluta laborum qui accusamus consectetur optio rem non deserunt minima dolorum, illo quisquam, tenetur corrupti, repellat reiciendis quis natus perferendis temporibus! Amet cum dicta sequi consequatur animi mollitia expedita, tempore cumque? Quidem explicabo dolore alias, dolor fuga perspiciatis impedit voluptatum aspernatur ad quisquam doloremque tempore voluptas harum maiores aliquid. Fugiat eius, vitae, quisquam itaque officiis eaque molestias suscipit sint nesciunt soluta at! Voluptatem corrupti sint quidem quibusdam quae voluptate molestias quasi vero, laboriosam reiciendis voluptatibus minima quis suscipit inventore officiis aliquid praesentium. Nostrum ut ipsa commodi velit dolore soluta nesciunt perspiciatis nisi, iusto placeat ad voluptas quis alias quidem sapiente laudantium similique fuga aspernatur atque a. Ratione debitis architecto eligendi quam beatae et molestiae in nemo ut officiis, consectetur facere unde voluptate! Libero accusantium nam totam esse dicta nobis commodi optio veritatis vero, cum blanditiis, sapiente ducimus! Repellat sapiente officia, ex cumque a vel excepturi.",
        imageUrl: "www.google.com"
    }
    return (
        <>
        <Navbar />
        <div className="container pt-20 py-8 mt-12">
            <h1 className="text-5xl font-bold">{data.title}</h1>
            <div className="grid grid-cols-2 items-center gap-2 my-16">
                <Carousel className="w-full max-w-xl">
                    <CarouselContent>
                        <CarouselItem>
                            <Image
                                src="/assets/images/auth_image.webp"
                                alt=""
                                width={600}
                                height={600}
                            />
                        </CarouselItem>
                        <CarouselItem>
                            <Image
                                src="/assets/images/auth_image.webp"
                                alt=""
                                width={600}
                                height={600}
                            />
                        </CarouselItem>
                        <CarouselItem>
                            <Image
                                src="/assets/images/auth_image.webp"
                                alt=""
                                width={600}
                                height={600}
                            />
                        </CarouselItem>
                        <CarouselItem>
                            <Image
                                src="/assets/images/auth_image.webp"
                                alt=""
                                width={600}
                                height={600}
                            />
                        </CarouselItem>
                        <CarouselItem>
                            <Image
                                src="/assets/images/auth_image.webp"
                                alt=""
                                width={600}
                                height={600}
                            />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                <p className="">{data.desc}</p>
            </div>
            <div>
                <Button>DOWNLOAD DATASET (16mb)</Button>
            </div>
        </div>
        </>
    );
}

export default DatasetInfo;