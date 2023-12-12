import { Request, Response } from 'express';
import { db } from '../config';
import { Clients } from '../entity/Clients';

class UserdataController {
  async delete(req: Request, res: Response) {
    const id: any = req.params.id;

    const isClientExist = await db.getRepository(Clients).exist({
      where: {
        "id": id
      }
    });

    if (!isClientExist) {
      return res.status(403).json({
        "error": {
          "message": "Not found"
        }
      });
    }

    const result = await db.getRepository(Clients).delete(id);

    res.send({
      "data": {
        "message": "Deleted"
      }
    });
  }

  async patch(req: Request, res: Response) {
    const id: any = req.params.id;

    const isClientExist = await db.getRepository(Clients).exist({
      where: {
        "id": id
      }
    });

    if (!isClientExist) {
      return res.status(403).json({
        "error": {
          "message": "Not found"
        }
      });
    }

    const { fio, email, phone, id_rooms, birth_date } = req.body;
    const clients_settings = {
      "id_rooms": id_rooms,
      "fio": fio,
      "email": email,
      "phone": phone,
      "birth_date": birth_date
    };

    Object.keys(clients_settings).forEach(key =>
      clients_settings[key] === undefined
        ? delete clients_settings[key]
        : {});

    const property = await db.getRepository(Clients).findOne({
      where: { id }
    });

    const result = await db.getRepository(Clients).save({
      ...property, // existing fields
      ...clients_settings // updated fields
    });

    res.status(200).send({
      "data": {
        "id": id,
        "message": "Updated"
      }
    });
  }
}

export const userdataController = new UserdataController();