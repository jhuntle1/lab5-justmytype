$(document).ready(function() {
    var upper = $('#keyboard-upper-container'),
        lower = $('#keyboard-lower-container');

    upper.hide();

    $(document).on('keyup keydown', function(e) {
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

    });
});

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
    isAlphanumeric: function(code) {
        if ((code >= 65 && code <= 90) || (code >= 48 && code <= 57) || (code=32)) {
            return true;
        } else {
            return false;
        }
    },
    isNumber: function(code) {
        if (code >= 48 && code <= 57) {
            return true;
        } else {
            return false;
        }
    },
    isAlpha: function(code) {
        if (code >= 65 && code <= 90) {
            return true;
        } else {
            return false;
        }
    }
};