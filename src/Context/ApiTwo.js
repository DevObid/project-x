import React from 'react'
import { useContext } from 'react'
import ContextAp from './ContextAp'
import { Context } from '../App'



function ApiTwo() {
    const Data = useContext(Context)
    return (
        <div>{Data}</div>
    )
}

export default ApiTwo