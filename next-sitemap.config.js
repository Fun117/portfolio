/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://fun117.vercel.app",
    generateRobotsTxt: true,
    sitemapSize: 5000,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api'],
            },
        ],
    },
};