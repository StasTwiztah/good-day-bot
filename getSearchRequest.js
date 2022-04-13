exports.getSearchRequest = (command) => {
  switch (command) {
    case "/morning":
      return "Доброго утра";
    case "/day":
      return "Хорошего дня";
    case "/evening":
      return "Хорошего вечера";
    case "/night":
      return "Доброй ночи";
    case "/week":
      return "Удачной недели";
    case "/appetite":
      return "Приятного аппетита";
    case "/easter":
      return "Со светлым праздником Пасхи";
  }

  return "";
};
