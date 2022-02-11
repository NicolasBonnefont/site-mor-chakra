import { ArrowBackIcon } from '@chakra-ui/icons';
import { Button, Flex, Heading, Input, Link, Stack, Text, Textarea } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

function Form() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [loading, setLoading] = useState(false);

  const toast = useToast();
  const router = useRouter();

  async function EnviaMensagem() {
    event.preventDefault();

    setLoading(true);

    let data = {
      nome,
      email,
      mensagem
    }

    await axios.post('/api/mail', data)
      .then(res => {
        setNome('');
        setEmail('');
        setMensagem('');
        setLoading(false);
        toast({
          title: 'Mensagem enviada com sucesso!',
          description: 'Em breve entraremos em contato com você.',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top'
        });
        router.push('/');
      })
      .catch(err => {
        console.log(err)
        setNome('');
        setEmail('');
        setMensagem('');
        setLoading(false);
      })
  }
  return (
    <Flex
      as='form'
      direction='column'
      onSubmit={() => EnviaMensagem()}
    >

      <Stack mb='8' color='white'>
        <Heading>Entre em contato conosco !</Heading>
        <Text> Informe seus dados abaixo e iremos retornar 😉 </Text>
      </Stack>

      <Stack color='white'>
        <Input
          color='#000'
          bg='white'
          placeholder='Nome'
          h='60px'
          required
          onChange={(event) => setNome(event.target.value)}
        />
        <Input
          color='#000'
          bg='white'
          placeholder='E-mail'
          h='60px'
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        <Textarea
          color='#000'
          bg='white'
          required
          placeholder='Observação'
          onChange={(event) => setMensagem(event.target.value)}
        />

      </Stack>

      <Button
        mt='2'
        h='60px'
        color='#fff'
        _hover={{ bg: 'green.700' }}
        bg='green.600'
        color="#fff"
        type='submit'
        isLoading={loading}
      >
        ENVIAR
      </Button>

      <Link color='white' mt='6' onClick={() => router.push('/')}>
        <Stack direction='row' alignItems='center'>
          <ArrowBackIcon />
          <Text>voltar</Text>
        </Stack>
      </Link>

    </Flex>
  )
}

export default Form;