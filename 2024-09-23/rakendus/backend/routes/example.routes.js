const express = require("express");
const router = express.Router();

router.get('/0*0', (req, res) => {
    res.send('0*0a')
  })

  router.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params)
  })

  const postMiddleware = (req, res, next) => {
    console.log("Midagi oli");
    next();
  };

   const postHandler = (req, res) => {
    res.send(req.params);
  };

  router.get("/posts/:postID", postMiddleware, postHandler);

  router.get('/posts/:postID', (req, res) => {
    res.send(req.params)
  })

  router.get('/flights/:from-:to', (req, res) => {
    res.send(req.params)
  })

  module.exports = router;