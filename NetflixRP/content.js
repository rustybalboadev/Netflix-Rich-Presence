const timer = setInterval(function (){
    if (window.location.href.indexOf("netflix.com/watch") > -1) {
        var title = document.getElementsByClassName('ellipsize-text')[0].getElementsByTagName('h4')[0].innerText;
        var episodeNum = document.getElementsByClassName('ellipsize-text')[0].getElementsByTagName('span')[0].innerText;
        var episodeName = document.getElementsByClassName('ellipsize-text')[0].getElementsByTagName('span')[1].innerText;
        var timeRemaining = document.getElementsByClassName('time-remaining__time')[0].innerText;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", 'http://127.0.0.1:5000/send', true);
        xhr.setRequestHeader("Content-Type", "application/json");
        var data = JSON.stringify(
            {
                "title": title,
                "name": episodeName,
                "season": episodeNum,
                "time_left": timeRemaining,
                "done": false
            }
        );
        xhr.send(data);
    
    } else if (window.location.href.indexOf("netflix.com/browse") > -1) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", 'http://127.0.0.1:5000/send', true);
        xhr.setRequestHeader("Content-Type", "application/json");
        var data = JSON.stringify(
            {
                "title": "browsing",
                "name": "browsing",
                "season": "browsing",
                "time_left": "browsing",
                "done": true
            }
        );
        xhr.send(data);
    } else{
        var xhr = new XMLHttpRequest();
        xhr.open("POST", 'http://127.0.0.1:5000/send', true);
        xhr.setRequestHeader("Content-Type", "application/json");
        var data = JSON.stringify(
            {
                "title": "not in netflix",
                "name": "not in netflix",
                "season": "not in netflix",
                "time_left": "not in netflix",
                "done": true
            }
        );
        xhr.send(data);
    }
}, 50000);
