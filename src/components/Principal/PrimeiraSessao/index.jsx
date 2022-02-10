import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { Controls, Player } from '@lottiefiles/react-lottie-player';
import JsonLottie from '../../../assets/principal/primeiraSessao/json.json'
function PrimeiraSessao() {
  return (
    <Flex
      direction={['column', 'column', 'row']}
      w='100%'
      h='100vh'
      pl='12%'
      pr='12%'
      alignItems='center'
      justifyContent={['center', 'center', 'space-evenly']}
      bg='gray.700'
    >
      <Flex
        minW='250px'
        w={['100%', '100%', '40%']}
        color='white'
        direction='column'

      >
        <Heading fontWeight={'bold'}>
          Há mais de 27 anos ajudando nossos clientes a melhorarem
          seus resultados.
        </Heading>

        <Text mt='4'>
          Com nossos Softwares você encontra as informações precisas para a
          gestão de sua Empresa.
        </Text>

        <Button
          h='16'
          mt='14'
          variant='solid'
          color='#Fff'
          fontWeight='bold'
          colorScheme='blue'
        >
          SOLICITE NOSSO CONTATO
        </Button>
      </Flex>

      <Box
        display={['none', 'none', 'block']}
        w='50%'
      >
        <Player
          autoplay
          loop
          src={JsonLottie}
        >
          <Controls visible={false} />
        </Player>
      </Box>


    </Flex>
  );
}

export default PrimeiraSessao;