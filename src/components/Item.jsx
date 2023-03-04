import React from 'react'
import { Center,
    Card,
    CardBody,
    Image,
    Heading,
    Text,
    Divider,
    Stack,
    CardFooter,
    Button,} from '@chakra-ui/react'
import harina from "../assets/harina-tostada-2.jpg";
import { Link } from "react-router-dom";


const Item = ({id, name, stock, category}) => {

    return (
        <>
            <div key={id}>
                <Center p="1rem">
                    <Card maxW='sm'>
                    <CardBody >
                    <Image borderRadius="lg" src={harina} />
                    <Stack mt="6" spacing="3">
                    <Heading size="md">{name}</Heading>

                    <Text color="blue.800" fontSize="l">
                    Category: {category}
                    </Text>
                    <Text color="red.600" fontSize="xl">
                    Stock: {stock}
                    </Text>
                    </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                    <Center>
                    <Button variant="solid" colorScheme="blue" as={Link} to={`/item/${id}`}>Details</Button>
                    </Center>
                    </CardFooter>
                    </Card>
                </Center>
            </div>
        </>
    )
}

export default Item