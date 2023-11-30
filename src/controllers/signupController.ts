import { Request, Response } from 'express';
import { db } from '../config';
import { Users } from '../entity/Users';

class SignupController {
  async post(req: Request, res: Response) {
    const { username, password } = req.body;

    const new_user = await db.getRepository(Users).create({ username, password })
    const results = await db.getRepository(Users).save(new_user)

    res.status(200).send({
      data: {
        message: "Administrator created",
      },
    });

  }
}

export const signupController = new SignupController();