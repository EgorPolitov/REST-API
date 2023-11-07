const jwt =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJhZG1pbiIsImlhdCI6MTY5ODE0NDA2Mn0.UynAroz7cAGLRUF9V28aFH2DPmgonacGfdcJP5zjH7c";

const admins = [
  {
    username: "admin",
    password: "admin",
  },
  {
    username: "admin1",
    password: "admin",
  },
  {
    username: "admin",
    password: "adm3in",
  },
  {
    username: "admin",
    password: "adm5in",
  },
  {
    username: "admin",
    password: "ad6min",
  },
  {
    username: "admvin",
    password: "ad7min",
  },
  {
    username: "admbin",
    password: "admsin",
  },
];

const rooms = {
  "list": [
    {
      "id": 1,
      "name": "Назание",
      "desc_data": "Описание"
    },
    {
      "id": 2,
      "name": "Назание",
      "desc_data": "Описание"
    }
  ]
};

export { jwt, admins, rooms };
