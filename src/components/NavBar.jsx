import React from 'react';
import { Container, Flex, Spacer, Center, Text, Square, Box } from '@chakra-ui/react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <>
            <Container maxW='200vh' bg='gray' color='white'>
                
                <Flex color='white'>
                    <Center w='100px' bg='green.500'>
                        <h1>Titi gluten Free</h1>
                    </Center>
                    <Box>
                        <CartWidget/>
                    </Box>
                </Flex>
            </Container>
            <Box bgImage="url('../assets/gluten free.jpg')"
                bgPosition="center"
                bgRepeat="no-repeat"/>
        </>
    );
}

export default NavBar;