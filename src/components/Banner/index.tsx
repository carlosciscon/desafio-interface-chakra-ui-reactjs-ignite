import {Flex, Box, Image, Stack, Heading, Text} from "@chakra-ui/react";

export function Banner(){
    return (
        <Flex
            w="100%"
            align="center"
            justify= "center"
        >
            <Flex
                direction='row'
                width='100%'
                height='335px'
                bgImage="images/Background.png"
                bgRepeat='no-repeat'
                bgSize='cover'
                bgPosition='center'
                justify='space-evenly'
                mb={['14', '28']}
            >
                <Stack
                    direction='column'
                    p='8'
                    justify='center'
                    spacing='5'
                >
                    <Heading
                        size='lg'
                        color='#ffffff'
                    >
                        5 continentes,<br />
                        infinitas possibilidades.
                    </Heading>
                    <Text
                        color='#ffffff'
                    >
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                    </Text>
                </Stack>
                <Box>
                    <Image
                        src='images/Airplane.png'
                        alt='Aviao'
                        mt='76px'
                    />
                </Box>
            </Flex>
        </Flex>        
    )
}