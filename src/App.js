import {Pallete, NavBar} from './Components/Components'
import { useState, useEffect } from 'react'

const App = () => {
    const [numOfPalletes, setNumOfPalletes] = useState(3)
    const [pallete, setPallete] = useState([])
    
    const generatePallete = () => {
        let pallete = []
        for (let i = 0; i < numOfPalletes; i++) {
            // Logic to generate hex color, e.g., random or by incrementing values
            const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            pallete.push(color);
        }
        setPallete(pallete)
    }
   
    const addPallete = () => {
        if(currentNumber == 5){
            return "Max number of pallets"
        }
    }

    return (
        <>
        <NavBar addPallete={addPallete} generatePallete={generatePallete}/>
        <Pallete pallete={pallete}/>
        </>

    )
}

export default App