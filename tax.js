// add ad links between the quotation marks 
// e.g. 
// var left_url = 'https://www.google.com'
// to set the left banner as an ad that points to google
var left_url = ''
var right_url = ''








function updateValue() {
    var input = document.getElementById('value');
    var output = document.getElementById('calculated-amount');
    var regex = /^[0-9]+$/;
    if (input.value.match(regex)) {
        output.setAttribute('class', 'rbxsign')
        if (getOption() === true) {
            output.innerText = format(Math.floor(parseInt(input.value) * 0.7))
        }else{
            output.innerText = format(Math.ceil(parseInt(input.value) / 0.7))
        }
        
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

function getOption() {
    var before = document.getElementById('before')
    if (before.style.backgroundColor === 'rgb(41, 151, 63)') {
        return true
    }else {
        return false
    }
}


function setDefault(option) {
    var element = document.getElementById(option);
    element.style.backgroundColor = '#29973f';
    var input = document.getElementById('value');
    input.placeholder = 'Robux ' + option + ' tax'

    var subtext = document.getElementById('subtext')
    subtext.innerText = 'You would get:'
}

function changeCalc(option) {

    var lis = document.querySelectorAll('.button')
    lis.forEach((li) => {
        li.style.backgroundColor = '#27282c'
    });

    var element = document.getElementById(option)
    element.style.backgroundColor = '#29973f'

    var input = document.getElementById('value');
    input.placeholder = 'Robux ' + option + ' tax'

    var subtext = document.getElementById('subtext')
    if (option == 'before') {
        subtext.innerText = 'You would get:'
    } else {
        subtext.innerText = 'You would need:'
    }
    updateValue()
}

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

function loadbanners() {
    left_v = document.getElementById('left-tax-banner-v');
    left_v.style.backgroundImage = "url('vertical_banners/tax/left.png')";
    left_h = document.getElementById('left-tax-banner-h');
    left_h.style.backgroundImage = "url('horizontal_banners/tax/left.png')";

    right_v = document.getElementById('right-tax-banner-v')
    right_v.style.backgroundImage = "url('vertical_banners/tax/right.png')";
    right_h = document.getElementById('right-tax-banner-h')
    right_h.style.backgroundImage = "url('horizontal_banners/tax/right.png')";

    leftlink = document.querySelectorAll('.left-tax-banner-link')
    rightlink = document.querySelectorAll('.right-tax-banner-link')


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
    setDefault("before")
    loadbanners()
}