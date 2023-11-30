import { db } from "../config.js";
import { Rooms } from "../entity/Rooms.js";
import { Request, Response } from 'express';

class RoomsController {
  async get(req: Request, res: Response) {

    const list_rooms = await db.getRepository(Rooms).find({
      select: ["name", "desc_data"]
    });

    res.setHeader("content-type", "application/json");
    res.status(200).send({
      "data": {
        "list": list_rooms
      },
    });
  }
}

// const rooms = {
//   "list": [
//     {
//       "id": 1,
//       "name": "Назание",
//       "desc_data": "Описание"
//     },
//     {
//       "id": 2,
//       "name": "Назание",
//       "desc_data": "Описание"
//     }
//   ]
// };

export const roomsController = new RoomsController();
