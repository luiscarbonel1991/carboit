import {MetadataRoute} from "next";
import {siteMetadata} from "@/config/site-metadata";


const sitemap = (): MetadataRoute.Sitemap => {
    const pages = ["", "contact", "services/odoo"];


    /*
    const languages = i18n.locales;
    const routes = pages.map((page) => {
        return languages.map((lang) => {
            return {
                url: `${siteMetadata.siteUrl}/${lang}${page === '' ? '' : `/${page}`}`,
                lastModified: new Date().toISOString().split('T')[0],
            }
        })
    }).flat();*/

    const routes = pages.map((page) => ({
            url: `${siteMetadata.siteUrl}/${page}`,
            lastModified: new Date().toISOString().split('T')[0],
    }));

    return [...routes]
}

export default sitemap;