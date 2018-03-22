import Router from "express-promise-router"

const router = Router()

router.route("/").get((req, res, next) => {
  res.json({
    message: "index"
  })
})

export default router
