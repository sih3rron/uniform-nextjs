const MockHero = ({ content }) => {
    const { fields, fields:{ title, text} } = content;
    return ( 
        <>
            <h1>{title}</h1>
            <h2>{text}</h2>
        </>
     );
}
 
export default MockHero;