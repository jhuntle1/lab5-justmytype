var sentences = [
    ' ten ate neite ate nee enet ite ate inet ent eate',
    'Too ato too nOt enot one totA not anot tOO aNot',
    'oat itain oat tain nate eate tea anne inant nean',
    'itant eate anot eat nato inate eat anot tain eat',
    'nee ene ate ite tent tiet ent ine ene ete ene ate'
];
sentenceCounter = 0;
// var moveBy = "2px";
// var sentenceDiv = document.createElement('div');
//     sentenceDiv.className = 'divvy';
//     sentenceDiv.innerText = 'Click Me';
//     sentenceDiv.addEventListener('keydown', moveBy);


// var textCorrect = 'keydown'
// if (textCorrect==true){ 
//     function next(){ 
//         $('letter').removeClass('yellow'); 
//         $('nextLetter').addClass('yellow'); 
//     } 
// } 

$(document).ready(function () {
    var upper = $('#keyboard-upper-container'),
        lower = $('#keyboard-lower-container');

    upper.hide();
    $('#sentence').append(sentences[sentenceCounter]);

    $(document).on('keyup keydown', function (e) {
        if (e.shiftKey) {
            lower.hide();
            upper.show();
        } else {
            upper.hide();
            lower.show();
        }

        if (e.type === 'keydown') {
            handleHighlight(e, 'pink');
        } else {
            handleHighlight(e, '#f5f5f5');
        }
    })
})

function handleSentences() {
    $('#sentence').empty();
    $('#sentence').append(sentences[sentenceCounter]);
    sentenceCounter++
}

function handleHighlight(e, color) {
    var code = e.keyCode;

    if (!e.isShift && utils.isAlpha(code)) {
        code = e.keyCode + 32;
    }

    if (utils.isAlphanumeric(code)) {
        $('#' + code).css('background-color', color);
    } else {
        $('span:contains(' + e.key + ')').css('background-color', color);
    }
    
}

var utils = {
    isAlphanumeric: function (code) {
        if ((code >= 65 && code <= 90) || (code >= 48 && code <= 57) || (code==32)) {
            return true;
        } else {
            return false;
        }
    },
    isNumber: function (code) {
        if (code >= 48 && code <= 57) {
            return true;
        } else {
            return false;
        }
    },
    isAlpha: function (code) {
        if (code >= 65 && code <= 90) {
            return true;
        } else {
            return false;
        }
    }
};
