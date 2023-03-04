import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Flex, Box, Button, Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <>
            <Box bg="#130900" color="#fff">
                <Container maxW="90%" bg="#130900" color="#fff">
                    <Flex justify="space-between" align="center" direction={{ base: 'column', md: 'row' }}>
                    <h1 style={{ fontFamily: "'Sassy Frass', cursive", fontSize: "18vh", marginLeft: "20px", textShadow: "2px 2px 8px #F9B603", lineHeight: "1" }}>Titi gluten Free</h1>
                        <Flex ml={{ base: 0, md: 5 }}>
                        <Button as={Link} to={"/catalogue"} fontSize="1.5em" size="sm" colorScheme="teal" mt={5} mb={3} mr={50} px={2} py={1} bg="#3F2315" _hover={{ bg: "#D17C25" }} opacity={0.9}>
                            Catalogue
                        </Button>
                        <Menu>
                            <MenuButton as={Button} fontSize="1.5em" size="sm" colorScheme="teal" mt={5} mb={3} mr={50} px={2} py={1} bg="#3F2315" _hover={{ bg: "#D17C25" }} opacity={0.9}>
                            Categoria
                            </MenuButton>
                            <MenuList>
                            <MenuList>
                                <MenuItem onClick={() => { window.location.href=`/category/${"MEZCLA"}` }} color="#000" _hover={{ bg: "#F9B603", color: "#fff"}}>Mezcla</MenuItem>
                                <MenuItem onClick={() => { window.location.href=`/category/${"HARINA"}` }} color="#000" _hover={{ bg: "#F9B603", color: "#fff"}}>Harina</MenuItem>

                            </MenuList>
                            </MenuList>
                        </Menu>
                        
                        <Box>
                            <Link to={"/cart"}>
                                <CartWidget />
                            </Link>
                        </Box>
                        
                        </Flex>
                    </Flex>
                </Container>
            </Box>
        </>
    );
};

export default NavBar;

{/**fontSize="1.5em" size="sm" colorScheme="teal" mt={5} mb={3} mr={50} px={2} py={1} bg="#3F2315" _hover={{ bg: "#D17C25" }} opacity={0.9} */}