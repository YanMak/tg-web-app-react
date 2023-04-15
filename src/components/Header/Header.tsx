import React from 'react'
import { useTelegram } from '../../hooks/useTelegram';
import Button from '../Button/Button'

export default function Header() {
    const {user, onClose} = useTelegram();


  return (
    <div className={'header'}>
        <Button onClick = {onClose} >Close</Button>
        <span className={'username'}></span>
    </div>
  )
}
