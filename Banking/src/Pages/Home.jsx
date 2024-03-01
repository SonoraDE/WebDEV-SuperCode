import { useState } from "react";
import "./Home.css";
const Home = () => {
    const [Balance, setBalance] = useState(0);
    const [Amount, setAmount] = useState(0);

    const PayIn = () => {
        if (Amount > 0) {
            setBalance(prevBalance => prevBalance + Amount);
            setAmount(0);
        } else {
            alert("Du kannst nicht 0€ einzahlen!")
        }
    };

    const PayOut = () => {
        if (Amount > 0 && Amount <= Balance) {
            setBalance(prevBalance => prevBalance - Amount);
            setAmount(0);
        } else {
            alert("Du versuchst einen ungültigen Betrag auszuzahlen!")
        }
    };

    return (
        <div className="container">
        <section className="banking">
            <h1>Kontostand:</h1>
            <p className="balance">{Balance}</p>
            <hr />
            <input type="number" name="bank" id="bank" value={Amount} onChange={(event) => setAmount(Number(event.target.value))}/>
            <hr />
            <div className="btns">
            <button onClick={PayIn}>Einzahlen</button>
            <button onClick={PayOut}>Auszahlen</button>
            </div>
        </section>
        </div>
    );
}
 
export default Home;