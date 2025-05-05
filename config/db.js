const mongoose = require('mongoose');
 
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://pdegrado765:P7ND6buegz9BYfXX@cluster0.ydbjrpb.mongodb.net/eventplace?retryWrites=true&w=majority&appName=Cluster0');
    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error('Error al conectar con la base de datos: ', error);
    process.exit(1);
  }
};

module.exports = connectDB;