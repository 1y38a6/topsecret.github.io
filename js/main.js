var promises = [
    "ты родилась под знаком самое милое солнышко в мире ♡",
    "сегодня хороший день, чтобы побыть с тобой вдвоем 💕",
    "я тону твоих глазах 😍",
    "ты сделала одного человека счастливым 🥰",
    "если ты сейчас не улыбнешься, то у тебя не треснет губа...",
    "мне срочно нужно тебя обнять"
    ];

var prepromise = [
    "Звёзды говорят мне что...",
    "Устанавливаю связь с космосом, чтобы сказать...",
    "Темная материя шепчет, что...",
    "Сегодня ночью мне явился кот с полумесяцом на лбу и сказал, что...",
    "А ты знала, что...",
    "Могу с уверенностью заявить, что..."
    ];

function getRandomInt(max)
{
    return Math.floor(Math.random() * max);
}

async function onClick()
{
    $(".black-screen").addClass("fade");
    var pre = prepromise[getRandomInt(prepromise.length)];
    $(".prepromise").html(pre);
    await sleep(1000);
    $(".loading").addClass("fade");
    var last = parseInt(localStorage.getItem("last", "0"));
    if(isNaN(last))
    {
        last = 0;
    }
    console.log(last);
    var prom = "пока ничего, но обязательно возвращайся завтра 🥺";
    if(last < promises.length)
    {
        prom = promises[last];
        last++;
        parseInt(localStorage.setItem("last", last.toString()));
    }
    console.log(prom);
    $(".sun").html(prom);
}

function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}