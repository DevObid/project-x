import React from 'react'
import { createContext } from 'react'
import ApiTwo from './ApiTwo'

export const Data = createContext()

function ApiThree() {
    return (
        <Data.Provider value={"ppop"}>
            <ApiTwo />
        </Data.Provider>
    )
}

export default ApiThree