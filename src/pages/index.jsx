import { Flex, } from '@chakra-ui/react';
import MenuSuperior from '../components/MenuSuperior';
import PrimeiraSessao from '../components/Principal/PrimeiraSessao';
import SegundaSessao from '../components/Principal/SegundaSessao';

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
      <SegundaSessao/>

    </Flex>
  );
}

export default Pages;