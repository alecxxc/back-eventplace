const mongoose = require('mongoose');
const {Schema} = mongoose;


const eventSchema = new Schema({
  name: { type: String, required: true },
  category: { 
    type: String, 
    enum: ['Académico', 'Cultural', 'Deportivo', 'Artístico', 'Tecnológico'],
    required: true, 
  }, 
  image: { type: String, required: true },
  place: { type: String, required: true }, 
  date: { type: Date, required: true },
  time: { type: String, required: true},
  director: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  description: { type: String, required: true},
  status: { 
    type: String, 
    enum: ['Por realizar', 'Completado', 'Cancelado'],
    default: 'Por realizar',
    required: true
  },
  capacity: { type: String, required: true },
  availablePlace: { type: String },
  reservedPlace: { type: String }
}, {
  //Crea dos campos: createAt: Almacena la fecha y la hora en la que el documento se creó, 
  //                 updateAt: Almacena la fecha y hora en el que el documento fue actualizado
  timestamps: true  
});

const Event = mongoose.model('Event', eventSchema, 'events');

module.exports = Event;