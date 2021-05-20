var emailSend = true;
var access = "0";

var prepromise = [
    "Звёзды говорят мне что...",
    "Устанавливаю связь с космосом, чтобы сказать...",
    "Темная материя шепчет...",
    "Сегодня ночью мне явился кот с полумесяцом на лбу и сказал, что...",
    "А ты знала, что...",
    "Могу с уверенностью заявить...",
    "Из потолка начинает просвечиваться текст...",
    "В моем сне хомяк выложил семечками...",
    "Красная панда просила перестать её бояться, а ещё...",
    "Сегодня тучи собрались в текст...",
    "Пришёл хомяк, который превратился в меня, он сказал что из будущего и просила передать, что...",
    "А ты читаешь этот текст вообще?",
    "Здесь ещё много пасхалок на самом деле, но сейчас тебе стоит знать, что..."
    ];

var today = new Date();
var day = today.getDate();
var month = today.getMonth()+1;
var year = today.getFullYear();
var todayDate = (day < 10 ? "0" : "") + day + "/" + (month < 10 ? "0" : "") + month + "/" + year;

var predictions = {};

function LoadDates()
{
  AddPrediction(
    "12/02/2001",
    "явилась самость"
    );

  AddPrediction(
    "17/05/2002",
    "произошло чудо.. в виде тебя"
    );

  AddPrediction(
    "01/03/2021",
    "сегодня ты встретишь свою судьбу"
    );

  AddPrediction(
    "04/03/2021",
    "сегодня у тебя повится муж в очень странных обстоятельствах"
    );

  AddPrediction(
    "09/03/2021",
    '"мне кажется мы просто обязаны пожениться"'
    );

  AddPrediction(
    "16/03/2021",
    "случится первый виртуальный поцелуй, не подавись♡"
  );

  AddPrediction(
    "21/03/2021",
    "скромный подарок, который растопит моё сердце"
  );

  AddPrediction(
    "19/04/2021",
    "кажется, я люблю тебя"
  );

  AddPredictions(
    "24/04/2021",
    [
      "00:20. люблю тебя",
      "ты родилась под знаком самое милое солнышко в мире<br>♡",
      "сегодня хороший день, чтобы побыть с тобой вдвоем<br>💕",
      "от красоты космоса захватывает дыхание... но ему не сравниться с твоими глазами<br>♡",
      "ты сделала одного человека счастливым<br>🥰",
      "если ты сейчас не улыбнешься, то у тебя не треснет губа...",
      "мне срочно нужно тебя обнять",
      "я восхищаюсь тобой"
    ]
  );

  AddPredictions(
    "25/04/2021",
    [
      "Наруто справился, справишься и ты",
      "от твоего шёпота у меня мурашки по коже",
      "мысли о тебе заставляют мое сердце биться быстрее",
      "в мире нет звука приятнее, чем твой смех",
      "все будет хорошо"
    ]
  );

  AddPredictions(
    "26/04/2021",
    [
      "мы просидели в войсе дискорда ~6862 минут, 114 часов, 4 целых и 75 сотых суток",
      "длительность разговоров в тг посчитать не удалось, зато их было: 181",
      "кто грустит, тот трансвестит",
      "あなた太陽<br>☀️",
      "сегодня будет прекрасный вечер",
      "раздевайся, ложись.."
    ]
  );

  AddPrediction(
    "27/04/2021",
    "сегодня кто-то будет плакать от счастья"
  );

  AddPredictions(
    "28/04/2021",
    [
      "ты ведь не думаешь, что так просто взял и пошёл спать? <br><br> я думал о тебе. думал о том, как смогу тебе поднять настроение, ведь не могу спать спокойно, когда знаю, что ты расстроена",
      "спорить с тобой по поводу того, что пора спать быть бы глупо, поэтому не обижайся, пожалуйста, на то, что остался за компьютером",
      "Просто хотел сказать, что ты мое солнце <br><br> моё не потому что моя собственность, а потому что без тебя в моя жизнь темная и унылая",
      "я искренне благодарен за то, что ты даришь мне улыбку уже вот почти два месяца, что меня пустила в свой хрупкий мирок<br>что заставляешь мое сердце биться быстрее, за то, что могу слышать твой смех, за твою заботу, что даришь мне всё то, чего мне не хватало, за то, что дала возможность ощутить счастье",
      "благодарен, что ты такое солнышко, за твои старания, за то, что могу восхищаться тобой, твоими успехами, разделись всю радость и грусть, за то, что остановила боль в моей груди",
      '大好き<div class="lds-heart"><div></div></div></div>'
    ]
  );

  AddPredictions(
    "29/04/2021",
    [
      "ты ещё не проснулась, а уже такое солнышко :з",
      "сегодня произойдет что-то хорошее"
    ]
  );

  AddPredictions(
    "01/05/2021",
    [
      "тебя ждет сказка на ночь...",
      "я горжусь тем, что являюсь мужем такой сильной женщины.."
    ]
  );

  AddPredictions(
    "02/05/2021",
    [
      "ты справишься осталось совсем немного<br>♥"
    ]
  );

  AddPredictions(
    "03/05/2021",
    [
      "это далеко не последняя ночь вместе, но, кажется, она была особенной для тебя.<br>Извини, что осознал это так поздно, я искуплю свою вину"
    ]
  );

  AddPredictions(
    "07/05/2021",
    [
      'что с того, что нельзя<br>повернуть время вспять..?<br>что с того, что в глазах<br>не убить этот страх?<br>этот страх - пустоты<br>знаю я, знаешь ты. <br>всё, чем жил я вчера<br>не вернуть никогда...',
      'смоется потоком мощным<br>замок из песка непрочный,<br>прошибёт в холодных водах<br>озарение кого-то...<br>нет ни сил, ни слёз, ни веры,<br>нет границы, у предела<br>почему-же всё так сложно<br>в этом мире безнадёжном..?'
    ]
  );

  AddPredictions(
    "20/05/2021",
    [
      "улыбайся почаще, ведь твоя улыбка радует мне душу♥"
    ]
  );
}

