import { useEffect } from 'react';
import { Flex, } from '@chakra-ui/react';
import MenuSuperior from '../components/MenuSuperior';
import PrimeiraSessao from '../components/Principal/PrimeiraSessao';
import Head from 'next/head'

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