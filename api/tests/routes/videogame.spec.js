/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');

const agent = session(app);
const videogame = {
 
    
    
    name: "Tropico 6",
    background_image: "https://fanatical.imgix.net/product/original/fd59067c-85c5-40e6-8f2a-3b59be2ac52e.jpeg?auto=compress,format&w=400&fit=crop&h=225",
    description: "Tropico 6 es la sexta entrega de la popular saga de gestión de países y repúblicas bananeras. En esta nueva secuela, además de gestionar un paraíso sin oposición, podemos construir una república bananera en una serie de islas, ofreciéndonos la oportunidad de encarnar al Presidente en un enorme archipiélago. Deberemos seleccionar paraísos para edificar, robar esculturas y monumentos -sí, como la estatua de la Libertad de Nueva York- y construir puentes y enormes túneles para comunicar una isla con otra.",
    platforms: ["Microsoft Windows", "macOS", "Linux", "SteamOS", "PlayStation 4", "Xbox One"],
    release_date: "29-03-2019",
    rating: "4.3",
    genres: "8,5"
   

};

describe('GET /videogames arroja status 200', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('No se logra conectar a la base de datos:', err);
  }));
  beforeEach(() => Videogame.sync({ force: true })
    .then(() => Videogame.create(videogame)));
  describe('GET /videogames', () => {
    it('Debe arrojar status 200', () =>
      agent.get('/videogames').expect(200)
    );
  });
});



  describe('POST /videogames ', () => {
    it('Debe crear un nuevo videojuego', () => {
      
      agent.post('/videogames').send({
        name: "Super mario bros",
        background_image: "https://images6.alphacoders.com/860/860645.png",
        description: "Super Mario Bros. es un videojuego de plataformas, diseñado por Shigeru Miyamoto, lanzado el 13 de septiembre de 1985 y producido por la empresa japonesa Nintendo",
        platforms: ["Microsoft Windows"],
        release_date: "13-08-1985",
        rating: "3.5",
        genres: "4,8"
      }).expect(200)
        
    });
  });

