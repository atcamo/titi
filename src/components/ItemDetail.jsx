import {
    Center,
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    Button,
    CardFooter,
    Divider,
    } from "@chakra-ui/react";
    import harinaalmendra from "../assets/harina-tostada-2.jpg";
    import { useParams } from "react-router-dom";
    import ItemCount from "./ItemCount";
    
    const ItemDetail = ({ harinas }) => {
        const { id } = useParams();
    
        const harinaFilter = harinas.filter((harina) => harina.id == id);
        return (
        <>
            {harinaFilter.map((harina) => (
            <div key={harina.id}>
                <Center p="1rem">
                <Card maxW="400px">
                    <CardBody>
                    <Image borderRadius="lg" src={harinaalmendra} />
                    <Stack mt="6" spacing="3">
                        <Heading size="md">{harina.name}</Heading>
                        <Text color="blue.800" fontSize="l">
                        Description: {harina.description}
                        </Text>
                        <Text color="blue.800" fontSize="l">
                        Category: {harina.category}
                        </Text>
                        <Text color="red.600" fontSize="xl">
                        Stock: {harina.stock}
                        </Text>
                        <Text color="green.600" fontSize="xl">
                        Price: U$D {harina.price}
                        </Text>
                    </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter className="card-footer">
                    <ItemCount stock={harina.stock} /> {/*cambio*/}
                    <Center>
                        <Button variant="solid" colorScheme="blue">
                        Buy
                        </Button>
                    </Center>
                    </CardFooter>
                </Card>
                </Center>
            </div>
            ))}
        </>
        );
    };
    
    export default ItemDetail;