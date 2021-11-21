import express from "express"

const router = express.Router()

router.route("/").get((req, res) => res.send("TEST URL HELLO WORLD"))

export default router