/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://christebob-site.vercel.app',
  generateRobotsContent: true,
  exclude: ['/api/*'],
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/about'),
    await config.transform(config, '/hello'),
  ],
  changefreq: 'weekly',
  priority: 0.7,
};
