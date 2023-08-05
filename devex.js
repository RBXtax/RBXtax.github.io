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