const express = require('express');
const article = require('../src/routes/Article');
const author = require('../src/routes/Author');
const user = require('../src/routes/User');

module.exports = function(app) {
    app
        .use(express.json())
        .use('/api/article', article)
        .use('/api/author', author)
        .use('/api/user', user)
}