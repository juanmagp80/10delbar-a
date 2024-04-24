import News from '../models/News.js';


export function routes(app, sequelize) {
    app.get('/api/news', async (req, res) => {
        const news = await News.findAll({ include: sequelize.models.user });
        res.json(news);
    });
};