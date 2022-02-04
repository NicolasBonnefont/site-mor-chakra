import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import { Controls, Player } from '@lottiefiles/react-lottie-player';

function PrimeiraSessao() {
  return (
    <Flex
      direction='row'
      justifyContent={'space-evenly'}
      alignItems={'center'}
      h='100vh'
      bg='gray.800'
    >
      <Flex w='580px' color='white' direction='column'>
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
        >Solicite nosso contato</Button>
      </Flex>

      <Player
        autoplay
        loop
        src="https://assets6.lottiefiles.com/packages/lf20_hadzves0.json"
        style={{ height: '380px', width: '380px' }}
      >
        <Controls visible={false} />
      </Player>

    </Flex>
  );
}

export default PrimeiraSessao;