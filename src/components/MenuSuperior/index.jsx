import { Box, Link, Stack } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import logo from '../../assets/logo-teste.png';
import Solucoes from '../MenuSuperior/Menu/Solucoes';
import FalarComAgente from './Menu/FalarComAgente';

function MenuSuperior() {
  return (

    <Stack
      direction='row'
      color='white'
      bg='gray.800'
      h='100px'
      w='100%'
      alignItems='center'
      spacing={8}
      position={'fixed'}
      top='0'
      zIndex={'100'}
      shadow={'xl'}
      paddingLeft='24'
      paddingRight='24'
      color='white'
    >
      <Head>
        <title>MOR INFO</title>
        <meta charSet="utf-8" />
        <meta lang='pt-br' />
        <meta name="description" content="Empresa de Software House " />
        <meta name="keywords" content="NFE, NOTAFISCAL, NOTA FISCAL, ERP, BI" />
        <meta name="author" content="MOR INFO" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box mr='auto' cursor={'pointer'} >
        <Image
          src={logo}
          alt="MOR INFORMATICA"
          quality={100}
          width={80}
          height={80}
        />
      </Box>
      {/*   <Solucoes />

      <Link >Empresa</Link>
      <Link >Videos</Link>
      <Link >Contato</Link> */}

      <FalarComAgente />


    </Stack>

  )
}

export default MenuSuperior;