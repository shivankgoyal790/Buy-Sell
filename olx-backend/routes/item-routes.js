const express = require("express");
const itemcontrollers = require("../Controllers/item-controllers");
const router = express.Router();
const fileUpload = require("../fileupload");
// const Dummyitems = [
//     {
//         id : "p1",
//         name : "BMW",
//         sellprice : 760000,
//         age : "2017 mdoel",
//         description : "2400km moved",
//         location : "agra",
//         creator : "u1"

//     }
// ]

router.get("/", itemcontrollers.getallitems);
router.get("/:pid/item", itemcontrollers.getitembyid);
router.get("/:uid/useritems", itemcontrollers.getitemsbyuserid);
router.post("/sell", fileUpload.single("image"), itemcontrollers.createitem);
router.patch("/:pid/edititem", itemcontrollers.updateitem);
router.delete("/:pid/delete", itemcontrollers.deleteitem);

module.exports = router;
