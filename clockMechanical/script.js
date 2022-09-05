let getId = a => document.getElementById(a);
let degSec = 180;
let degMin = 180;
let degHourse = 180;

let d = new Date();
min = d.getMinutes();
hours = d.getHours();
sec = d.getSeconds();

degSec += sec * 6;
degMin += min * 60 * 0.1;
degHourse += hours * 3600 * 5 * 0.00166667;

setInterval(function () {

    getId('sec').style.transform = `rotate(${degSec}` + 'deg)';

    getId('min').style.transform = `rotate(${degMin}` + 'deg)';

    getId('hourse').style.transform = `rotate(${degHourse}` + 'deg)';

    degHourse += 0.00166667;
    degMin += 0.1;
    degSec += 6;

},1000);
