import React from 'react';
import { Container, Flex, Box, Button, Menu, MenuButton, MenuList, MenuItem, Center} from '@chakra-ui/react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
    <Box bg="#130900" color="#fff">
        <Container maxW="90%" bg="#130900" color="#fff">
        <Flex justify="space-between" align="center" direction={{ base: 'column', md: 'row' }}>
        <h1 style={{ fontFamily: "'Sassy Frass', cursive", fontSize: "18vh", marginLeft: "20px", textShadow: "2px 2px 8px #F9B603", lineHeight: "1" }}>Titi gluten Free</h1>
            <Flex ml={{ base: 0, md: 5 }}>
            <Button fontSize="1.5em" size="sm" colorScheme="teal" mt={5} mb={3} mr={50} px={2} py={1} bg="#3F2315" _hover={{ bg: "#D17C25" }} opacity={0.9}>
                Sobre Nosotros
            </Button>
            <Menu>
                <MenuButton as={Button} fontSize="1.5em" size="sm" colorScheme="teal" mt={5} mb={3} mr={50} px={2} py={1} bg="#3F2315" _hover={{ bg: "#D17C25" }} opacity={0.9}>
                Harinas
                </MenuButton>
                <MenuList >
                <MenuItem color="#000" _hover={{ bg: "#F9B603", color: "#fff"}}>Item 1</MenuItem>
                <MenuItem color="#000" _hover={{ bg: "#F9B603", color: "#fff"}}>Item 2</MenuItem>
                <MenuItem color="#000" _hover={{ bg: "#F9B603", color: "#fff"}}>Item 3</MenuItem>
                </MenuList>
            </Menu>
            <Menu>
                <MenuButton as={Button} fontSize="1.5em" size="sm" colorScheme="teal" mt={5} mb={3} mr={50} px={2} py={1} bg="#3F2315" _hover={{ bg: "#D17C25" }} opacity={0.9}>
                Cereales
                </MenuButton>
                <MenuList>
                <MenuItem color="#000" _hover={{ bg: "#F9B603", color: "#fff"}}>Item 1</MenuItem>
                <MenuItem color="#000" _hover={{ bg: "#F9B603", color: "#fff"}}>Item 2</MenuItem>
                <MenuItem color="#000" _hover={{ bg: "#F9B603", color: "#fff"}}>Item 3</MenuItem>
                </MenuList>
            </Menu>
            <CartWidget />
            </Flex>
        </Flex>
        </Container>
    </Box>
    );
};

export default NavBar;