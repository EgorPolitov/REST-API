import { Request, Response } from 'express';
import { db } from '../config';
import { Clients } from '../entity/Clients';

class RegisterController {
    async post(req: Request, res: Response) {
        const { fio, email, phone, id_rooms, birth_date } = req.body;
        const clients_settings = {
            "fio": fio,
            "email": email,
            "phone": phone,
            "birth_date": birth_date
        };


        for (const [key, value] of Object.entries(clients_settings)) {
            console.log(`${key}: ${value}`);
            const checking = {};
            checking[`${key}`] = value;

            const isExist = await db.getRepository(Clients).exist({
                where: checking
            });

            if (isExist) {
                checking[`${key}`] = [value];

                return res.status(401).json({
                    "message": "The given data was invalid",
                    "errors": checking,
                });
            }
        }

        clients_settings["id_rooms"] = id_rooms;

        const new_client = await db.getRepository(Clients).create(clients_settings)
        const results = await db.getRepository(Clients).save(new_client)


        res.status(200).send({
            data: {
                message: "Created",
            },
        });

    }
}

export const registerController = new RegisterController();