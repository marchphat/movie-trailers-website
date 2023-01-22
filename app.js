const express = require('express');
const path = require("path");
const mainRouter = require('./routes/main-router');
const moviesRouter = require('./routes/movies-router');
const galleryRouter = require('./routes/gallery-router');
const loginRouter = require('./routes/log-in-router');
const app = express();

app.use(express.static(path.join(__dirname, "/public")));
app.use(mainRouter);
app.use(moviesRouter);
app.use(galleryRouter);
app.use(loginRouter);

app.use((req, res, error) => {
  res.sendFile(path.join(__dirname, "/public/views/page-not-found.html"));
});

app.listen(5005, () => {
    console.log("Listening on port 5005");
});

