import { siteMetadata } from "@/config/site-metadata"
import { Feed, FeedOptions } from "feed"

export const generateRssFeed = () => {
  const siteUrl = siteMetadata.siteUrl

  const feed = new Feed({
    title: "Carboit",
    description: siteMetadata.description,
    id: siteMetadata.siteUrl,
    link: siteMetadata.siteUrl,
    language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
    image: siteMetadata.socialBanner,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()} Carboit`,
    updated: new Date(),
    feedLinks: {
      json: `${siteUrl}/json`,
      atom: `${siteUrl}/atom`,
      rss2: `${siteUrl}/rss`
    },
    author: {
      name: siteMetadata.authors[0].name,
      email: "carboitweb@gmail.com",
      link: siteMetadata.authors[0].url
    }
  } as FeedOptions)

  feed.addCategory("Technology")

  return feed
}
