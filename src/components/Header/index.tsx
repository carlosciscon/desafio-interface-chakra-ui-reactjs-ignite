import {Flex, Box} from "@chakra-ui/react";

export function Header() {
    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            h="20"
            mx="auto"
            px="6"
            align="center"
            justify= "center"
        >
            <Flex alignItems="center">
                <img src="images/logo.png" alt="worldtrip" />            
            </Flex>
        </Flex>        
    )
}