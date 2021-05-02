import React, {useState} from "react"
import data from "./data";

function App() {
    const [num,
        setNum] = useState(0)
    const [pars,
        setPars] = useState([])

    const clickHandler = (e) => {
        e.preventDefault();
        num <= 1
            ? setPars([data[0]])
            : setPars(data.slice(0, num))
    }

    return (
        <main>
            <h3 className="title">tired of boring lorem ipsum?</h3>
            <form>
                <label htmlFor="par">paragraphs:
                </label>
                <input
                    type="number"
                    id="par"
                    name="par"
                    value={num}
                    onChange={(e) => setNum(e.target.value)}></input>
                <button type="submit" onClick={clickHandler}>generate</button>
            </form>
            {pars.map((par, index) => {
                return (
                    <p key={index}>{par}</p>
                )
            })}
        </main>

    );
}

export default App;
