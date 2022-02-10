import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { Player } from '@lottiefiles/react-lottie-player';
import Image from 'next/image';
import React from 'react';


function Cards({ titulo, subTitulo, imagem }) {
  return (
    <Flex
      shadow='2xl'
      w={['100%', '100%', '50%', '31%']}
      cursor='pointer'
      p='4'
      justifyContent='center'
      alignItems='center'
      bg='#fff'
      margin='2'
      _hover={
        {
          boxShadow: 'md',
          transform: 'scale(1.05)',
          transition: 'all .2s ease-in-out'
        }
      }
    >
      <Stack
        w='100%'
        spacing={4}
      >


        <Box
          w='80%'
        >
          <Image
            src={imagem}
            alt={titulo}
          />
        </Box>

        <Heading as='h2' fontSize='2rem' color='gray.700'>
          {titulo}
        </Heading>

        <Text color='gray.600'>{subTitulo}</Text>
      </Stack>


    </Flex>
  );
}

export default Cards;