
    function clock() {
        var dateToday = new Date();
        var h = dateToday.getHours();
        var m = dateToday.getMinutes();
        var s = dateToday.getSeconds();
        h = checkTime(h);
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('h').innerHTML = h
        document.getElementById('m').innerHTML = m
        document.getElementById('s').innerHTML = s
        h = setTimeout(clock, 500);
        m = setTimeout(clock, 500);
        s = setTimeout(clock, 500);
    }
    function checkTime(i) {
        if (i < 10) {i = "0" + i};  
        return i;
    }
    clock()
    checkTime()
