import "../styles/index.css";


const HEAD = (
    <div style={{
        width: "60px",
        height: "60px",
        borderRadius:"100%",
        border: "10px solid black", 
        position: "absolute",
        top:"50px",
        right: "-25px",
    }}>
    </div>
)

const BODY = (
    <div style={{
        width: "10px",
        height: "130px",
        background: "black",
        position: "absolute",
        top:"100px",
        right: 0,
    }}>
    </div>
)

const RIGHT_ARM = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top:"150px",
        right: "-100px",
        rotate: "-30deg",
        transformOrigin: "left bottom"
    }}>
    </div>
)

const LEFT_ARM = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top:"150px",
        right: "10px",
        rotate: "30deg",
        transformOrigin: "right bottom"
    }}>
    </div>
)

const RIGHT_LEG = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top:"210px",
        right: "-90px",
        rotate: "60deg",
        transformOrigin: "left bottom"
    }}>
    </div>
)

const LEFT_LEG = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top:"210px",
        right: "0px",
        rotate: "-60deg",
        transformOrigin: "right bottom"
    }}>
    </div>
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
    numberOfGuesses: number
}

export function HangmanDrawing({numberOfGuesses}:HangmanDrawingProps) {
    return <div style={{position: "relative", scale: "0.9"}}>
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div style={{height: "50px", width: "10px", background: "black", top: 0, right: 0, position: "absolute"}}></div>
        <div style={{height: "10px", width: "200px", background: "black", marginLeft:"120px"}}></div>
        <div style={{height: "400px", width: "10px", background: "black", marginLeft:"120px"}}></div>
        <div style={{height: "10px", width: "250px", background: "black"}}></div>

    </div>
}