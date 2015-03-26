var adders = [];

window.onload = function () {
    var IDs = ['A', 'B', 'C', 'D', 'E'];

    for (var i = 0; i < 5; i++) {
        adders[i] = document.getElementById(IDs[i]);
        adders[i].setAttribute('onclick', 'getRandomNumFromBackEnd(this, ' + i + ')');
    }
}

function getRandomNumFromBackEnd(li, i) {
    unread = adders[i].getElementsByTagName('strong')[0];
    unread.style.opacity = 1.0;
    unread.innerText = '。。。';
    disableClick(i);

    var req = new XMLHttpRequest();
    req.open('GET', '../getRandomNum', true);
    req.send();
    req.onreadystatechange = function (li) {
        if (req.readyState == 4 && req.status == 200) {
            console.log(req.response);
            console.log(adders[i]);
            unread.innerText = req.response;
        }
    }
}

// 把除了下标为i的li的click函数去除，颜色变为灰色
function disableClick(senderID) {
    console.log(senderID);
    for (var i = 0; i < 5; i++) {
        if (i != senderID) {
            adders[i].setAttribute('')
        }
    }
}