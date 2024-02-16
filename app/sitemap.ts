import {MetadataRoute} from "next";
import {siteMetadata} from "@/config/site-metadata";


const sitemap = (): MetadataRoute.Sitemap => {
    const pages = [""];
    const routes = pages.map((page) => ({
        url: `${siteMetadata.siteUrl}/${page}`,
        lastModified: new Date().toISOString().split('T')[0],
    }));

    return [...routes]
}

export default sitemap;