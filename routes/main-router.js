const express = require("express");
const path = require("path");
const galleryRouter = require("./gallery-router");
const loginRouter = require("./log-in-router");
const mainRouter = express.Router();

mainRouter.use(express.static(path.join(__dirname, "../public")));
mainRouter.use(galleryRouter);
mainRouter.use(loginRouter);

mainRouter.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/views/index.html"));
});

mainRouter.get("/movies", (req, res) => {
  if (req.session.isLoggedIn != null && req.session.isLoggedIn == true) {
    res.sendFile(path.join(__dirname, "../public/views/movies.html"));
  } else {
    res.redirect("/log-in");
  }
});

mainRouter.get("/gallery", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/views/gallery.html"));
});

mainRouter.get("/log-in", (req, res) => {
  if (req.session.isLoggedIn) {
    res.redirect("/");
  }

  res.sendFile(path.join(__dirname, "../public/views/log-in.html"));
});

mainRouter.get("/log-out", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

module.exports = mainRouter;
