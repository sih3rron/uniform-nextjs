import { createUniformContext } from '../functions/uniformContext';
const context = createUniformContext();

e.target.parentElement.previousSibling.querySelector('span[data-range]').getAttribute('data-range')

export function EnrichHandler(e, category){
        e.preventDefault();
        console.log("Enrich");
        context.update({
            enrichments: [
                {
                    cat: "category",
                    key: category,
                    str: 5
                }
            ]
        })
    }