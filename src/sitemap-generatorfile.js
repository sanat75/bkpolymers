require('babel-register');

const router = require('./sitemap-routes').default;
const Sitemap = require('react-router-sitemap').default;

new Sitemap(router)
  .build('https://www.bkpolymers.in')
  .save('./public/sitemap.xml');