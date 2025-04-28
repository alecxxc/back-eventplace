function validateEventFields(event) {
  const requiredFields = ['name', 'category', 'image', 'place', 'date', 'status'];
  for (const field of requiredFields) {      
    if (!event[field]) {
      throw new Error(`El campo "${field}" es obligatorio`);
    } 
  }
}

module.exports = validateEventFields;