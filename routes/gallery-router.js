const express = require('express');
const path = require('path');
const galleryRouter = express.Router();

galleryRouter.get('/download/img-1', (req, res) => {
    res.download(path.join(__dirname, "../public/img/img-blind/blind-01.png"));
});

galleryRouter.get('/download/img-2', (req, res) => {
    res.download(path.join(__dirname, "../public/img/img-blind/blind-02.jpg"));
});

galleryRouter.get('/download/img-3', (req, res) => {
    res.download(path.join(__dirname, "../public/img/img-blind/blind-03.jpg"));
});

galleryRouter.get('/download/img-4', (req, res) => {
    res.download(path.join(__dirname, "../public/img/img-booksmart/booksmart-01.jpg"));
});

galleryRouter.get('/download/img-5', (req, res) => {
    res.download(path.join(__dirname, "../public/img/img-booksmart/booksmart-02.jpg"));
});

galleryRouter.get('/download/img-6', (req, res) => {
    res.download(path.join(__dirname, "../public/img-booksmart/booksmart-03.jpg"));
});

galleryRouter.get('/download/img-7', (req, res) => {
    res.download(path.join(__dirname, "../public/img-fear-street/fear-street-01.jpg"));
});

galleryRouter.get('/download/img-8', (req, res) => {
    res.download(path.join(__dirname, "../public/img-fear-street/fear-street-02.jpg"));
});

galleryRouter.get('/download/img-9', (req, res) => {
    res.download(path.join(__dirname, "../public/img-fear-street/fear-street-03.jpg"));
});

galleryRouter.get('/download/img-10', (req, res) => {
    res.download(path.join(__dirname, "../public/img/img-inspector-koo/inspector-koo-01.jpg"));
});

galleryRouter.get('/download/img-11', (req, res) => {
    res.download(path.join(__dirname, "../public/img/img-inspector-koo/inspector-koo-02.jpg"));
});

galleryRouter.get('/download/img-12', (req, res) => {
    res.download(path.join(__dirname, "../public/img/img-inspector-koo/inspector-koo-03.jpg"));
});

galleryRouter.get('/download/img-13', (req, res) => {
    res.download(path.join(__dirname, "../public/img/img-squid-game/squid-game-01.jpg"));
});

galleryRouter.get('/download/img-14', (req, res) => {
    res.download(path.join(__dirname, "../public/img/img-squid-game/squid-game-02.jpg"));
});

module.exports = galleryRouter;