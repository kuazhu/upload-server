var express = require('express');
var router = express.Router();
var multer  = require('multer');
// var upload = multer({ dest: 'public/upload/' })

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/upload/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage })

/* upload file and return a status */

router.post('/', upload.single('logo'), function(req, res, next){
    // res.send("作业提交成功,请带走资料,谢谢");
    res.json({status:true})
});

module.exports = router;
