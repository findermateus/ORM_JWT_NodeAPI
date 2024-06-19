import db from './infrastructure/connection.js';
import personRoutes from './Routes/personRoutes.js';
import loginRoutes from './Routes/loginRoutes.js';
import app from './infrastructure/express.js';

const PORT = 3000;

app.use('/api', personRoutes);
app.use('/login', loginRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
