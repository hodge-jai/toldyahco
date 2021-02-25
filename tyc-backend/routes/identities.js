const router = require("express").Router();
const mongoose = require("mongoose");

let Identity = require("../models/identity");

router.route("/:id").get((req, res) => {
  Identity.find({ publicKey: JSON.stringify(req.params.id) }, "tags")
    .lean()
    .exec((err, user) => {
      if (err) {
        return res.send(err);
      }
      return res.end(JSON.stringify(user));
    });
});

/*router.route("/:id").get((req, res) => {
  const _id = req.params.id;
  Identity.findById(_id)
    .lean()
    .exec((err, identity) => {
      if (err) {
        return res.send(err);
      }
      return res.end(JSON.stringify(identity));
    });
});*/

module.exports = router;
