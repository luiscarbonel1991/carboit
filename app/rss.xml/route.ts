import {NextResponse} from "next/server";
import {generateRssFeed} from "@/lib/feed";


export async function GET() {
    return new NextResponse(generateRssFeed().rss2(), {
        headers: {
            "Content-Type": "application/xml charset=utf-8",
        },
    });
}