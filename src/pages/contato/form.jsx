import { Button, Flex, Heading, Input, Stack, Text, Textarea } from '@chakra-ui/react';
import { FiSend } from "react-icons/fi";

function Form() {
  return (
    <Flex
      as='form'
      direction='column'
    >
      <Stack mb='8'>
        <Heading>Entre em contato conosco !</Heading>
        <Text> Informe seus dados abaixo e iremos retornar 😉 </Text>
      </Stack>

      <Stack>
        <Input
          placeholder='Nome'
          h='60px'
        />
        <Input
          placeholder='E-mail'
          h='60px'
        />
        <Textarea
          placeholder='Observação'
        />

      </Stack>

      <Button
        mt='2'
        h='60px'
        color='#fff'
        _hover={{ bg: '#030236f8' }}
        bg='#060368'
        color="#fff"
      >
        ENVIAR
      </Button>
    </Flex>
  )
}

export default Form;