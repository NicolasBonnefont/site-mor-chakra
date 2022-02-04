import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';

function Solucoes() {
  return (
    <Menu>
      <MenuButton color='white' as={Link} rightIcon={<ChevronDownIcon />}>
        Soluções
      </MenuButton>
      <MenuList color='gray.700'>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default Solucoes;