import Sequelize from 'sequelize';

import sequelize from '../database.js';

const User = sequelize.define('user', {
    username: Sequelize.STRING,
    password: Sequelize.STRING
});

export default User;