import { rooms } from "../db/mulash_db.js";

class RoomsController {
  async get(req, res) {

    res.setHeader("content-type", "application/json");
    res.status(200).send({
      data: rooms,
    });
  }
}

export const roomsController = new RoomsController();
