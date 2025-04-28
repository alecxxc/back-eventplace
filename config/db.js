const mongoose = require('mongoose');
 
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://garciaalexandro449:1dxtVyh4kKaSq5xo@cluster0.e8enlbn.mongodb.net/eventplace?retryWrites=true&w=majority&appName=Cluster0');
    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error('Error al conectar con la base de datos: ', error);
    process.exit(1);
  }
};

module.exports = connectDB;