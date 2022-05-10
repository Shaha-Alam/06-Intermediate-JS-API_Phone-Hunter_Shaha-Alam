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