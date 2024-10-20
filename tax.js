// add the URLs as comma separated and in quotation marks
// the num values below must match the number of URLS in each array (e.g. 0 when empty)


// CHANGE THIS ONLY

var left_url = [
    'https://gemsloot.com/?aff=RbxTax',
    'https://discord.gg/gz957GXktT',
]
var right_url = [
    'https://t.ly/LsYHD',
    'https://discord.gg/kloonservices',
]
var num_left_banners = 2
var num_right_banners = 2

// CHANGE THIS ONLY













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

function changeBanner(i, j) {
    leftlink = document.querySelectorAll('.left-tax-banner-link')
    rightlink = document.querySelectorAll('.right-tax-banner-link')

    if (num_left_banners != 0) {
        if (i > num_left_banners) {i=1}
        left_v = document.getElementById('left-tax-banner-v');
        left_v.style.backgroundImage = "url('vertical_banners/tax/left/"+i+".png')";
        left_h = document.getElementById('left-tax-banner-h');
        left_h.style.backgroundImage = "url('horizontal_banners/tax/left/"+i+".png')";

        

        
        for (var k = 0; k<leftlink.length; k++) {
            leftlink[k].href = left_url[i-1]
        }
    } else {
        for (var k = 0; k<leftlink.length; k++) {
            leftlink[k].style.display = 'none'
        }
    }

    if (num_right_banners != 0) {
        if (j > num_right_banners) {j=1}
        right_v = document.getElementById('right-tax-banner-v')
        right_v.style.backgroundImage = "url('vertical_banners/tax/right/"+j+".png')";
        right_h = document.getElementById('right-tax-banner-h')
        right_h.style.backgroundImage = "url('horizontal_banners/tax/right/"+j+".png')";
        
        

        for (var k = 0; k<rightlink.length; k++) {
            rightlink[k].href = right_url[j-1]
        }
    } else {
        for (var k = 0; k<rightlink.length; k++) {
            rightlink[k].style.display = 'none'
        }
    }
    

    setTimeout(function() {changeBanner(++i, ++j)}, 10000);
}



window.onload = function() {
    setDefault("before")
    var i = Math.floor(Math.random() * num_left_banners)+1;
    var j = Math.floor(Math.random() * num_right_banners)+1;
    changeBanner(i, j)
    loadbanners()
}
