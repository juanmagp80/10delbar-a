import Sequelize from 'sequelize';
import sequelize from '../database.js';
import User from './User.js';

const News = sequelize.define('news', {
    title: Sequelize.STRING,
    content: Sequelize.TEXT
});

User.hasMany(News);
News.belongsTo(User);

export default News;