const { Videogame, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Videogame modelos', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validaciones', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe('name', () => {
      it('Si el nombre es null, debe arrojar un error', (done) => {
        Videogame.create({})
          .then(() => done(new Error('Se requiere un nombre valido')))
          .catch(() => done());
      });
      it('name de la db funciona correctamente', () => {
        Videogame.create({ name: 'Super Mario Bros' })
        .catch(()=> done())
      });
    });
  });
});
