import "./LengthControl.css"

import { useSelector, useDispatch } from "react-redux"
import { incBreak, decBreak, incSession, decSession } from "../features/timerSlice"

const LengthControl = () => {
    const { breakLength, sessionLength } = useSelector( state => state.timer )
    const dispatch = useDispatch()


    return (
        <div className="controls-group">
            <div className="control">
                <h2 id="break-label">BREAK LENGTH &nbsp;&nbsp;&nbsp;&nbsp;</h2>
                <h3 id="break-length">{breakLength}</h3>
                <button 
                    id="break-decrement"
                    onClick={ () => {
                        dispatch(decBreak())
                    }}>
                    Decrease
                </button>
                <button 
                    id="break-increment"
                    onClick={ () => {
                        dispatch(incBreak())
                    }}>
                    Increase
                </button>
                <br></br><br></br>
                <br></br>
            </div>
            <div className="control">
                <h2 id="session-label">&nbsp;&nbsp;&nbsp;&nbsp;SESSION LENGTH</h2>
                <h3 id="session-length">{sessionLength}</h3>
                <button 
                    id="session-decrement"
                    onClick={ () => {
                        dispatch(decSession())
                    }}>
                    Decrease
                </button>
                <button 
                    id="session-increment"
                    onClick={ () => {
                        dispatch(incSession())
                    }}>
                    Increase
                    <br></br>
                </button>
                <br></br><br></br>
                <br></br>
            </div>
        </div>
    )
}

export default LengthControl