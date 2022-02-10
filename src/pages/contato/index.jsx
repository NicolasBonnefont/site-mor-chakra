import { Flex, Stack } from '@chakra-ui/react';
import MenuSuperior from '../../components/MenuSuperior';
import fundo from '../../assets/contato/fundo.png';
import Image from 'next/image';
import Form from './form'
function Contato() {
  return (
    <Flex
      w='100%'
      h='100vh'
      direction='column'
    >

      <MenuSuperior />

      <Stack
        w='100%'
        h='100vh'
        paddingLeft='12%'
        paddingRight='12%'
        direction='row'
      >

        <Flex
          flex='1'
          h='100vh'
          alignItems='center'
          justifyContent='center'
        >
          <Form />
        </Flex>

        <Flex
          h='100vh'
          flex='1.5'
          alignItems='center'
          justifyContent='center'
        >
          <Image
            src={fundo}
            alt='Contato'
          />
        </Flex>

      </Stack>


    </Flex>
  )
}

export default Contato;