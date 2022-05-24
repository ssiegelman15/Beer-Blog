const router = require("express").Router();
const userRoutes = require("./userRoute");
const commentRoutes = require("./commentRoute");
const postRoutes = require("./postRoute");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
