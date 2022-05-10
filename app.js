const input = document.querySelector('#brand-name');
const search = document.querySelector('.search-btn');
let cartDiv = document.querySelector('#phone-cart');
let detailsDiv = document.querySelector('#phone-details');
let phoneValue = '';
let showLess = true;
const spinner = document.querySelector('#spin');

let showMoreBtn = document.querySelector('#show');
showMoreBtn.style.display = 'none';
spinner.style.display = 'none';


// toggole function 
const toggleSpin = displaySpinner => {
    spinner.style.display = displaySpinner;
}


//search btn function 
search.addEventListener('click', () => {
    const inputValue = input.value;

    if ((inputValue === '')) {
        alert("Please provide your prefered gadget Brand");
    } else {
        onLoad(inputValue);
    }

})

// click on show more button 
showMoreBtn.addEventListener('click', () => {
    phoneValue != '' ? morePhones(phoneValue) : alert('No Brand Name is found');
})

//call api for showing more than 20 Phones
const morePhones = (phoneName) => {
    showMoreBtn.style.display = 'none';
    showLess = false;
    onLoad(phoneName);

}

// getting data from api for phone brand 
const onLoad = (brandName) => {
    input.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${brandName}`;
    toggleSpin('block');
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data))
}
