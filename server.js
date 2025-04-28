const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');

const userRoutes = require('./routes/users/user.routes');
const studentRoutes = require('./routes/users/student.routes');
const directorRoutes = require('./routes/users/director.routes');
const adminRoutes = require('./routes/users/admin.routes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
connectDB();

app.use('/user', userRoutes);
app.use('/student', studentRoutes);
app.use('/director', directorRoutes);
app.use('/admin', adminRoutes);

app.get('/', (req, res) => {
  res.send('Servidor funcionando'); 
});



app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

/* 
contraseña: 1dxtVyh4kKaSq5xo 
nombre de usuario: garciaalexandro449
*/