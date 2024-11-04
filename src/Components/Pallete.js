


const Pallete = ({pallete}) => {
    return (
        <div className="palletContainer">
            {pallete.map(slide => 
                <div style={{'backgroundColor': slide}}className="palleteSlide">
                    
                </div>
            )}
        </div>
    )
}

export default Pallete