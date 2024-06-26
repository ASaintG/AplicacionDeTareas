import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, useColorMode } from '@chakra-ui/react'
import React from 'react'


export default function ToggleButton() {

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button className="chagTheme" onClick={toggleColorMode}>{
      colorMode === 'light' ? <SunIcon/> : <MoonIcon/>
      }</Button>
  )
}