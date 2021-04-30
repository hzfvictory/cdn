const message_Path = '/assets/model/';
const home_Path = 'http://file.jing999.cn/';   //此处可以修改为你的域名，必须带斜杠

function renderTip(template, context) {
    let tokenReg = /(\\)?\{([^\{\}\\]+)(\\)?\}/g;
    return template.replace(tokenReg, function (word, slash1, token, slash2) {
        if (slash1 || slash2) {
            return word.replace('\\', '');
        }
        let variables = token.replace(/\s/g, '').split('.');
        let currentObject = context;
        let i, length, variable;
        for (i = 0, length = variables.length; i < length; ++i) {
            variable = variables[i];
            currentObject = currentObject[variable];
            if (currentObject === undefined || currentObject === null) return '';
        }
        return currentObject;
    });
}

String.prototype.renderTip = function (context) {
    return renderTip(this, context);
};


$(document).on('copy', function () {
    showMessage('你都复制了些什么呀，转载要记得加上出处哦~~', 5000);
});

function initTips() {
    $.ajax({
        cache: true,
        url: `${message_Path}message.json`,
        dataType: "json",
        success: function (result) {
            $.each(result.mouseenter, function (index, tips) {
                $(tips.selector).mouseenter(function () {
                    let text = tips.text;
                    if (Array.isArray(tips.text)) text = tips.text[Math.floor(Math.random() * tips.text.length + 1) - 1];
                    text = text.renderTip({text: $(this).text()});
                    showMessage(text, 3000);
                });
            });
            $.each(result.click, function (index, tips) {
                $(tips.selector).click(function () {
                    let text = tips.text;
                    if (Array.isArray(tips.text)) text = tips.text[Math.floor(Math.random() * tips.text.length + 1) - 1];
                    text = text.renderTip({text: $(this).text()});
                    showMessage(text, 3000);
                });
            });
        }
    });
}

initTips();

(function () {
    let text;
    if (document.referrer !== '') {
        let referrer = document.createElement('a');
        referrer.href = document.referrer;
        text = '欢迎阅读<span style="color:#0099cc;">「 ' + document.title + ' 」</span>';
        let domain = referrer.hostname.split('.')[1];
        if (domain === 'baidu') {
            text = '嗨！ 来自 百度搜索 的朋友！<br>欢迎访问<span style="color:#0099cc;">「 ' + document.title + ' 」</span>';
        } else if (domain === 'so') {
            text = '嗨！ 来自 360搜索 的朋友！<br>欢迎访问<span style="color:#0099cc;">「 ' + document.title + ' 」</span>';
        } else if (domain === 'google') {
            text = '嗨！ 来自 谷歌搜索 的朋友！<br>欢迎访问<span style="color:#0099cc;">「 ' + document.title + ' 」</span>';
        }
    } else {
        if (window.location.href === `${home_Path}`) { //主页URL判断，需要斜杠结尾
            let now = (new Date()).getHours();
            if (now > 23 || now <= 5) {
                text = '你是夜猫子呀？这么晚还不睡觉，明天起的来嘛？';
            } else if (now > 5 && now <= 7) {
                text = '早上好！一日之计在于晨，美好的一天就要开始了！';
            } else if (now > 7 && now <= 12) {
                text = '上午好！工作顺利嘛，不要久坐，多起来走动走动哦！';
            } else if (now > 12 && now <= 13) {
                text = '中午了，吃饭看剧时间！';
            } else if (now > 13 && now <= 14) {
                text = '午休时间，你还忙啥了？';
            } else if (now > 14 && now <= 18) {
                text = '绷住小伙，坚持下，就要加班了！';
            } else if (now > 18 && now <= 19) {
                text = '傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红~~';
            } else if (now > 19 && now <= 21) {
                text = '晚上好，今天过得怎么样？';
            } else if (now > 21 && now <= 23) {
                text = '已经这么晚了呀，早点休息吧，晚安~~';
            } else {
                text = '嗨~ 快来逗我玩吧！';
            }
        } else {
            text = '欢迎阅读<span style="color:#0099cc;">「 ' + document.title + ' 」</span>';
        }
    }
    showMessage(text, 12000);
})();


function showMessage(text, timeout) {
    let messageDom = $('.message');
    if (Array.isArray(text)) text = text[Math.floor(Math.random() * text.length + 1) - 1];
    messageDom.stop();
    messageDom.html(text).fadeTo(200, 1);
    if (timeout === null) timeout = 5000;
    hideMessage(timeout);
}

function hideMessage(timeout) {
    let messageDom = $('.message');

    messageDom.stop().css('opacity', 1);
    if (timeout === null) timeout = 5000;
    messageDom.delay(timeout).fadeTo(200, 0);
}

// window.setInterval(showHitokoto, 30000);
//
// function showHitokoto() {
//     $.getJSON('https://sslapi.hitokoto.cn/', function (result) {
//         showMessage(result.hitokoto, 5000);
//     });
// }


// function initLive2d() {
//     $('.hide-button').fadeOut(0).on('click', () => {
//         $('#landlord').css('display', 'none');
//         $('.show-button').css('display', 'block')
//     });
//     $('#landlord').hover(() => {
//         $('.hide-button').fadeIn(600)
//     }, () => {
//         $('.hide-button').fadeOut(600)
//     })
// }

// initLive2d();



// "mouseenter": [
//     {
//     "selector": "#landlord #live2d",
//         "text": [
//         "要看看胸么？"
//         ]
//     }
// ],
