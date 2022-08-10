const Button = ({ content }) => {
    const {fields, fields: {callToAction, tier}} = content;
    return (
            <button className={
                `flex-end px-8 py-4 text-md bg-white text-blue-600 font-semibold rounded-full border border-purple-200 ${tier}`
                }>
                {callToAction}
            </button>
     );
}
 
export default Button;


