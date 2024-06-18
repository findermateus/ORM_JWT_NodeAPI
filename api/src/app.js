import connection from './infrastructure/connection.js';
import db from './Model';
import app from './config/express.js';
import routes from './Routes/personRoutes.js';
const PORT = process.env.PORT || 3000;

app.use('/api', routes);

db.sequelize.sync().then((req) => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
})