function AddPredictions(date, value)
{
  if(predictions[date] == undefined)
  {
    predictions[date] = value;
  }
  else
  {
    for(var i = 0; i<value.length; i++)
    {
      predictions[date].push(value[i]);
    }
  }
}

function AddPrediction(date, value)
{
  if(predictions[date] == undefined)
  {
    var valueArr = [];
    valueArr.push(value);
    predictions[date] = valueArr;
  }
  else
  {
    predictions[date].push(value);
  }
}

function getRandomInt(max)
{
    return Math.floor(Math.random() * max);
}

function CheckAccessDate()
{
  var accessDate = $("#date").val();
  if(accessDate == "2021-03-01")
  {
    localStorage.setItem("access", "1");
    $(".access_screen").addClass("transparent");
  }
}

function CheckAccess()
{
  if(localStorage.getItem("access") != "1")
  {
     $(".access_screen").removeClass("transparent");
  }
}

function compareDate(date)
{
    if(date == undefined) return false;
    return date == todayDate;
}

async function GetGeoData()
{
  var parsedData = [];
    $.getJSON('https://api.db-ip.com/v2/free/self', function(data) {

        parsedData = data;
    });
    await sleep(1000);
  return parsedData;
}

function SetRandomPreprediction()
{
  var pre = prepromise[getRandomInt(prepromise.length)];
  var loop = 0;
  while(pre == lastPreprediction)
  {
    pre = prepromise[getRandomInt(prepromise.length)];
    if(loop > 15)
    {
      break;
    }
  }
  localStorage.setItem("lastPreprediction", pre);
  $(".prepromise").html(pre);
}

var lastPreprediction = localStorage.getItem("lastPreprediction");

function SetRandomColor()
{
  var color = $("body").css("background-color");
  var hsvColor = rgb2hsv(color);
  hsvColor.h = 230 + getRandomInt(70);
  var newColor = hsvToRgb(hsvColor.h, hsvColor.s, hsvColor.v);
  $("body").css("background-color", newColor);
}

function GetLast()
{
  last = parseInt(localStorage.getItem("last", "0"));
  if(isNaN(last))
  {
    return 0;
  }

  var lastDate = localStorage.getItem("lastdate");
  if(lastDate != undefined)
  {
    if(!compareDate(lastDate))
    {
      return 0;
    }
  }
  return last;
}

async function onClick()
{
    LoadDates();
    $(".black-screen").addClass("fade");
    SetRandomPreprediction();

    var parsedData = await GetGeoData();

    var n = "Unknown";

    SetRandomColor();

    if(emailSend)
    {
      await sleep(2000);
    }
    $(".loading").addClass("fade");

    var last = GetLast();
    
    var currentPrediction = "";
    $(".date").html(todayDate);
    
    if(predictions[todayDate] != undefined)
    {
      if(last < predictions[todayDate].length)
      {
        currentPrediction = predictions[todayDate][last];
        localStorage.setItem("lastPrediction", currentPrediction);
        last++;
      }
    }

    if(currentPrediction.length == 0)
    {
      currentPrediction = ReturnRandom();
    }

    var templateParams = 
    {
        name: n,
        ip: parsedData["ipAddress"],
        city: parsedData["city"],
        date: today.toDateString(),
        time: today.toTimeString(),
        promise: last,
        promiseText: currentPrediction
    }
    
    SendEmail(templateParams);

    localStorage.setItem("lastdate", todayDate);
    // localStorage.setItem("lastdate", "00/00/0000");
    localStorage.setItem("last", last.toString());
    $(".prediction").html(currentPrediction);
    $(".sun").removeClass("transparent");
}

function SendEmail(params)
{
  if(emailSend)
  {
    emailjs.send('service_6ctyxdz', 'template_oz4ahpn', params)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
  }
}

var lastPrediction = localStorage.getItem("lastPrediction");

function ReturnRandom()
{
  var string = "пока ничего, но обязательно возвращайся завтра<br>💕";
  string += "<br><br> чтобы тебе не было грустно, вот тебе рандомное предсказание из прошлого:<br><br>";
  var key = RandomKey();
  var value = RandomKeyValue(key);
  var loop = 0;
  while(value == lastPrediction)
  {
    key = RandomKey();
    value = RandomKeyValue(key);
    if(loop > 15)
    {
      break;
    }
  }
  localStorage.setItem("lastPrediction", value);
  string += "[ " + key + " ]<br>" + value;
  return string;
}

function RandomKey()
{
  return Object.keys(predictions)[Math.floor(Math.random()*Object.keys(predictions).length)];
};

function RandomKeyValue(key)
{
  var random = Math.floor(Math.random()*predictions[key].length);
  return predictions[key][random];
};

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

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 355,
        "density": {
          "enable": true,
          "value_area": 789.1476416322727
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.48927153781200905,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 0.2,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 0,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.2,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 83.91608391608392,
          "size": 1,
          "duration": 3,
          "opacity": 1,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });