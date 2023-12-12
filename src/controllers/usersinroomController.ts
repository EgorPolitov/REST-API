import { Request, Response } from 'express';
import { db } from '../config';
import { Clients } from '../entity/Clients';

class UsersinroomController {
  async get(req: Request, res: Response) {

    const results = await db.getRepository(Clients).find();

    const process_results = results.map(item => ({
     fio: item.fio,
     phonenumber: item.phone 
    }));

    console.log(results);
    res.status(200).send({
      data: {
        name: "Название",
        userdata: process_results
      },
    });

  }
}

export const usersinroomController = new UsersinroomController();