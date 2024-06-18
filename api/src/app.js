import db from './infrastructure/connection.js';
import routes from './Routes/personRoutes.js';
import app from './infrastructure/express.js';
const PORT = 3000;

app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

