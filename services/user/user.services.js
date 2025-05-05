const User = require('../../models/user');
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
  };
}

module.exports = {
  registerUser,
  loginUser
}


