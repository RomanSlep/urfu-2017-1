'use strict';

var arrRoman = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var arrArabian1 = ['N', 'X', 'XX', 'XXX', 'XXXX', 'L'];
var arrArabian2 = ['N', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

function romanTime(time) {
    if (time.length === 5 && time !== '24:00') {
        var romanT = (arrArabian1[arrRoman.indexOf(time[0])] +
            arrArabian2[arrRoman.indexOf(time[1])] +
            ':' +
            arrArabian1[arrRoman.indexOf(time[3])] +
            arrArabian2[arrRoman.indexOf(time[4])]).replace(/NN/g, 'N');

        if (romanT !== 'N:N') {
            romanT = romanT.replace(/N/g, '');
        }

        return romanT;
    }
    throw new TypeError('Ошибка');
}

module.exports = romanTime;
