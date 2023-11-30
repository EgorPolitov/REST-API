# Модуль В. Разработка Веб - приложения на стороне сервера

_Время на выполнение модуля_: 3 часа

## Введение

**Технологии этого модуля**: Клиентское программирование

**Время на выполнение**: 3 часа

К Вам обратилась компания «BreezeResort», которая имеет свою сеть отелей в разных странах мира. Так как компания хочется расширяться, им необходимо разработать свою информационную систему для администрирования своих отелей. Для начала им необходимо разработать `REST API`. К сожалению, предыдущая компании не исполнила свой контракт на разработку и отказалась предоставлять резервную копию базы данных, единственное, что осталось, - список HTTP-запросов с описанием работы `API`. Вам необходимо создать базу данных и создать `REST API`.

Ваша задача – создать базу данных и реализовать `REST API` заданной структуры. В примерах будет использоваться переменная `{{host}}`, которая обозначает адрес [http://xxxxxx-m1.wsr.ru/resortapi,](http://xxxxxx-m1.wsr.ru/resortapi,) где `xxxxxx` - логин участника.

**Общие требования к API**

1. Идентификацию пользователя организуйте посредством Bearer Token.
2. При написании `API` вам необходимо разрешить кросс-доменные запросы (`CORS`) для обращения с другого домена.
3. При попытке доступа к защищенным авторизацией функциям системы во всех запросах необходимо возвращать ответ следующего вида:

```json
Status: 401
Content-Type: application/json
Body:
{
    "error": {
    "message": "Unauthorized"
    }
}
```

В случае ошибок, связанных с валидацией данных во всех запросах, необходимо возвращать следующее тело ответа:

```json
{
    "message": "Validation error",
    "errros ": {
        <key>: [ <error message>]
    }
}
```

В свойстве errors необходимо перечислить те свойства, которые не прошли валидацию, а в их значениях указать массив с ошибками валидации.

Например, если отправить пустой запрос на сервер, где проверяется следующая валидация:

1. `username` – обязательно поле
2. `password` – обязательное поле

то тело ответа будет следующим:

```json
{
    "message": "The given data was invalid.",
    "errors": {
        "username": [
            "The username field is required."
        ],
        "password": [
            "The password field is required."
        ]
    }
}

```

В значениях свойств errors вы можете использовать любые сообщения об ошибках (если не указана конкретная ошибка), но они должны описывать возникшую проблему.

Разработанное `API` должно быть доступно по адресам, указанным в требованиях к `API`.

Вы можете использовать любой из представленных фреймворков:

1. `Laravel 8.5.x`
2. `Yii 2.0.x`
3. `NodeJS(express, cors, mysql2, typeorm, reflect-metadata, typescript, corss-env, dotenv, config)`

Регистрация администратора системы

При успешной аутентификации возвращается сообщение.

Поля: `username`, `password` – обязательные, при этом `username` должен быть уникальным.


**Request**

```
URL: {{host}} /signup
Method: POST

Headers
- Content-Type: application/json

Body:
{
"username": "admin ",
"password": "admin"
}
```


**Response**

```
Успех
Status: 200
Content-Type: application/json
Body:
{
    "data": {
    "message": "Administrator created"
    }
}

Ошибки валидации полей
Формат ответа из общих требований
```

# Продолжить отсуюда

```
Аутентификация администратора системы

При успешной аутентификации возвращается сгенерированный токен зарегистрированного

администратора системы.

```
Request Response
```
```
URL: {{host}} /login
Method: POST
```
```
Headers
```
- Content-Type: application/json

```
Body:
{
"username": "admin@admin.ru",
"password": "qwerty123456"
}
```
###### ---------------------------- УСПЕХ ----------------------------

```
Status: 200
Content-Type: application/json
Body:
{
"data": {
"token_user": <сгенерированный token>
}
}
```
```
Неправильные логин или пароль
Status: 401
Content-Type: application/json
Body:
{
"message": "Unauthorized",
"errors": {
"login": "invalid credentials"
}
}
Ошибки валидации полей
Формат ответа из общих требований
```

Последующий функционал доступен только авторизованному администратору.

Идентификация пользователя должно быть организована посредством Bearer Token.

Номер

Добавление

Для добавления новой необходимо указать два поля, оба поля являются обязательными,

название должно быть уникальным.

```
Request Response
```
```
URL: {{host}} /room
Method: POST
```
```
Headers
```
- Content-Type: application/json
- Authorization: Bearer {token}

```
Body:
{
"name": "Название",
"desc_data": "Описание",
}
```
###### ---------------------------- УСПЕХ -----------------------------

```
Status: 200
Content-Type: application/json
Body:
{
"data": {
"message": "Created"
}
}
```
```
Ошибки валидации полей
Формат ответа из общих требований
```
Получение списка всех

Возвращается массив list, содержащий данные, которые есть в системе

```
Request Response
```
```
URL: {{host}} /rooms
Method: GET
```
```
Headers
```
- Content-Type: application/json
- Authorization: Bearer {token}

###### ---------------------------- УСПЕХ -----------------------------

```
Status: 200
Content-Type: application/json
Body:
{
"list": {
{
"id": 1,
"name": "Название",
```

```
"desc_data": "Описание"
},
{
"id": 2,
"name": "Название",
"desc_data": "Описание"
}
}
```
Удаление

```
Request Response
```
```
URL: {{host}} /room/{id}
Method: DELETE
```
```
Headers
```
- Content-Type: application/json
- Authorization: Bearer {token}

###### ---------------------------- УСПЕХ -----------------------------

```
Status: 20 4
Content-Type: application/json
Body:
{
"data": {
"message": "Deleted"
}
}
```
```
Попытка удалить несуществующую
```
```
Status: 403
Content-Type: application/json
Body:
{
"error": {
"message": "Not found"
}
}
```
Клиент

Добавление нового

При отправке запроса необходимо передать объект со следующими свойствами:

fio – обязательное и уникальное поле, строка;

email – обязательное и уникальное поле, электронная почта, строка;


phone – обязательное и уникальное поле, строка;

birth_date - обязательное, формат даты (ГГГГ-ММ-ДД);

id_childdata – обязательное поле, id существующего номера.

```
Request Response
```
```
URL: {{host}} /register
Method: POST
```
```
Headers
```
- Content-Type: application/json
- Authorization: Bearer {token}

```
Body:
{
"fio": "Ivanov Ivan Ivanovich",
"email": "ivan@wsr.ru",
"phone": "89001234567",
"id_childdata": 1,
"birth_date": "2000- 03 - 12",
}
```
###### ---------------------------- УСПЕХ -----------------------------

```
Status: 20 1
Content-Type: application/json
Body:
{
"data": {
"message": "Created"
}
}
Ошибки валидации полей
Формат ответа из общих требований
```
Редактирование информации

```
Request Response
```
```
URL: {{host}} /userdata/{id}
Method: PATCH
```
```
Headers
```
- Content-Type: application/json
- Authorization: Bearer {token}

```
Body:
{
"phone": "89231234567",
}
```
###### ---------------------------- УСПЕХ -----------------------------

```
Status: 200
Content-Type: application/json
Body:
{
"data": {
"id": "5",
"message": "Updated"
}
}
```
Удаление

При удалении из системы необходимо производить id в системе.


```
Request Response
```
```
URL: {{host}} /userdata/{id}
Method: DELETE
```
```
Headers
```
- Content-Type: application/json
- Authorization: Bearer {token}

```
Примечание:
{id} - идентификатор в системе
```
```
Успех
Status: 20 4
Content-Type: application/json
Body:
{
"data": {
"message": "Deleted"
}
}
```
```
Попытка удалить несуществующего
Status: 403
Content-Type: application/json
Body:
{
"error": {
"message": "Not found"
}
}
```
Изменение номера комнаты у клиента

```
Request Response
```

```
URL: {{host}} /room/{id}/userdata/{iduser}
Method: GET
```
```
Headers
```
- Content-Type: application/json
- Authorization: Bearer {token}

```
Примечание:
{ id } – идентификатор номера в системе
{ iduser } – идентификатор клиента в системе
```
###### ---------------------------- УСПЕХ --------------------------

```
Status: 200
Content-Type: application/json
Body:
{
"data": {
"message": "Changed"
}
}
Попытка указать несуществующие данные
Status: 403
Content-Type: application/json
Body:
{
"error": {
"message": "Not found"
}
}
```
Получение списка номеров и клиентов в них

```
Request Response
```
```
URL: {{host}} /usersinroom
Method: GET
```
```
Headers
```
- Content-Type: application/json
- Authorization: Bearer {token}

###### ---------------------------- УСПЕХ -----------------------------

```
Status: 200
Content-Type: application/json
Body:
{
"data": [
{
"name": "Название",
"userdata": [
{
"fio": "Иванов Иван Иванович",
"phonenumber": "79001234567"
}
]
}
```

###### ]

```
} Ошибки валидации полей
Формат ответа из общих требований
```
Отель

Добавление

При отправке запроса необходимо передать объект со следующими свойствами:

name- обязательное и уникальное

number – обязательное и уникальное

```
Request Response
```
```
URL: {{host}} /hotel
Method: POST
```
```
Headers
```
- Content-Type: application/json
- Authorization: Bearer {token}

```
Body:
{
"name": "Название",
"number": 000,
}
```
###### ---------------------------- УСПЕХ -----------------------------

```
Status: 20 1
Content-Type: application/json
Body:
{
"data": {
"id": 18,
"name": "Название",
"number": 000
}
}
```
```
Ошибки валидации полей
Формат ответа из общих требований
```

Получение всех

Возвращается массив list, содержащий список данных в системе

```
Request Response
```
```
URL: {{host}} /hotels
Method: GET
```
```
Headers
```
- Content-Type: application/json
- Authorization: Bearer {token}

###### ---------------------------- УСПЕХ -----------------------------

```
Status: 200
Content-Type: application/json
Body:
{
"list": [
{
"name": "Название",
"number": 0001
},
{
"name": "Название",
"number": 0002
}
]
}
```
Удаление

При удалении из системы необходимо производить id в системе.

```
Request Response
```
```
URL: {{host}} /hotel/{id}
Method: DELETE
```
```
Headers
```
- Content-Type: application/json
- Authorization: Bearer {token}

```
Примечание:
{id} - идентификатор в системе
```
```
Успех
Status: 20 4
Content-Type: application/json
Body:
{
"data": {
"message": "Deleted"
}
}
```
```
Попытка удалить несуществующие данные
Status: 403
```

```
Content-Type: application/json
Body:
{
"error": {
"message": "Not found"
}
}
```
Добавление комнаты в отель

При добавлении комнаты в определенный отель, необходимо передать id комнаты и id отеля.

```
Request Response
```
```
URL: {{host}} /hotel/{id}/room/{idroom}
Method: GET
```
```
Headers
```
- Content-Type: application/json
- Authorization: Bearer {token}

```
Примечание:
{ idroom } - идентификатор комнаты в
системе
{ id } - идентификатор отеля в системе
```
###### ---------------------------- УСПЕХ --------------------------

```
Status: 20 1
Content-Type: application/json
Body:
{
"data": {
"name": "Название",
"title ": "Название"
}
}
Попытка указать несуществующие данные
Status: 403
Content-Type: application/json
Body:
{
"error": {
"message": "Not found"
}
}
```
Получение списка всех отелей, закрепленных за ними номеров и клиентов, которые входят в

этот номер


Request Response

URL: {{host}} /roomsinhotels

Method: GET

Headers

- Content-Type: application/json
- Authorization: Bearer {token}

###### ---------------------------- УСПЕХ -----------------------------

```
Status: 200
Content-Type: application/json
Body:
{
"data": [
{
"title": "Название",
"number": 3,
"data_children": [
{
"name": "Название",
"userdata": [
{
"fio": "Иванов Иван Иванович",
"phonenumber": "79001234567"
}
]
},
{
"name": "Название",
"userdata": []
}
]
},
{
"title": "Название",
"number": 3,
"data_children": []
}
]
}
---------------------- Validation error -----------------------
Ошибки валидации полей
Формат ответа из общих требований
```
