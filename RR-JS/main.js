const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
      this._field = field;
    }

    print() {
      for(let i=0; i< this._field.length; i++) {
        console.log(this._field[i].join(''));
      }
    }

    getField() {
      return this._field;
    }

    setField(posX, posY, target) {
      this._field[posX][posY] = target;
    }

    static generateField(height, width) {
        

    }

}