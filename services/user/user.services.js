const User = require('../../models/user');
const Event = require('../../models/event');
const bcrypt = require('bcryptjs');
const generateToken = require('../../utils/user.services/jwt');

async function registerUser({ name, email, password, program }) {
  if (!name || !password || !email || !program) {
    throw new Error('Todos los campos son obligatorios');
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('El correo ya está registrado');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ name, password: hashedPassword, email, program, rol: 'Estudiante' });
  await newUser.save();

  const redirectRoute = '/api/user/login'; 

  return { message: 'Usuario registrado', redirect: redirectRoute };
};

async function loginUser({ email, password }) {
  if (!email || !password) throw new Error("Todas los campos son obligatorios");

  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Credenciales incorrectas');
  }

  const token = generateToken(user);

  let redirectRoute = '';
  switch (user.rol) {
    case 'Estudiante':
      redirectRoute = '/api/student/profile';
      break;
    case 'Director':
      redirectRoute = '/api/director/profile';
      break;
    case 'Administrador':
      redirectRoute = '/api/admin/profile';
      break;
    default:
      throw new Error ('Rol no válido');
  }

  return { 
    message: 'Login exitoso',
    token,
    redirect: redirectRoute
  }
};

async function startRecommendedEvent () {
  const recommendedEvent = await Event.aggregate([
    {
      $project: {
        _id: 0,
        name: 1,
        date: {
          $dateToString: {
            format: "%Y-%m-%d",  // Año-Mes-Día
            date: "$date"
          }
        },
        description: 1,
        place: 1,
        capacity: 1,
        image: 1
      }
    },
    {
      $limit: 3
    }
  ])
  return recommendedEvent;
};


async function galleryEventsForYear () {
 const events = await Event.aggregate([
    {
      $match: {
        $expr: {
          $in: [
            { $year: "$date" },
            [2023, 2024]
          ]
        }
      }
    },
    {
      $sort: {
        date: -1
      }
    },
    {
      $project: {
        _id: 0,
        name: 1,
        category: 1,
        place: 1,
        date: {
          $dateToString: {
            format: "%Y-%m-%d",  // Año-Mes-Día
            date: "$date",
            timezone: "America/Bogota" // opcional, evita UTC
          }
        },  
        description: 1,
        image: 1
      }
    }
  ])
  return events;
};



async function calendarEvents ({ year, month}) {
  if (!year || !month) throw new Error ('El año y el mes son obligatorios');
  const startDate = new Date(year, month - 1, 1); // Primer día del mes
  const endDate = new Date(year, month, 0, 23, 59, 59, 999); // Último día del mes

  const eventos = await Event.find({
    date: { $gte: startDate, $lte: endDate },
  }, { name: true, date: true, image: true, description: true, place: true, _id: false});
  return eventos;
};

module.exports = {
  registerUser,
  loginUser,
  startRecommendedEvent,
  galleryEventsForYear,
  calendarEvents
};