window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import '@fortawesome/fontawesome-free/js/all.min';

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// طريقة مختصرة
//document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(item => new bootstrap.Tooltip(item)); 

document.querySelectorAll(".add-to-cart-btn").forEach(item => {
    item.addEventListener("click", () => {
        alert("أضيف المنتج إلى عربة الشراء")
    })
})

document.querySelectorAll('.size-option input[type="radio"]').forEach(item => {
    item.addEventListener('change', () => {
        document.querySelectorAll('.size-option').forEach(i => {  // i متغير يمثل جميع عناصر سايز اوبشن
            i.classList.remove('active')
        })
        // الآن وصلت إلى سايز اوبشن لأنك استخدمت بارينت نود مرتين
        item.parentNode.parentNode.classList.add('active')
    })
})

document.querySelectorAll('.color-option input[type="radio"]').forEach(item => {
    item.addEventListener('change', () => {
        document.querySelectorAll('.color-option').forEach(i => {  // i متغير يمثل جميع عناصر كولور اوبشن
            i.classList.remove('active')
        })
        // الآن وصلت إلى كولور اوبشن لأنك استخدمت بارينت نود مرتين، راجع درس تنسيق تفاصيل المنتج في فصل تطوير متجر إلكتروني
        item.parentNode.parentNode.classList.add('active')
    })
})


let Year = new Date().getFullYear();
document.getElementById("copyright").innerHTML = Year;


console.log("أهلاً بك في متجر عربي");

console.log("أهلاً بكم في أكاديمية حسوب");


// حساب سعر إجمالي المنتج

document.querySelectorAll('[data-product-quantity]').forEach(item => {
    item.addEventListener('change', () => {
        const newQuantity = item.value;
        const parent = item.closest('[data-product-info]');
        const pricePerUnit = parent.getAttribute('data-product-price');
        const totalPriceForProduct = newQuantity * pricePerUnit;
        parent.querySelector('.total-price-for-product').innerHTML = totalPriceForProduct + "$"

        calculateTotalPrice() 
    })
})

document.querySelectorAll('[data-remove-from-card]').forEach(item => {
    item.addEventListener('click', () => {
        item.closest('[data-product-info]').remove();
        calculateTotalPrice()

    })
})

function calculateTotalPrice() {
    let totalPriceForAllProduct = 0;
    document.querySelectorAll('[data-product-info]').forEach(product => {
        const pricePerUnite = product.getAttribute('data-product-price');
        const quantity = product.querySelector('[data-product-quantity]').value;
        const totalPriceForProduct = quantity * pricePerUnite;

        totalPriceForAllProduct = totalPriceForAllProduct + totalPriceForProduct;
    })

    document.getElementById('total-price-for-all-product').innerHTML = totalPriceForAllProduct;
}

