const validatePassword = password => {
  // Проверяем, соответствует ли пароль заданным условиям
  // Минимальная длина пароля
  if (password.length < 8) {
    return false;
  }

  // Проверка наличия букв верхнего и нижнего регистра
  if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
    return false;
  }

  // Проверка наличия цифр
  if (!/[0-9]/.test(password)) {
    return false;
  }

  // Проверка наличия специальных символов
  if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
    return false;
  }

  // Пароль прошел все проверки
  return true;
};

export default validatePassword;
