import {generateRssFeed} from "@/actions/feed";
import {NextResponse} from "next/server";

export async function GET() {

    const feed = generateRssFeed()

    return new NextResponse(feed.atom1(), {
        headers: {
            "Content-Type": "application/atom+xml; charset=utf-8",
        },
    })
}