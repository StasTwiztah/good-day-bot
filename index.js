const TelegramApi = require("node-telegram-bot-api");
const ImageSearchClient = require("image-search-google");
const { getRandomInt } = require("./getRandomInt");
const { getSearchRequest } = require("./getSearchRequest");

const token = "5357306061:AAEsBtIri8V3psUMI5i4HG7g8TJAPeFTTvk";
const cseId = "b28f9054408538fb9";
const apiKey = "AIzaSyBOEqQtyJ7kIWj3rwhCcaKDr0nJ0HiI7AU";

const bot = new TelegramApi(token, { polling: true });
const searchClient = new ImageSearchClient(cseId, apiKey);

const start = () => {
  bot.on("message", (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;

    console.log("got", `message: ${text} in chat: ${chatId}`);
    console.log(
      `contact chat_id: ${chatId}
${msg.contact?.first_name}
${msg.contact?.last_name}
${msg.contact?.phone_number}
${msg.contact?.vcard}`
    );

    if (text === "/start") {
      bot.sendMessage(
        chatId,
        `Добро пожаловать! Хорошего тебе дня!
Доступные команды: /help`
      );
      bot.sendPhoto(chatId, "shorturl.at/vMRW1");

      return;
    }

    if (text === "/help") {
      bot.sendMessage(
        chatId,
        `/morning - Доброго утра
/day - Хорошего дня
/evening -  Хорошего вечера
/night - Доброй ночи
/week - Удачной недели
/easter - Со светлым праздником Пасхи`
      );

      return;
    }

    const searchRequest = getSearchRequest(text);

    if (searchRequest) {
      const options = {
        page: getRandomInt(50),
        num: 1,
      };
      searchClient
        .search(searchRequest, options)
        .then((images) => {
          images.map((x) => bot.sendPhoto(chatId, x.url));
        })
        .catch((error) => console.log(error));
    } else {
      bot.sendMessage(
        chatId,
        `Упс, такой команды не существует :(
/morning - Доброго утра
/day
/evening
/night
/week
/work
/easter`
      );

      return;
    }
  });
};

start();
