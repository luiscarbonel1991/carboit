import {MetadataRoute} from "next";
import {siteMetadata} from "@/config/site-metadata";
import {i18n} from "@/i18n-config";


const sitemap = (): MetadataRoute.Sitemap => {
    const pages = ["", "contact", "services/odoo"];
    const languages = i18n.locales;
    // const routes = pages.map((page) => ({
    //     url: `${siteMetadata.siteUrl}/${page}`,
    //     lastModified: new Date().toISOString().split('T')[0],
    // }));

    const routes = pages.map((page) => {
        return languages.map((lang) => {
            return {
                url: `${siteMetadata.siteUrl}/${lang}${page === '' ? '' : `/${page}`}`,
                lastModified: new Date().toISOString().split('T')[0],
            }
        })
    }).flat();

    return [...routes]
}

export default sitemap;