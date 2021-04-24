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
    await sleep(5000);
    $(".loading").addClass("fade");
    var prom = promises[getRandomInt(promises.length)];
    var loop = 0;
    while(localStorage.getItem("lastP", "") == prom && loop < 100)
    {
        prom = promises[getRandomInt(promises.length)];
        loop++;
    }
    localStorage.setItem("lastP", prom);
    $(".sun").html(prom);
}

function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}