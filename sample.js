var TelegramBot = require('node-telegram-bot-api');

//Устанавливаем токен, котоый выдал нам бот
var token = '853549984:AAGR-t3Hoh10AjJgdbq6bJE8dP8gb6S6fbk'

//Включаем опрос сервера
var bot = new TelegramBot(token, {polling: true});

// Написать мне... (/echo Hello World! - пришлет сообщение с этим приветствием) 
// bot.onText(//echo (.+)/, function (msg, match) {  - странная запись, попытка коментировать в аргументах, функции, плюс phpшное эхо?
bot.onText('test' + function(msg, match) {
    var fromId = msg.from.id;
    var resp = match[1];
    bot.sendMessage(fromId, resp);
});

// Простая команда без параметров
bot.on('message', function (msg) {
    var chatId = msg.chat.id;
    // Фотографи может быть: путь к файлу, поток(stream) или параметр file_id
    var photo = 'cats.png';
    bot.sendPhoto(chatId, photo, {caption: 'Милые котята'});
})
