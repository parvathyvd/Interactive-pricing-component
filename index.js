
let sliderRanger = document.querySelector('#slider-range');
const paymentValue = document.querySelector('.payment .payment-value');
const pageViewValue = document.querySelector('.pageViewValue');
let toggleSwitch = document.querySelector('.switch input');
let monthOrYearly = document.querySelector('.small');


const getSubscriptionSliderValue = () => {
    if(toggleSwitch.checked === true){
        //yearly plan
        getSliderValue();
        monthOrYearly.innerHTML = '/year';
    }
    else{
        //monthly plan
        getSliderValue();
        monthOrYearly.innerHTML = '/month';
    }
}
const getSliderValue = () => {
    console.log('slide change', sliderRanger.value);
    if(sliderRanger.value === '1'){
        if(toggleSwitch.checked == true){
        paymentValue.innerHTML = (parseFloat(sliderRanger.value) * 8 * 12 * .75).toFixed(2);
        }
        else{
        paymentValue.innerHTML = (parseFloat(sliderRanger.value) * 8).toFixed(2);
        }
        pageViewValue.innerHTML = '10K';
    }
    if(sliderRanger.value === '2'){
        if(toggleSwitch.checked == true){
        paymentValue.innerHTML = (parseFloat(sliderRanger.value) * 8 * 12 * .75).toFixed(2);
        }
        else{
        paymentValue.innerHTML = (parseFloat(sliderRanger.value) * 8).toFixed(2);
        }
        pageViewValue.innerHTML = '50K';
    }
    if(sliderRanger.value === '3'){
        if(toggleSwitch.checked == true){
        paymentValue.innerHTML = (parseFloat(sliderRanger.value) * 8 * 12 * .75).toFixed(2);
        }
        else{
        paymentValue.innerHTML = (parseFloat(sliderRanger.value) * 8).toFixed(2);
        }
        pageViewValue.innerHTML = '100K';
    }
    if(sliderRanger.value === '4'){
        if(toggleSwitch.checked == true){
        paymentValue.innerHTML = (parseFloat(sliderRanger.value) * 8 * 12 * .75).toFixed(2);
        }
        else{
        paymentValue.innerHTML = (parseFloat(sliderRanger.value) * 8).toFixed(2);
        }
        pageViewValue.innerHTML = '500K';
    }
    if(sliderRanger.value === '5'){
        if(toggleSwitch.checked == true){
        paymentValue.innerHTML = (parseFloat(sliderRanger.value) * 8 * 12 * .75).toFixed(2);
        }
        else{
        paymentValue.innerHTML = (parseFloat(sliderRanger.value) * 8).toFixed(2);
        }
        pageViewValue.innerHTML = '1M';
    }

}

sliderRanger.addEventListener('input', getSliderValue);

toggleSwitch.addEventListener('change', getSubscriptionSliderValue)

