const {Router} = require("express");
const router = Router();
const {getNote,create,Delete,update} = require("../controllers/task")


router.route("/")
    .get(getNote)
    .post(create)

router.route("/:id")
    .delete(Delete)
    .put(update)

module.exports = router



