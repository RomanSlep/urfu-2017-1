'use strict';

var arrRoman = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var arrArabian1 = ['N', 'X', 'XX', 'XXX', 'XXXX', 'L'];
var arrArabian2 = ['N', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

function romanTime(time) {
    var full = time.replace(':', '');
    if (full.length === 4 && time !== '24:00') {
        var romanT = (arrArabian1[arrRoman.indexOf(full[0])] +
            arrArabian2[arrRoman.indexOf(full[1])] +
            ':' +
            arrArabian1[arrRoman.indexOf(full[2])] +
            arrArabian2[arrRoman.indexOf(full[3])]).replace(/NN/g, 'N');

        if (romanT !== 'N:N') {
            romanT = romanT.replace(/N/g, '');
        }

        return romanT;
    }
    throw new TypeError('Ошибка');
}

module.exports = romanTime;
