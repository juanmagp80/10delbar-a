import strapi from 'strapi';

async function runStrapi() {
    const instance = await strapi(); // Returns a Strapi instance.
    await instance.load();
    instance.app.use('/admin', instance.router.routes()); // Use Strapi's routes under /admin path prefix.
    instance.run(); // Starts Strapi server.
}

runStrapi().catch(error => console.error('Could not start Strapi', error));