const express = require("express");
const path = require("path");
const moviesRouter = express.Router();

moviesRouter.use(express.static(path.join(__dirname, "../public")));
moviesRouter.use(express.static(path.join(__dirname, "../public/views")));

moviesRouter.get("/blind", (req, res) => {
  if (req.session.isLoggedIn != null && req.session.isLoggedIn == true) {
    res.sendFile(path.join(__dirname, "../public/views/sub_views/blind-mov.html"));
  } else {
    res.redirect("/log-in");
  }
});

moviesRouter.get("/booksmart", (req, res) => {
  if (req.session.isLoggedIn != null && req.session.isLoggedIn == true) {
    res.sendFile(path.join(__dirname, "../public/views/sub_views/booksmart-mov.html"));
  } else {
    res.redirect("/log-in");
  }
});

moviesRouter.get("/fear-street", (req, res) => {
  if (req.session.isLoggedIn != null && req.session.isLoggedIn == true) {
    res.sendFile(path.join(__dirname, "../public/views/sub_views/fear-street-mov.html"));
  } else {
    res.redirect("/log-in");
  }
});

moviesRouter.get("/inspector-koo", (req, res) => {
  if (req.session.isLoggedIn != null && req.session.isLoggedIn == true) {
    res.sendFile(path.join(__dirname, "../public/views/sub_views/inspector-koo-mov.html"));
  } else {
    res.redirect("/log-in");
  }
});

moviesRouter.get("/squid-game", (req, res) => {
  if (req.session.isLoggedIn != null && req.session.isLoggedIn == true) {
    res.sendFile(path.join(__dirname, "../public/views/sub_views/squid-game-mov.html"));
  } else {
    res.redirect("/log-in");
  }
});

module.exports = moviesRouter;
