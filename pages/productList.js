import Card from "../components/CardComponents/Card";

const productList = () => {
    return ( 
        <Card 
            sort="price"
            sortDirection="asc"
        />
     );
}
 
export default productList;