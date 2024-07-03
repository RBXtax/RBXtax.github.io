// add ad links between the quotation marks 
// e.g. 
// var left_url = 'https://www.google.com'
// to set the left banner as an ad that points to google
var left_url = ''
var right_url = ''








function rotaterbx() {
    element = document.getElementById('rbxsign');
    const spin = [
        { transform: 'rotate(0)' },
        { transform: 'rotate(360deg)' }
    ];
    const timing = {
        duration: 1000,
        iterations: 1,
        easing: 'ease'
    }
    element.animate(spin, timing)
}

function updateValue() {
    
    var input = document.getElementById('value');
    var output = document.getElementById('calculated-amount');

    var regex = /^[0-9]+$/;
    if (input.value.match(regex)) {
        output.innerHTML = "<span class='dollar-sign'>$</span>"+format((105/30000 * input.value).toFixed(2))
        
    }else if (input.value == '') {
        output.innerText = ''
    }else {
        output.removeAttribute('class')
        output.innerText = 'Invalid Input'
        output.backgroundImage = null
    }
}

function format(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function loadbanners() {
    left_v = document.getElementById('left-devex-banner-v');
    left_v.style.backgroundImage = "url('vertical_banners/devex/left.png')";
    left_h = document.getElementById('left-devex-banner-h');
    left_h.style.backgroundImage = "url('horizontal_banners/devex/left.png')";

    right_v = document.getElementById('right-devex-banner-v')
    right_v.style.backgroundImage = "url('vertical_banners/devex/right.png')";
    right_h = document.getElementById('right-devex-banner-h')
    right_h.style.backgroundImage = "url('horizontal_banners/devex/right.png')";

    leftlink = document.querySelectorAll('.left-devex-banner-link')
    rightlink = document.querySelectorAll('.right-devex-banner-link')


    if (left_url == '') {
        for (var i = 0; i<leftlink.length; i++) {
            leftlink[i].style.display = 'none'
        }
    } else {
        for (var i = 0; i<leftlink.length; i++) {
            leftlink[i].href = left_url
        }
    }

    if (right_url == '') {
        for (var i = 0; i<rightlink.length; i++) {
            rightlink[i].style.display = 'none'
        }
    } else {
        for (var i = 0; i<rightlink.length; i++) {
            rightlink[i].href = right_url
        }
    }


}

window.onload = function() {
    loadbanners()
}