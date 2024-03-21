import {NextResponse} from "next/server";
import {generateRssFeed} from "@/lib/feed";




export async function GET() {
    return new NextResponse(generateRssFeed().atom1(), {
        headers: {
            "Content-Type": "application/atom+xml charset=utf-8",
        },
    });
}