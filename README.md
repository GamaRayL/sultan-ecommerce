﻿# sultan-ecommerce
Каталог интернет магазина с подгрузкой данных из JSON сервера

## Описание

- В проекте использованы: Webpack/TS/React/Redux Toolkit/RTK Query/React Router DOM
- По стилям - SCSS: хотел попрактиковать styles module (здесь частично присутствует BEM именования)
  - через некоторое время перепишу на чистый BEM, так как нужно выбрать что-то одно, а понятные стили по структуре для всего проекта - это BEM
- Каталог товара обновляется по введенным данным в input'ах и отправляется в endpoint'ы. Хранятся переменные в useState
- Товар как объект попадает в корзину: записывается в initialState Redux, а потом set`итися в localStorage. После обновления страницы, товар в корзине сохраняется
- Хлебные крошки состоят из split'ченного useLocation React Router Dom
- Пагинация реализована на endpoint'ах (currentPage + limit). Количество страниц зависит от Math.ceil(общего числа товара / 15)
- Шапка и подвал сайта находятся в Layout'е, остальные страницы - входят в блок между ними
- Использованы псевдонимы для импортов
- Использованы переменные SCSS (в большинстве случаев)

## Запуск

- Прежде нужно установить зависимости `npm install` `ом
- Начать прослушивать `json-server --watch db.json`
  - если нет JSON Server'а, то ввести команду `npm install -g json-server`
- Далее запуск приложения происходит по `npm start` в режиме разработки
- После запуска откроется страница на порте http://localhost:8080
- Страница будет перезапускаться, когда вы вносите изменения
- Вы также можете увидеть ошибки в консоли
