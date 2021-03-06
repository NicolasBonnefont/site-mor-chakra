import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import whatsapp from '../../../../assets/MenuSuperior/whatsapp.png'

function FalarComAgente() {

  return (
    <Flex
      h='auto'
      w='auto'
      bg='whatsapp.500'      
      cursor={'pointer'}
      borderRadius='5px'
      p='2'
      border='1px solid'
      shadow={'md'}
      _hover={{ bg: 'whatsapp.600' }}
      onClick={() => window.open('https://api.whatsapp.com/send?phone=5511970766408&text=Ol%C3%A1%20!%20Gostaria%20de%20Ajuda.', '_blank')}
    >
      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
      >

        <Image
          src={whatsapp}
          alt="MOR INFORMATICA"
          width={28}
          height={28}
        />

        <Text
          color='#fff'
          fontSize={'16px'}
          fontWeight={'bold'}
        >
          Fale com a gente !
        </Text>
        ,
      </Stack>

    </Flex>
  )
}

export default FalarComAgente