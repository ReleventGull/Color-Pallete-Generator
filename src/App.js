import {Pallete, NavBar} from './Components/Components'
import { useState, useEffect } from 'react'

const App = () => {
    const [numOfPalletes, setNumOfPalletes] = useState(3)
    const [pallete, setPallete] = useState([])
    
    useEffect(() => {
        generatePallete()
    }, [])
    const generatePallete = () => {
        let pallete = []
        for (let i = 0; i < numOfPalletes; i++) {
            const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            pallete.push(color);
        }
        setPallete(pallete)
    }
   
    const addPallete = () => {
        if(numOfPalletes == 5 || pallete.length == 0){
            return "Max number of pallets"
        }
        let lastPallete = pallete[0]
        let hex = parseInt(lastPallete.slice(1), 16)
        hex += 1
        console.log(hex, hex > 16777215)
        if (hex > 16777215) {
            hex = 16777215
        }
        let hexCode = `#${hex.toString(16)}`
        setNumOfPalletes(current => current += 1)
        setPallete(current => [...current, hexCode])
    }

    return (
        <>
        <NavBar addPallete={addPallete} generatePallete={generatePallete}/>
        <Pallete pallete={pallete}/>
        </>

    )
}

export default App