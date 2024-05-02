import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {CornerDownRight, Dot} from "lucide-react";
import Image from "next/image";
import bookACallImageUrl from "../../../public/static/images/schedule-call/book-a-15-min-call-with-cardboit.webp"

const scheduleURL = "https://calendly.com/carboitdev/30min"

const ScheduleCall = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <Card className="min-h-[300px] bg-gradient-to-b from-black to-zinc-800 shadow-xl hover:shadow-2xl">
                <CardHeader>
                    <div className="flex flex-col gap-8">
                        <Link
                            href={scheduleURL}
                            target={"_blank"}
                            aria-label="Schedule a call with Carboit"
                        >
                            <Button variant="secondary"
                                    aria-label="Available Now on WhatsApp"
                                    className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 transition ease-in-out delay-150 hover:-translate-y-1 scale-105"
                                    size="lg">

                                <div className="flex flex-row gap-4">
                                    <div className="relative flex flex-col items-center justify-center">
                                        <Dot className="absolute h-16 w-16 animate-magnetic-pulse text-zinc-900"/>
                                        <Dot className="absolute h-16 w-16 animate-magnetic-wave text-zinc-900"/>
                                    </div>

                                    <span className="text-sm text-white font-light">
                                      Slot Available
                                    </span>
                                </div>
                            </Button>
                        </Link>

                        <CardTitle className="text-7xl text-white">
                            Join Carboit
                        </CardTitle>
                    </div>
                </CardHeader>

                <CardContent>

                    <Card className="bg-transparent hover:bg-zinc-800 border border-gray-700">
                        <Link href={scheduleURL}
                              target={"_blank"}
                              aria-label="Schedule a call with Carboit"
                        >
                            <div className="flex flex-row justify-between items-center px-2">
                                <CardHeader>
                                    <CardTitle className="text-white">Book a 15-min intro call</CardTitle>
                                    <CardDescription className="text-white">
                                        Let&apos;s
                                        talk about your project and how we can help you 🤝
                                    </CardDescription>
                                </CardHeader>
                                <Button variant="ghost"
                                        aria-label="Schedule a call with Carboit"
                                        size="icon">
                                    <CornerDownRight className="w-6 h-6 text-purple-600"/>
                                </Button>
                            </div>
                        </Link>
                    </Card>

                </CardContent>
            </Card>
            <Card className="min-h-[300px] bg-transparent shadow-xl hover:shadow-2xl">
                <CardHeader>
                    <div className="flex justify-center items-center">
                        <Image src={bookACallImageUrl}
                               alt={"Book a call with Carboit"}
                               width={150}
                               height={150}
                               className="rounded-full object-cover object-center border-2 border-t-purple-800 border-b-purple-800 border-r-blue-800 border-l-blue-800 shadow-2xl"
                        />
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-4 justify-center items-center">
                        <CardTitle className="text-4xl text-gray-900 text-center">
                            Book a call with <span className="text-purple-600">Carboit</span>

                        </CardTitle>
                        <Link
                            href={scheduleURL}
                            target={"_blank"}
                            aria-label="Schedule a call with Carboit"
                        >
                            <Button variant="default"
                                    aria-label="Schedule a call with Carboit"
                                    className="rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 scale-105 font-bold bg-gradient-to-r from-blue-600 to-purple-600"
                                    size="lg">

                                Schedule now

                            </Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default ScheduleCall;