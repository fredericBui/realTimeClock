var e = document.querySelector('#clock');
setInterval(function() {
    var date = new Date();
    e.innerHTML = date.getHours() + 'h' + date.getMinutes() + 'm' + date.getSeconds() + 's';
}, 1 * 1000); // 60 * 1000 milsec