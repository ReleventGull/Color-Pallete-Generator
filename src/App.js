import {Pallete, NavBar} from './Components/Components'
import { useState } from 'react'

const App = () => {
    
    const generatePallete = () => {
        console.log("GeneratingPallete")
    }

    return (
        <>
        <NavBar generatePallete={generatePallete}/>
        <Pallete />
        </>

    )
}

export default App