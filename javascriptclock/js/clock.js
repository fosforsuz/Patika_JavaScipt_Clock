var name = prompt('Adiniz nedir?')
var days = ["Pazar", "Pazartesi", "Sali", "Carsamba", "Persembe", "Cuma", "Cumartesi"]

var span = document.getElementById('myName')
var clock = document.getElementById('myClock')
span.innerHTML = name;

function getTime(){

    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var day = date.getDay();

    clock.innerHTML = hour + ':' + minute + ':' + second + ' ' + days[day]

}

let now = setInterval(getTime, 100);