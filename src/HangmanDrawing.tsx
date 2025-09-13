

const HEAD = (
        <div style={{
        width:"50px",
        height:"50px",
        border:"10px solid black",
        borderRadius:"100%",
        position:"absolute",
        top:"50px",
        right:"-30px"
    }}/>
)

const BODY = (
        <div style={{
        width:"10px",
        height:"100px",
        backgroundColor:"black",
        position:"absolute",
        top:"120px",
        right:"0px"
    }}/>
)

const RIGHTHAND = (
        <div style={{
        width:"10px",
        height:"100px",
        backgroundColor:"black",
        position:"absolute",
        top:"80px",
        right:"-0px",
        rotate:"50deg",
        transformOrigin:"left bottom"
         
    }}/>
)

const LEFTHAND = (
        <div style={{
        width:"10px",
        height:"100px",
        backgroundColor:"black",
        position:"absolute",
        top:"80px",
        right:"0px",
        rotate:"-50deg",
        transformOrigin:"right bottom"
    }}/>
)

const RIGHTLEG = (
        <div style={{
        width:"100px",
        height:"10px",
        backgroundColor:"black",
        position:"absolute",
        top:"210px",
        right:"-90px",
        rotate:"50deg",
        transformOrigin:"left bottom"
        
    }}/>
)

const LEFTLEG = (
        <div style={{
        width:"100px",
        height:"10px",
        backgroundColor:"black",
        position:"absolute",
        top:"210px",
        right:"0px",
        rotate:"-50deg",
        transformOrigin:"right bottom"
        
    }}/>
)
const bodyParts =[HEAD,BODY,RIGHTHAND,LEFTHAND,RIGHTLEG,LEFTLEG]

type HangmanDrawingProps = {
    numberOfGuesses:number
}


const HangmanDrawing = ({numberOfGuesses}:HangmanDrawingProps) => {
  return (
    <div style={{position:"relative"}}>
        {bodyParts.slice(0,numberOfGuesses)}

    <div style={{height:"50px",width:"10px",background:"black",marginLeft:"2px",position:"absolute",top:0,right:0}}/>
    <div style={{height:"10px",width:"200px",background:"black",marginLeft:"120px"}}/>
    <div style={{height:"400px",width:"10px",background:"black",marginLeft:"120px"}}/>
    <div style={{height:"10px",width:"250px",background:"black"}}/>


        </div>
  )
}

export default HangmanDrawing