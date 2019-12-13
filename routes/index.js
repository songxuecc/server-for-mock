var express = require("express");
var Mock = require('mockjs')

var router = express.Router();
router.get("/activity/ssg/activity/ssg/api/v1/users/addresses?isMock=true", function(
    req,
    res,
    next
) {
    res.render("index", { title: "Express" });
});

router.get("/address", function(req, res, next) {
    var data = Mock.mock({
        "list|1-10": [
            {
                "id|+1": 1,
                province: "@province",
                city:"@city()"
            },
        ],
    });
    res.send(JSON.stringify(data, null, 4));
});

router.get("/api/mock", function(req, res, next) {
    res.send("sasmock");
});

router.get("/api/v1/users/addresses", function(req, res, next) {
    res.send("sas");
});

module.exports = router;
