var bikes = []
var i;
for(i=0; i < document.querySelectorAll(".b-product__title a").length; i++){

    bike = {
        id: i,
        name: document.querySelectorAll(".b-product__title a")[i].text.trim(),
        image: document.querySelectorAll(".d-block.b-product__image-link.js-product-tile-link > img")[i].getAttribute("src"),
        price: document.querySelectorAll(".b-product__info.b-product__list--hidden.mt-10 .price .b-price .b-price__sale")[i].innerHTML.trim(),
        numPrice: parseFloat(document.querySelectorAll(".b-product__info.b-product__list--hidden.mt-10 .price .b-price .b-price__sale")[i].innerHTML.trim().slice(1)),
        rating: parseFloat(document.querySelectorAll(".b-product__content .b-inline-rating__range-wrap .b-inline-rating__rating")[0].textContent)
    };

    bikes.push(bike);
}

console.log(bikes);