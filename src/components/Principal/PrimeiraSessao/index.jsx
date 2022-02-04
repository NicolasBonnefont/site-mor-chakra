import { Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { Controls, Player } from '@lottiefiles/react-lottie-player';
import Image from 'next/image';
import Slider from "react-slick";
import logo from '../../../assets/logo-teste.png';

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 1000,
  cssEase: "linear",
  arrows: false,
  appendDots: false
};


function PrimeiraSessao() {
  return (
    <Flex
      direction='row'
      justifyContent={'space-evenly'}
      alignItems={'center'}
      h='100vh'
      bg='gray.800'
    >
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Stack w='580px' color='white'>
        <Heading fontWeight={'bold'}>
          Há mais de 27 anos ajudando nossos clientes a melhorarem
          seus resultados.
        </Heading>

        <Text>
          Com nossos Softwares você encontra as informações precisas para a
          gestão de sua Empresa.
        </Text>

        <Slider
          dots={false}
          {...settings}
        >
          <Image
            src={logo}
            alt="MOR INFORMATICA"
            quality={100}
            width={80}
            height={80}

          />
          <Image
            src={logo}
            alt="MOR INFORMATICA"
            quality={100}
            width={80}
            height={80}

          />
          <Image
            src={logo}
            alt="MOR INFORMATICA"
            quality={100}
            width={80}
            height={80}

          />
          <Image
            src={logo}
            alt="MOR INFORMATICA"
            quality={100}
            width={80}
            height={80}

          />
          <Image
            src={logo}
            alt="MOR INFORMATICA"
            quality={100}
            width={80}
            height={80}

          />
          <Image
            src={logo}
            alt="MOR INFORMATICA"
            quality={100}
            width={80}
            height={80}

          />
          <Image
            src={logo}
            alt="MOR INFORMATICA"
            quality={100}
            width={80}
            height={80}

          />

        </Slider>
      </Stack>

      <Player
        autoplay
        loop
        src="https://assets6.lottiefiles.com/packages/lf20_hadzves0.json"
        style={{ height: '380px', width: '380px' }}
      >
        <Controls visible={false} />
      </Player>

    </Flex>
  );
}

export default PrimeiraSessao;