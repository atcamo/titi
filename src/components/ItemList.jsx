import Item from "./Item";
import { Container } from "@chakra-ui/react";



const ItemList = ({ harinas }) => {
    
    const itemListstyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        };
    
    return (
    <>
        <Container maxW="container.sm" style={itemListstyle}>
        {harinas?.map((harina) => (
            <Item
            key={harina.id}
            id={harina.id}
            name={harina.name}
            description={harina.description}
            price={harina.price}
            stock={harina.stock}
            category={harina.category}
            />
        ))}
        </Container>
    </>
    );
};

export default ItemList;