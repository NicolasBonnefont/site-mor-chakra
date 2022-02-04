import { Divider, Flex } from '@chakra-ui/react';
import React from 'react';
import MenuSuperior from '../components/MenuSuperior';
import PrimeiraSessao from '../components/Principal/PrimeiraSessao';

function Pages() {
  return (
    <Flex
      bg='#fff'
      w='100%'
      minH='100vh'
      h='auto'
      direction='column'
    >

      <MenuSuperior />

      <PrimeiraSessao />

    </Flex>
  );
}

export default Pages;