var promises = [
    "ты родилась под знаком самое милое солнышко в мире ♡",
    "сегодня хороший день, чтобы побыть с тобой вдвоем 💕",
    "от красоты космоса захватывает дыхание... но ему не сравниться с твоими глазами 😍",
    "ты сделала одного человека счастливым 🥰",
    "если ты сейчас не улыбнешься, то у тебя не треснет губа...",
    "мне срочно нужно тебя обнять",
    "я восхищаюсь тобой",
    "Наруто справился, справишься и ты",
    "от твоего шёпота у меня мурашки по коже",
    "мысли о тебе заставляют мое сердце биться быстрее",
    "в мире нет звука приятнее, чем твой смех",
    "все будет хорошо",
    "мы просидели в войсе дискорда ~6862 минут, 114 часов, 4 целых и 75 сотых суток",
    "длительность разговоров в тг посчитать не удалось, зато их было: 181",
    "кто грустит, тот трансвестит",
    "あなた太陽☀️"
    ];
var dates = [
    "24/04/2021",
    "24/04/2021",
    "24/04/2021",
    "24/04/2021",
    "24/04/2021",
    "24/04/2021",
    "24/04/2021",
    "25/04/2021",
    "25/04/2021",
    "25/04/2021",
    "25/04/2021",
    "25/04/2021",
    "26/04/2021",
    "26/04/2021",
    "26/04/2021",
    "26/04/2021"
    ];

var prepromise = [
    "Звёзды говорят мне что...",
    "Устанавливаю связь с космосом, чтобы сказать...",
    "Темная материя шепчет, что...",
    "Сегодня ночью мне явился кот с полумесяцом на лбу и сказал, что...",
    "А ты знала, что...",
    "Могу с уверенностью заявить, что..."
    ];

var today = new Date();
var day = today.getDate();
var month = today.getMonth()+1;
var year = today.getFullYear();

function getRandomInt(max)
{
    return Math.floor(Math.random() * max);
}

function compareDate(date)
{
    var dateArr = date.split('/');

    var dateDay;
    if(date[0].substring(0, 1) == "0")
    {
        dateDay = parseInt(date[0].substring(1, 1));
    }
    else
    {
        dateDay = parseInt(dateArr[0]);
    }

    var dateMonth;
    if(date[1].substring(0, 1) == "0")
    {
        dateMonth = parseInt(date[1].substring(1, 1));
    }
    else
    {
        dateMonth = parseInt(dateArr[1]);
    }

    var dateyear = parseInt(dateArr[2]);

    if(year == dateyear)
    {
        if(month == dateMonth)
        {
            if(day == dateDay)
            {
                return true;
            }
        }
    }
    
    return false;
}

