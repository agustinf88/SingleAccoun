var express = require("express");
var router = express.Router();

const { getAccount, addMovement } = require("../service/AccountService");

let locked = false;

/* GET users listing. */
router.post("/movement", function(req, res, next) {
  if (locked) {
    res.status(423).send();
    return;
  }

  const { value } = req.body;
  locked = true;
  addMovement(value)
    .then(movement => {
      locked = false;
      res.status(200).json(movement);
    })
    .catch(err => {
      if (err.code) {
        res.status(err.code);
      } else {
        res.status(500);
      }
      locked = false;
      res.json({ err });
    });
});

router.get("/", (req, res, next) => {
  getAccount().then(account => res.status(200).json(account));
});

module.exports = router;
