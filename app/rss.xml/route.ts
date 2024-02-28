import {generateRssFeed} from "@/actions/feed";
import {NextResponse} from "next/server";


export async function GET() {

    const feed = generateRssFeed()

    return new NextResponse(feed.rss2(), {
        headers: {
            "Content-Type": "application/rss+xml; charset=utf-8",
        },
    })
}