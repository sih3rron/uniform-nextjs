import { createUniformContext } from '../functions/uniformContext';
const context = createUniformContext();

//ID:id|Name:name|Rating:rating|Price:price
//Ascending:asc|Descending:desc

export function Enrich(e, name){
    e.preventDefault();
    let title = name;
    let attribute = "4";
    if(title.includes(" Mens ")) { attribute = "1"; console.log("Mens") }
    if(title.includes(" Womens ")) { attribute = "2"; console.log("Womens") }
    if(title.includes(" Kids ") || title.includes(" Junior ")) { attribute = "3"; console.log("Kids") }
    
    console.log(e.target.parentElement.previousSibling.querySelector('span[data-range]').getAttribute('data-range'))
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