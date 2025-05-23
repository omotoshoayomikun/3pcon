import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: `${baseUrl}/`,
            priority: 1,
            lastModified: new Date(),
            changeFrequency: "yearly"
        },
        {
            url: `${baseUrl}/contact`,
            priority: 0.7,
            lastModified: new Date(),
            changeFrequency: "yearly"
        },
        {
            url: `${baseUrl}/about`,
            priority: 0.8,
            lastModified: new Date(),
            changeFrequency: "yearly"
        },
        {
            url: `${baseUrl}/service`,
            priority: 0.9,
            lastModified: new Date(),
            changeFrequency: "yearly"
        },
        {
            url: `${baseUrl}/service/agile`,
            priority: 0.9,
            lastModified: new Date(),
            changeFrequency: "yearly"
        },
        {
            url: `${baseUrl}/service/consultancy-advisory`,
            priority: 0.9,
            lastModified: new Date(),
            changeFrequency: "yearly"
        },
        {
            url: `${baseUrl}/service/data-automation`,
            priority: 0.9,
            lastModified: new Date(),
            changeFrequency: "yearly"
        },
        {
            url: `${baseUrl}/service/innovation`,
            priority: 0.9,
            lastModified: new Date(),
            changeFrequency: "yearly"
        },
        {
            url: `${baseUrl}/service/it-workforce`,
            priority: 0.9,
            lastModified: new Date(),
            changeFrequency: "yearly"
        },
        {
            url: `${baseUrl}/service/software-development`,
            priority: 0.9,
            lastModified: new Date(),
            changeFrequency: "yearly"
        },
    ]
}