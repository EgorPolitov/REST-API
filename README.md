# my-server


# Техническая документация

## Введение

Краткое описание цели проекта, его основных характеристик и технологий, используемых в нем.

## Установка

Для работы проекта необходимы следующие программы: `nodejs`, `nix`, `git`

Создайте папку `projects` где хотите

Откройте её в консоли

В консоли запустите

```bash
git clone https://github.com/Blezz-tech/my-server.git
```

Установка необходимых пакетов для nodejs

```bash
npm i
```

Установка Базы данных

```bash
direnv allow
```

Запуск базы данных

```bash
devenv up
```

Запуск проекта

```bash
npm run dev
```

## Структура проекта

```
.
├── db-connect.sh
├── docs
│   ├── 3 Модуль.pdf
│   ├── run.sh
│   ├── Задание.pdf
│   └── Памятка.md
├── flake.lock
├── flake.nix
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── config.ts
│   ├── controllers
│   │   ├── adminController.ts
│   │   ├── clientController.ts
│   │   ├── hotelController.ts
│   │   ├── roomController.ts
│   │   └── tokenController.ts
│   ├── entity
│   │   ├── Admins.ts
│   │   ├── Clients.ts
│   │   ├── Hotels.ts
│   │   ├── Rooms.ts
│   │   └── Tokens.ts
│   ├── index.ts
│   ├── routes
│   │   ├── hotelRouter.ts
│   │   ├── index.ts
│   │   ├── loginRouter.ts
│   │   ├── registerRouter.ts
│   │   ├── roomRouter.ts
│   │   ├── roomsRouter.ts
│   │   ├── signupRouter.ts
│   │   ├── userdataRouter.ts
│   │   └── usersinroomRouter.ts
│   └── utils
│       ├── auth.ts
│       ├── helper.ts
│       └── jwt.ts
└── tsconfig.json
```

# Переделать
В этом примере:

- src/entity содержит модели данных, которые представляют таблицы в базе данных. Например, User.ts и Post.ts могут быть моделями для таблиц пользователей и постов соответственно.
- src/controller содержит контроллеры, которые обрабатывают HTTP-запросы и взаимодействуют с моделями данных. Например, UserController.ts и PostController.ts могут обрабатывать запросы, связанные с пользователями и постами соответственно.
- src/middleware содержит промежуточное программное обеспечение (middleware), которое выполняется перед обработкой запроса контроллером. Например, auth.ts может проверять аутентификацию пользователя.
- src/route содержит маршруты, которые определяют URL-адреса, по которым будет доступно приложение. Например, UserRoute.ts и PostRoute.ts могут определять маршруты для пользователей и постов соответственно.
- src/server.ts является основным файлом приложения, который настраивает и запускает сервер.
- test содержит тестовые файлы для моделей данных.
ormconfig.json содержит конфигурацию для TypeORM.
package.json содержит информацию о проекте и его зависимостях.
- tsconfig.json содержит конфигурацию для TypeScript.


## Работа с базой данных

Запуск БД описывается в [Установка](#Установка)

Описание работы с базой данных.

Это может включать информацию о том, как создавать и обновлять таблицы, как выполнять запросы к базе данных и как обрабатывать ошибки базы данных.

Руководство по созданию

В TypeORM, модели данных представляют собой классы, которые описывают структуру таблиц базы данных. Например:

  import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

  @Entity()
  export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;
  }

## Маршруты и контроллеры


Описание создание и использование маршрутов и контроллеров.

Это может включать информацию о том, как обрабатывать различные типы запросов, как создавать ответы на запросы и как использовать промежуточное программное обеспечение (middleware).

Руководство по контроллерам и маршрутам

В Express.js, маршруты определяют URL-адреса, по которым будет доступно приложение, а контроллеры отвечают за обработку запросов, поступающих на эти URL-адреса. Например:

  import express from "express";
  import { User } from "./entity/User";

  const app = express();
  const router = express.Router();

  router.get("/users", async (req, res) => {
    const userRepository = getRepository(User);
    const users = await userRepository.find();
    res.send(users);
  });

  app.use(router);
  app.listen(3000);


## Тестирование

Описание тестирования проекта.

Это может включать информацию о том, как использовать инструменты для тестирования, такие как Postman или Swagger, и как проверять корректность работы вашего приложения.

Для тестирования приложения, вы можете использовать инструменты, такие как Postman или Swagger, для отправки запросов и получения ответов от сервера.

## Развертывание

В разработке

## Поддержка и обслуживание

В разработке

# Остальное

Чтобы понять как сделать такое же, идите читать [памятку](/docs/Памятка.md)

- [ ] Перевести проект обратно на typstscript
- [ ] Использовать [typeorm](https://orkhan.gitbook.io/typeorm/docs/example-with-express)


Пакты не переисленные в прошлом задании:

- jsonwebtoken
- express-validator
- class-validator

- [ ] Найти плагины для vscode для nodejs
- [ ] Найти нормальную структуру для express js
    - https://blog.logrocket.com/organizing-express-js-project-structure-better-productivity/
    - https://www.reddit.com/r/node/comments/ob4ser/a_good_nodejsexpress_project_structure/
    - https://www.reddit.com/r/node/comments/12aatt9/project_file_structure_and_best_practices_you/
    - https://www.reddit.com/r/node/comments/xci5z9/node_express_js_project_structure_best_practice/
    - https://www.reddit.com/r/node/comments/ruu7hw/is_this_a_good_way_to_structure_a_nodejsexpress/
    - https://www.reddit.com/r/learnjavascript/comments/gp0j1l/are_there_any_best_practices_on_the_express_js/
    - https://www.reddit.com/r/webdev/comments/13wu96i/best_file_structure_for_node_js_project/
    - https://www.reddit.com/r/node/comments/15sk4kz/looking_for_an_expressjs_project_example/
    - https://www.reddit.com/r/node/comments/10u40is/clean_and_basic_nodejs_expressjs_template/
    - https://www.reddit.com/r/node/comments/8463u0/projectfolder_structure_for_nodeexpress_apps/
    - https://www.reddit.com/r/node/comments/r5iar2/how_to_organize_a_nodejs_project/
    - https://www.google.com/search?q=Express.js+project+structure+reddit&sca_esv=572205757&sxsrf=AM9HkKk7PCtwBjjUy97l0aD8QBv43aoT2Q%3A1696940376248&ei=WEElZbLnDuWuwPAPs5eigAs&ved=0ahUKEwiy89LCu-uBAxVlFxAIHbOLCLAQ4dUDCBA&uact=5&oq=Express.js+project+structure+reddit&gs_lp=Egxnd3Mtd2l6LXNlcnAiI0V4cHJlc3MuanMgcHJvamVjdCBzdHJ1Y3R1cmUgcmVkZGl0MgcQIRigARgKMggQIRgWGB4YHUi0CFBrWKMHcAF4AZABAJgB6wGgAb8GqgEFMy4yLjG4AQPIAQD4AQHCAgoQABhHGNYEGLADwgIGEAAYFhgewgIFECEYoAHiAwQYACBBiAYBkAYI&sclient=gws-wiz-serp

- [ ] Шаблонизаторы выбрать на будущее:
    - https://pugjs.org
    - https://ejs.co/
    - https://handlebarsjs.com/




- https://www.youtube.com/watch?v=Oe421EPjeBE
- https://github.com/john-smilga/node-express-course/tree/main
- https://codevoweb.com/node-express-typeorm-postgresql-rest-api/

- Спросить за jsonwebtoken

- https://github.com/john-smilga/node-express-course