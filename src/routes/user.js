const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

//create user
router.post("/users", (req, res) => {
  const user = new userSchema(req.body);
  user.save()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
}
);

//get all users
router.get("/users", (req, res) => {
  
  userSchema.find()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
}
);
//get a user by id
router.get("/users/:id", (req, res) => {
  const {id} = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
}
);
//update a user
router.put("/users/:id", (req, res) => {
  const {id} = req.params;
  const {name, email, username} = req.body;
  userSchema
    .updateOne({_id: id}, {$set: {name, email, username}})
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
}
);
//delete a user
router.delete("/users/:id", (req, res) => {
  const {id} = req.params;
  userSchema
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
}
);

module.exports = router;