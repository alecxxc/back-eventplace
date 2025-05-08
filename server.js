const express = require('express');
const cors = require('cors');
require('dotenv').config();


const connectDB = require('./config/db');

const userRoutes = require('./routes/users/user.routes');
const studentRoutes = require('./routes/users/student.routes');
const directorRoutes = require('./routes/users/director.routes');
const adminRoutes = require('./routes/users/admin.routes');

const app = express();
const PORT = parseInt(process.env.PORT, 10) || 3000;

const corsOptions = {
  origin: '*',
  allowedHeaders: ['Content-Type', 'Authorization']
}

app.use(cors(corsOptions));
app.use(express.json());
connectDB()

app.use('/api/user', userRoutes);
app.use('/api/student', studentRoutes);
app.use('/api/director', directorRoutes);
app.use('/api/admin', adminRoutes);

app.get('/', (req, res) => {
  res.send('Servidor funcionando'); 
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});