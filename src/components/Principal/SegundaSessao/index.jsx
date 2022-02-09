import { Box, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
import fundo from '../../../assets/principal/segundasessao/fundo.jpg'

function SegundaSessao() {
  return (

    <Flex
      w='100%'
      h='100vh'
      bg='#5f0606c1'
    // direction='column'
    >

      <Image
        src={fundo}
        alt='fundo'
        
      />


    </Flex>


  )
}

export default SegundaSessao;