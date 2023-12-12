import { Request, Response } from 'express';
import { db } from '../config';
import { Rooms } from '../entity/Rooms';

class RoomController {
  async post(req: Request, res: Response) {
    const { name, desc_data } = req.body;

    const new_room = await db.getRepository(Rooms).create({
      "name": name,
      "desc_data": desc_data
    });
    const results = await db.getRepository(Rooms).save(new_room);

    res.status(200).send({
      data: {
        message: "Created",
      },
    });
  }

  async delete(req: Request, res: Response) {
    const id: any = req.params.id;

    const isRoomExist = await db.getRepository(Rooms).exist({
      where: {
        "id": id
      }
    });

    if (!isRoomExist) {
      return res.status(403).json({
        "error": {
          "message": "Not found"
        }
      });
    }

    const result = await db.getRepository(Rooms).delete(id);

    res.send({
      "data": {
        "message": "Deleted"
      }
    });
  }
}

export const roomController = new RoomController();
