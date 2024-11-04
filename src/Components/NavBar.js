

const NavBar = ({generatePallete, addPallete}) => {
    return (
        <div className="navBarContainer">
                <div className="palleteNumberSelectorIcon">
                    <img className="plusIcon" src='/Images/plus.png'/>
                </div>
                <div onClick={generatePallete} className="generatePalletButton">
                    Generate Pallete
                </div>
        </div>
    )
}

export default NavBar