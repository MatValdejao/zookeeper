const router = require("express").Router()
const animalRoutes = require("./animal-routes")
const zookeeperRoutes = require("./zookeeper-routes")

router.use(animalRoutes)
router.use(zookeeperRoutes)

module.exports = router