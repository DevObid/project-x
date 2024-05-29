import React from 'react'
import { useContext } from 'react'
import { Data } from './ApiThree'


function ApiTwo() {
    const ata = useContext(Data)
    return (
        <div>{console.log(ata)}</div>
    )
}

export default ApiTwo