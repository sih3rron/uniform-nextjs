const CardPrice = ({price}) => {
    let strPrice = price;
    var numPrice = strPrice.replace(/[£,]+/g, "");

    function priceAttrEnrich(numPrice) {
        let range = "";
            if (numPrice <= 100) { range = 1; }
            if (numPrice > 100 && numPrice <= 500) { range = 2; }
            if (numPrice > 500 && numPrice <= 750) { range = 3; }
            if (numPrice > 750 && numPrice <= 1000) { range = 4; }
            if (numPrice > 1000) { range = 5; }
        return range;
    }

    let range =  priceAttrEnrich(numPrice)

    return ( 
        <div className="flex">
            <span className="price font-bold" data-range={range}>{price}</span>
        </div>
     );
}
 
export default CardPrice;