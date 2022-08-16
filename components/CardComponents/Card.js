import Image from "next/image";
import Bikes from '../../data/Bikes.json';

import { compareValues } from "../../functions/Order";
import CardTitle from "./CardTitle";
import CardButton from "./CardButton";
import CardPrice from "./CardPrice";

const Card = ({sort, sortDirection}) => {
    const data = Bikes.data;
    let data2 = data.sort(compareValues(sort, sortDirection))
    return ( 
    <>
    <div className="grid grid-cols-4 w-full text-black">
        { data2.map((bike) => {
            const {id, name, image, price, numPrice} = bike;

            return (
                <div key={id} className="bg-slate-100 rounded-xl p-4 m-4 w-80">
                        <CardTitle name={name} />
                    <div className="mt-5">
                        <Image src={image} width={312} height={312} alt={name} />
                    </div>
                    <CardPrice price={price} />
                    <div className="flex mt-10 mb-0" >
                        <CardButton tier="secondary" callToAction="View Details" name={name}/>
                        <CardButton tier="primary" callToAction="Add to Cart" name={name} />
                    </div>
                </div>
            )
        })
        }
    </div>
    </>
    );
}
 
export default Card;