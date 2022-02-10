import { Box, Link, Stack } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo-teste.png';
import FalarComAgente from './Menu/FalarComAgente';
import Solucoes from '../../components/MenuSuperior/Menu/Solucoes';
import Head from 'next/head'

function MenuSuperior() {
  const [background, setBakcground] = useState('gray.600');
  const [textColor, setTextColor] = useState('white');

  function posicaoTela() {
    if (document.documentElement.scrollTop > 860) {
      setBakcground('white');
      setTextColor('#000');
    } else {
      setBakcground('gray.700');
      setTextColor('white');
    }
  }

  useEffect(() => {
    posicaoTela();
    window.addEventListener('scroll', posicaoTela);
  })
  return (

    <Stack
      direction='row'
      color={textColor}
      shadow={'xl'}
      h='100px'
      w='100%'
      paddingLeft='12%'
      paddingRight='12%'
      alignItems='center'
      justifyContent='space-between'
      bg={background}
      position={'fixed'}
      top={0}
      zIndex={1}
      color={textColor}
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
      <Box
        mr='auto' cursor={'pointer'}
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
      >
        <Image  
          src={logo}
          alt="MOR INFORMATICA"
          width={80}
          height={80}
        />
      </Box>

      <Stack direction='row' justifyContent='center' alignItems='center' spacing={6}>
        <Solucoes textColor={textColor} />
        <Link >Empresa</Link>
        <Link >Videos</Link>
        <Link >Contato</Link>
        <FalarComAgente />
      </Stack>

    </Stack>

  )
}

export default MenuSuperior;