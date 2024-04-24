"use client";

import React from "react"
import {getDictionary} from "@/lib/dictionary";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Image from "next/image";
import {cn} from "@/lib/utils";
import Link from "next/link";


const testimonials = [
    {
        name: "Yohannia López",
        position: "CEO - taxipremium24hours",
        quote:
            "Un servicio de desarrollo de software muy profesional y ético. Realicé el sitio de mi emprendimiento con ellos. Poseen vastos conocimientos en configuración de SEO web por lo que el producto sale completo. \n" +
            "El equipo trabaja rápido y cumple con las\n" +
            " fechas de entrega. Los recomiendo!",
        image:
            "/static/images/marketing/testimonials/taxipremium24h.webp",
        link: "https://taxipremium24hours.com",
    },
    {
        name: "Lierly Roque Reyes",
        position: "CEO y Director Ejecutivo - reyesgroupflorida.com",
        quote:
            "Quiero recomendar a Carboit por su excelente trabajo en la optimización de mi página web. Gracias a su ayuda, el rendimiento de la página mejoró significativamente, pasando de un puntaje de 31 a 90. Además, me ayudó a conectar de manera eficiente el píxel de Facebook. ¡Gracias por su excelente trabajo!",
        image:
            "/static/images/marketing/testimonials/reyesgroupflorida.webp",
        link: "https://reyesgroupflorida.com",
    }, {
        name: "Domingo Acosta",
        position: "CEO - dacostaupholstery.com",
        quote:
            "Estamos encantados con el trabajo de Carboit. Nos ayudaron a crear una página web impresionante, mejorar nuestro SEO y diseñar un logo excepcional. Recomendamos encarecidamente sus servicios a cualquier empresa que busque destacarse en línea. ¡Gracias por todo!",
        image:
            "/static/images/marketing/testimonials/dacostaupholstery.webp",
        link: "https://dacostaupholstery.com",
    }
]
const Testimonial = ({
                         dictionary
                     }: {
    dictionary: Awaited<ReturnType<typeof getDictionary>>["landing"];
}) => {

    const {heading, description} = dictionary.testimonials;
    return (
        <section
            className="flex flex-col items-center overflow-x-hidden">
            <header
                className="flex flex-col items-center justify-center">
                <h2>
                    <span
                        className="block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-neutral-950">{heading}</span>
                </h2>
                <div className="mt-6 text-xl text-neutral-600"><p>
                    {description}
                </p>
                </div>
            </header>
            <Carousel
                orientation="horizontal"
                opts={{
                    loop: true,
                    align: "start",
                    startIndex: testimonials.length - 1,
                }}
                className={cn(
                    "max-w-7xl mx-auto sm:px-6 lg:px-8 sm:max-w-3xl",
                )}
            >
                <CarouselContent className="max-w-3xl">
                    {
                        testimonials.map((item, index) => (
                            <CarouselItem key={index}>
                                <figure
                                    className="grid grid-cols-[auto,1fr] items-center gap-x-4 gap-y-8 sm:grid-cols-12 sm:grid-rows-[1fr,auto,auto,1fr] sm:gap-x-10 lg:gap-x-16 my-32">
                                    <blockquote
                                        className="col-span-2 text-xl/7 text-neutral-600 sm:col-span-7 sm:col-start-6 sm:row-start-2 md:text-balance">
                                        <p className="sm:max-w-md" >
                                            {item.quote}</p></blockquote>
                                    <div
                                        className="col-start-1 row-start-2 overflow-hidden rounded-xl bg-neutral-100 sm:col-span-5 sm:row-span-full sm:rounded-3xl">
                                        <Image
                                            alt={`Image of ${item.name}`}
                                            loading="lazy"
                                            width="1800"
                                            height="1800"
                                            decoding="async"
                                            data-nimg="1"
                                            className="h-12 w-12 object-cover sm:aspect-[7/9] sm:h-auto sm:w-full"
                                            sizes="(min-width: 1024px) 17.625rem, (min-width: 768px) 16rem, (min-width: 640px) 40vw, 3rem"
                                            src={item.image}
                                            style={
                                                {
                                                    color: "transparent"
                                                }
                                            }/></div>

                                    <figcaption
                                        className="text-sm text-neutral-950 sm:col-span-7 sm:row-start-3 sm:text-base">
                                        <Link
                                            href={item.link}
                                            target={"_blank"}
                                            aria-label={`Visit ${item.name} website`}
                                        >
                                            <span className="font-semibold">{item.name}</span><span
                                            className="hidden font-semibold sm:inline">, </span><br
                                            className="sm:hidden"/>
                                            <span
                                                className="sm:font-semibold underline">
                                                  {item.position}
                                             </span>
                                        </Link>

                                    </figcaption>
                                </figure>
                            </CarouselItem>
                        ))
                    }

                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </section>
    )
}

export default Testimonial
