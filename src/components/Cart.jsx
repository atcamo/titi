import {
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Button,
    Container,
    Box,
    Textarea,
    Spacer,
    } from "@chakra-ui/react";

    const Cart = () => {

        return (
        <Container backgroundColor={"white"} borderRadius="10">
            <FormControl>
                <Box >
                    <FormLabel>Tu nombre</FormLabel>
                    <Input type="text" />
                    <FormLabel>E-mail</FormLabel>
                    <Input type="email"/>
                    
                </Box>
                <FormLabel>Que necesitas?</FormLabel>
                <Textarea></Textarea>
                <Box pt="10px" pb="10px">
                    <Button colorScheme="teal" variant="outline" bg="#F9DFAB" fontSize="1.5em" size="sm" >
                        Enviar
                    </Button>   
                        <FormHelperText>Nunca compartiremos tu infomación</FormHelperText>
                </Box>
            
            </FormControl>
        </Container>
        );
    };
    
    export default Cart;