async function onClick()
{
    $(".black-screen").addClass("fade");
    var pre = prepromise[getRandomInt(prepromise.length)];
    $(".prepromise").html(pre);

    var emailSend = true;

    var parsedData = [];
    $.getJSON('https://api.db-ip.com/v2/free/self', function(data) {

        parsedData = data;
    });
    await sleep(1000);

    var n = "Unknown";

    if(parsedData["ipAddress"] == "46.219.227.131")
    {
        n = "yourself";
    }

    var templateParams = 
    {
        name: n,
        ip: parsedData["ipAddress"],
        city: parsedData["city"],
        date: (day < 10 ? "0" : "") + day + "/" + (month < 10 ? "0" : "") + month + "/" + year,
        time: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    }

    if(emailSend)
    {
        emailjs.send('service_6ctyxdz', 'template_oz4ahpn', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
    }

    var color = $("body").css("background-color");
    var hsvColor = rgb2hsv(color);
    hsvColor.h = getRandomInt(360);
    var newColor = hsvToRgb(hsvColor.h, hsvColor.s, hsvColor.v);
    $("body").css("background-color", newColor);
    // $(".loading").css("background-color", newColor);

    await sleep(4000);

    $(".loading").addClass("fade");
    var last = parseInt(localStorage.getItem("last", "0"));
    if(isNaN(last))
    {
        last = 0;
    }
    var lastDate = "00/00/0000";
    if(localStorage.getItem("lastDay"))
    {
        lastDate = localStorage.getItem("lastDay") + "/" + localStorage.getItem("lastMonth") + "/"  + localStorage.getItem("lastYear");
    }
    if(!compareDate(lastDate))
    {
        last = 0;
    }
    var prom = "пока ничего, но обязательно возвращайся завтра 🥺";
    $(".date").html((day < 10 ? "0" : "") + day + "/" + (month < 10 ? "0" : "") + month + "/" + year);
    while(last < promises.length)
    {
        if(compareDate(dates[last]))
        {
            prom = promises[last];
            $(".date").html(dates[last]);
            last++;
            break;
        }
        last++;
    }
    localStorage.setItem("lastDay", day.toString());
    localStorage.setItem("lastMonth", month.toString());
    localStorage.setItem("lastYear", year.toString());
    localStorage.setItem("last", last.toString());
    $(".sun").html(prom);
}

function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

function hsvToRgb(h, s, v) {
    var r, g, b;
    var i;
    var f, p, q, t;
     
    // Make sure our arguments stay in-range
    h = Math.max(0, Math.min(360, h));
    s = Math.max(0, Math.min(100, s));
    v = Math.max(0, Math.min(100, v));
     
    // We accept saturation and value arguments from 0 to 100 because that's
    // how Photoshop represents those values. Internally, however, the
    // saturation and value are calculated from a range of 0 to 1. We make
    // That conversion here.
    s /= 100;
    v /= 100;
     
    if(s == 0) {
        // Achromatic (grey)
        r = g = b = v;
        return [
            Math.round(r * 255), 
            Math.round(g * 255), 
            Math.round(b * 255)
        ];
    }
     
    h /= 60; // sector 0 to 5
    i = Math.floor(h);
    f = h - i; // factorial part of h
    p = v * (1 - s);
    q = v * (1 - s * f);
    t = v * (1 - s * (1 - f));
     
    switch(i) {
        case 0:
            r = v;
            g = t;
            b = p;
            break;
     
        case 1:
            r = q;
            g = v;
            b = p;
            break;
     
        case 2:
            r = p;
            g = v;
            b = t;
            break;
     
        case 3:
            r = p;
            g = q;
            b = v;
            break;
     
        case 4:
            r = t;
            g = p;
            b = v;
            break;
     
        default: // case 5:
            r = v;
            g = p;
            b = q;
    }
     
    /*
    return [
        Math.round(r * 255), 
        Math.round(g * 255), 
        Math.round(b * 255)
    ];
    */
    return rgb(Math.round(r * 255), 
    Math.round(g * 255), 
    Math.round(b * 255));
}

function rgb(r, g, b){
    r = Math.floor(r);
    g = Math.floor(g);
    b = Math.floor(b);
    return ["rgb(",r,",",g,",",b,")"].join("");
}
  

function rgb2hsv (rgb) {
    rgbMatch = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    var r=parseInt(rgbMatch[1]);
    var g=parseInt(rgbMatch[2]);
    var b=parseInt(rgbMatch[3]);
    let rabs, gabs, babs, rr, gg, bb, h, s, v, diff, diffc, percentRoundFn;
    rabs = r / 255;
    gabs = g / 255;
    babs = b / 255;
    v = Math.max(rabs, gabs, babs),
    diff = v - Math.min(rabs, gabs, babs);
    diffc = c => (v - c) / 6 / diff + 1 / 2;
    percentRoundFn = num => Math.round(num * 100) / 100;
    if (diff == 0) {
        h = s = 0;
    } else {
        s = diff / v;
        rr = diffc(rabs);
        gg = diffc(gabs);
        bb = diffc(babs);

        if (rabs === v) {
            h = bb - gg;
        } else if (gabs === v) {
            h = (1 / 3) + rr - bb;
        } else if (babs === v) {
            h = (2 / 3) + gg - rr;
        }
        if (h < 0) {
            h += 1;
        }else if (h > 1) {
            h -= 1;
        }
    }
    return {
        h: Math.round(h * 360),
        s: percentRoundFn(s * 100),
        v: percentRoundFn(v * 100)
    };
}