import Image from "next/image";

const CardImage = ({image, name}) => {
    return ( 
    <div className="mt-5">
        <Image src={image} width={312} height={312} alt={name} />
    </div>
     );
}
 
export default CardImage;