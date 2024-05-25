import React from 'react'
import { Context } from '../App'
import { useContext } from 'react'
import ApiTwo from './ApiTwo'

function ContextAp() {
    const Data = useContext(Context)
    return (
        <Data>
            <ApiTwo />
        </Data>
    )
}

export default ContextAp