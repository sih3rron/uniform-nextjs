import Image from "next/image";
import Button from "./Button";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import MainCopy from "./MainCopy";


const Hero = ( props ) => {
    return (

        <section className="p-8 max-w-xl mx-auto bg-white rounded-xl shadow-lg">
            <Heading heading={props.data.landingPage.heading}/>
            <SubHeading subheading={props.data.landingPage.subHeading}/>
            <MainCopy copy={props.data.landingPage.mainCopy}/>
            <div className="mx-10">
                <Image 
                    src="/images/developer-hero.png"
                    width={props.data.landingPage.heroImage.width}
                    height={props.data.landingPage.heroImage.height}
                    alt="Woman typing"
                />
            </div>
            <div className="w-full flex flex-col my-8">
                <Button 
                    label={props.data.landingPage.primaryCta}
                    tier="primary"
                />
            </div>
        </section> 

     );
}

export default Hero;