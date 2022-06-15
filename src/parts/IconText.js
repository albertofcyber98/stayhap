import Button from 'elements/Button'
import React from 'react'
import logoWeb from '../assets/images/logo-stayhap.png'

export default function IconText() {
  return (
    <Button className='brand-text-icon' href='' type='link'>
        <img src={logoWeb} width="120" alt="logo"></img>
    </Button>
  )
}
