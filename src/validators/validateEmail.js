function validateEmail(email) {
  // Проверяем, соответствует ли адрес электронной почты заданным форматам
  var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Проверяем дополнительные ограничения
  if (!pattern.test(email)) {
    return false;
  }

  // Проверяем наличие домена
  var domain = email.split("@")[1];
  if (!isValidDomain(domain)) {
    return false;
  }

  // Адрес электронной почты прошел все проверки
  return true;
}

function isValidDomain(domain) {
  // Проверяем, что домен существует или соответствует списку допустимых доменов
  var validDomains = [
    "mail.com",
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "outlook.com",
    "aol.com",
    "icloud.com",
    "yandex.ru",
    "mail.ru",
    "gmx.com",
    "protonmail.com",
    "zoho.com",
    "inbox.ru",
    "live.com",
    "qq.com",
    "sina.com.cn",
  ];

  if (validDomains.includes(domain)) {
    return true;
  }

  return false;
}

export default validateEmail;
