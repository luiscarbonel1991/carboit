import {MetadataRoute} from "next";
import {siteMetadata} from "@/config/site-metadata";


const robots = (): MetadataRoute.Robots => {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/api/",
        },
        sitemap: `${siteMetadata.siteUrl}/sitemap.xml`,
        host: siteMetadata.siteUrl,
    } as MetadataRoute.Robots;
}

export default robots;