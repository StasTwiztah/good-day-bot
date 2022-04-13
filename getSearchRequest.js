exports.getSearchRequest = (command) => {
  switch (command) {
    case "/morning":
      return "Доброго утра открытка";
    case "/day":
      return "Хорошего дня открытка";
    case "/evening":
      return "Хорошего вечера открытка";
    case "/night":
      return "Доброй ночи открытка";
    case "/week":
      return "Удачной недели открытка";
    case "/appetite":
      return "Приятного аппетита открытка";
    case "/easter":
      return "Со светлым праздником Пасхи открытка";
  }

  return "";
};
