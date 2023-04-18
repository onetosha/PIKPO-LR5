/* 
  Модуль конфигурации подключения к БД
*/

const Sequelize = require('sequelize');   // подключаем пакет sequalize

// Подключение к БД SQLite
const connector = new Sequelize({
  dialect: "sqlite",
  storage: "C:\\Users\\Bogdan\\Desktop\\Python\\usatu\\pikpo4_python\\test.db"
});

// Экспорт подключения к БД для использования в других модулях
module.exports = {
    connector
}