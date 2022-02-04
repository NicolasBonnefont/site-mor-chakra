import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import whatsapp from '../../../../assets/MenuSuperior/whatsapp.png'

function FalarComAgente() {

  return (
    <Flex
      h='auto'
      w='auto'
      bg='white'
      cursor={'pointer'}
      borderRadius='5px'
      p='2'
      border='1px solid'
      shadow={'md'}
      _hover={{ bg: 'gray.200' }}
    >
      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
      >

        <Image
          src={whatsapp}
          alt="MOR INFORMATICA"
          quality={100}
          width={28}
          height={28}
        />

        <Text
          color={'gray.700'}
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