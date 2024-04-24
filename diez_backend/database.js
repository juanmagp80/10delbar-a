import Sequelize from 'sequelize';
const sequelize = new Sequelize('postgre', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate()
    .then(() => {
        console.log('Conexión establecida correctamente.');
    })
    .catch(err => {
        console.error('No se pudo conectar a la base de datos:', err);
    });

export default sequelize;