const express = require('express');
const router = express.Router();
const Page = require('../models/Page');

//Get a page
router.get('/wiki/:id', function(req, res) {
  return Page
    .findOne({title: req.params.id})
    .then((page) => {
      return res.status(200).send(page);
    })
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
router.put('/wiki/:id', function(req, res) {
  return Page
    .findOne({title: req.params.id})
    .then((page) => {
      page.description = req.body.description;
      page.save((err) => {
        if(err) throw err;
        console.log('Page updated');
        return res.status(204).send(page);
      })
    })
    .catch((err) => {
      return console.log(err);
    });
});

//Delete a page
router.delete('/wiki/:id', function(req, res) {
  Page.deleteOne({title: req.params.id}, (err) => {
    if(err) console.log(err);
    return res.status(202);
    console.log('Deleted: ' + req.params.id)
  });
});
module.exports = router;
