import { useUniformContext } from "@uniformdev/context-react";

const CardButton = ({tier, callToAction, name}) => {
    const { context } = useUniformContext();

    const dataAttrEnrich = (e, name) => {
        e.preventDefault();
        let title = name;
        let attribute = "Unknown";
        if(title.includes(" Mens ")) {attribute = "Mens"; console.log("Mens")}
        if(title.includes(" Womens ")) {attribute = "Womens"; console.log("Womens")}
        if(title.includes(" Kids ") || title.includes(" Junior ")) {attribute = "Kids"; console.log("Kids")}

        context.update({
            enrichments: [
                {
                    cat: "1",
                    key: attribute,
                    str: 1
                },
                {
                    cat: "2",
                    key: e.target.parentElement.previousSibling.querySelector('span[data-range]').getAttribute('data-range'),
                    str: 1
                }

            ]
        })

    }

    return ( 
        <>
            <button 
                className={`${tier === "primary" ? "basis-1/2 bg-green-700 rounded-md p-2 text-white primary": "basis-1/2 bg-slate-500 rounded-md p-2 text-white mr-5 secondary"}`}
                onClick={(e) => { dataAttrEnrich(e, name)}}
                data-button="true"
            >{callToAction}</button>
        </>
     );
}
 
export default CardButton;