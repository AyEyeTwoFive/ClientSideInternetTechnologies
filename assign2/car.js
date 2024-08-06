function calculateTotal() {
    const form = document.getElementById('configForm');
    let total = 0;

    const config = form.elements['config'];
    for (let i = 0; i < config.length; i++) {
        if (config[i].checked) {
            total += parseFloat(config[i].value);
        }
    }

    const factory = form.elements['factory'];
    for (let i = 0; i < factory.length; i++) {
        if (factory[i].checked) {
            total += parseFloat(factory[i].value);
        }
    }

    const dealer = form.elements['dealer'];
    for (let i = 0; i < dealer.length; i++) {
        if (dealer[i].checked) {
            total += parseFloat(dealer[i].value);
        }
    }

    document.getElementById('totalPrice').textContent = `$${total.toLocaleString()}.00`;
}

function changeColor() {
    const color = document.getElementById('colorSelect').value;
    const carImage = document.getElementById('carImage');
    carImage.src = `${color}.jpg`;
}

function changeColor(color) {
    const carImage = document.getElementById('carImage');
    carImage.src = `${color}.jpg`;

    const colorOptions = document.querySelectorAll('.color-options div');
    colorOptions.forEach(option => {
        if (option.textContent.toLowerCase() === color) {
            option.classList.add('selected');
        } else {
            option.classList.remove('selected');
        }
    });
}
