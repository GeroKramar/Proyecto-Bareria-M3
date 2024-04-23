export const validateEmail = (email) => {
  if (!email) {
    return "El correo electrónico no puede estar vacío.";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    return "El correo electrónico no es válido.";
  }
  return "";
};

export const validateName = (name) => {
  if (!name.trim()) {
    return "El nombre no puede estar vacío.";
  }
  return "";
};

export const validateUsername = (username) => {
  if (!username.trim()) {
    return "El nombre de usuario no puede estar vacío.";
  }
  return "";
};
export const validateDNI = (dni) => {
  if (!dni) {
    return "El DNI no puede estar vacío.";
  } else if (!/^\d{8,9}$/.test(dni)) {
    return "El DNI debe tener entre 8 y 9 dígitos.";
  }
  return "";
};

export const validatePassword = (password) => {
    if (!password) {
        return "La contraseña no puede estar vacía.";
    } else if (password.length < 8) {
        return "La contraseña debe tener al menos 8 caracteres.";
    } else if (!/[0-9]/.test(password)) {
        return "La contraseña debe incluir al menos un número.";
    } else if (!/[A-Z]/.test(password)) {
        return "La contraseña debe incluir al menos una letra mayúscula.";
    }
    return "";
}
export const validatePasswordMatch = (password, confirmPassword) => {
  if (password !== confirmPassword) {
    return "Las contraseñas no coinciden.";
  }
  return "";
};
