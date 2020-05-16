const express = require('express');
const router = express.Router();
const Page = require('../models/Page');

//Get a page
router.get('/', function(req, res) {
  return res.sendStatus(200);
});

//Create a page
router.post('/wiki', (req, res) => {
    //if page returns null (no page exists), then continue on with creating the post
    return Page
      .findOne(({title: req.body.title}))
      .then((page) => {
        //console.log(page)
        if(page) {
          console.log('Page Exists already: ' + page.title);
          return res.sendStatus(400);
        }
        let newPage = new Page();
        newPage.title = req.body.title;
        newPage.description = req.body.description;
        //console.log('new page', newPage)
        newPage.save((err) => {
          if(err) throw err
          console.log('Page created: ' + newPage.title);
          return res.sendStatus(201);
        });
        //return console.log('Creating Page');
      })
      .catch((err) => {
        return console.log(err)
      });
});

//Change a page
router.put('/', function(req, res) {
  return res.sendStatus(200);
});

//Delete a page
router.delete('/', function(req, res) {
  return res.sendStatus(202);
});
module.exports = router;
