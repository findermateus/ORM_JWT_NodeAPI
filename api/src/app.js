import proprietarioRoutes from './Routes/proprietarioRoutes.js';
import veiculoRoutes from './Routes/veiculoRoutes.js';
import loginRoutes from './Routes/loginRoutes.js';
import app from './Infrastructure/express.js';

const PORT = 3000;
app.use('/veiculo', veiculoRoutes);
app.use('/proprietario', proprietarioRoutes);
app.use('/login', loginRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
