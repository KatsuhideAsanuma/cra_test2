const Card=(props)=>{
    const topValue=(props.position[0]+props.position[2])/2
    const leftValue=(props.position[3]+props.position[1])/2
    console.log("Card top left",topValue,leftValue)

    return(
        <div className="card" style={{position:"absolute",top:String(topValue)+"px", left:String(leftValue)+"px"}}>
            <h1>Card</h1>
        </div>
    )
}
export default Card;