import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Financeiro from '../../../assets/principal/segundasessao/financeiro.png';
import NFE from '../../../assets/principal/segundasessao/nfe.png';
import Compras from '../../../assets/principal/segundasessao/compras.svg';
import Cards from "./Cards";

function SegundaSessao() {
  return (

    <Flex
      direction={['column', 'column', 'row']}
      w='100%'
      h='100vh'
      pl='10%'
      pr='10%'
      //alignItems='center'
      //justifyContent='center'
    //bg='gray.50'
    >
      <Flex
        w='100%'        
        flexWrap='wrap'
        justifyContent='center'
        align='center'
      >
        <Cards
          titulo={'NF-e'}
          subTitulo='Emissão de Nota Fiscal Eletrônica descomplicado.'
          imagem={NFE}
        />
        <Cards
          titulo='Financeiro'
          subTitulo='Controle de contas e relatórios.'
          imagem={Financeiro}
        />
        <Cards
          titulo='Compras'
          subTitulo='Gerenciamento de compras e vendas.'
          imagem={Compras}
        />

      </Flex>


    </Flex>


  )
}

export default SegundaSessao;