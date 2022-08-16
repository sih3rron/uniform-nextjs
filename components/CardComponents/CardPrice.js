const CardPrice = ({price}) => {

    let strPrice = price;
    var numPrice = strPrice.replace(/[£,]+/g, "");

    function priceAttrEnrich(numPrice) {
        let range = "";
            if (numPrice <= 100) { range = "Very Low"; }
            if (numPrice > 100 && numPrice <= 500) { range = "Low"; }
            if (numPrice > 500 && numPrice <= 750) { range = "Mid"; }
            if (numPrice > 750 && numPrice <= 1000) { range = "High"; }
            if (numPrice > 1000) { range = "Premium"; }
        return range;

    }

    let range = priceAttrEnrich(numPrice)

    return ( 
        <div className="flex">
            <span className="price font-bold" data-range={range}>{price}</span>
        </div>
     );
}
 
export default CardPrice;