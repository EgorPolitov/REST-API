class RoomController {
  async post(req, res) {
    
    res.setHeader("content-type", "application/json");
    res.status(200).send({
      data: {
        message: "Created",
      },
    });
  }

  async delete(req, res) {
    res.send({
      "data": {
        "message": "Deleted"
      }
    });
  }
}

export const roomController = new RoomController();
