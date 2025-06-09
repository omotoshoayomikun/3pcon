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
            priority: 0.9,
            lastModified: new Date(),
            changeFrequency: "yearly"
        },
        {
            url: `${baseUrl}/about`,
            priority: 0.9,
            lastModified: new Date(),
            changeFrequency: "yearly"
        },
        {
            url: `${baseUrl}/services`,
            priority: 0.9,
            lastModified: new Date(),
            changeFrequency: "yearly"
        },
        {
            url: `${baseUrl}/services/agile`,
            priority: 0.9,
            lastModified: new Date(),
            changeFrequency: "yearly"
        },
        {
            url: `${baseUrl}/services/consultancy-advisory`,
            priority: 0.9,
            lastModified: new Date(),
            changeFrequency: "yearly"
        },
        {
            url: `${baseUrl}/services/data-automation`,
            priority: 0.9,
            lastModified: new Date(),
            changeFrequency: "yearly"
        },
        {
            url: `${baseUrl}/services/innovation`,
            priority: 0.9,
            lastModified: new Date(),
            changeFrequency: "yearly"
        },
        {
            url: `${baseUrl}/services/it-workforce`,
            priority: 0.9,
            lastModified: new Date(),
            changeFrequency: "yearly"
        },
        {
            url: `${baseUrl}/services/software-development`,
            priority: 0.9,
            lastModified: new Date(),
            changeFrequency: "yearly"
        },
    ]
}