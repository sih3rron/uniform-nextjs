import { Enrich } from "../../functions/Enrich";

const CardButton = ({tier, callToAction, name}) => {
    return ( 
        <>
            <button 
                className={`${tier === "primary" ? "basis-1/2 bg-green-700 rounded-md p-2 text-white primary": "basis-1/2 bg-slate-500 rounded-md p-2 text-white mr-5 secondary"}`}
                onClick={(e) => {Enrich(e, name)}}
                data-button="true"
            >{callToAction}</button>
        </>
     );
}
 
export default CardButton;