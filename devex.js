// add the URLs as comma separated and in quotation marks
// the num values below must match the number of URLS in each array (e.g. 0 when empty)


// CHANGE THIS ONLY

var left_url = [
    '',
]
var right_url = [
    '',

]
var num_left_banners = 1
var num_right_banners = 1

// CHANGE THIS ONLY















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


function changeBanner(i, j) {
    leftlink = document.querySelectorAll('.left-devex-banner-link')
    rightlink = document.querySelectorAll('.right-devex-banner-link')

    if (num_left_banners != 0) {
        if (i > num_left_banners) {i=1}
        left_v = document.getElementById('left-devex-banner-v');
        left_v.style.backgroundImage = "url('vertical_banners/devex/left/"+i+".png')";
        left_h = document.getElementById('left-devex-banner-h');
        left_h.style.backgroundImage = "url('horizontal_banners/devex/left/"+i+".png')";

        

        
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
        right_v = document.getElementById('right-devex-banner-v')
        right_v.style.backgroundImage = "url('vertical_banners/devex/right/"+j+".png')";
        right_h = document.getElementById('right-devex-banner-h')
        right_h.style.backgroundImage = "url('horizontal_banners/devex/right/"+j+".png')";
        
        

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
    var i = Math.floor(Math.random() * num_left_banners)+1;
    var j = Math.floor(Math.random() * num_right_banners)+1;
    changeBanner(i, j)
}
