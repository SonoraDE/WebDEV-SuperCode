import { useState } from "react";
import "./Home.css";
const Home = () => {
    const [Balance, setBalance] = useState(10000);
    const [Amount, setAmount] = useState(0);

    const PayIn = () => {
        if (Amount > 0) {
            setBalance(prevBalance => prevBalance + Amount);
            setAmount(0);
        }
    };

    const PayOut = () => {
        if (Amount > 0 && Amount <= Balance) {
            setBalance(prevBalance => prevBalance - Amount);
            setAmount(0);
        }
    };

    return (
        <section className="banking">
            <p className="balance">{Balance}</p>
            <hr />
            <input type="number" name="bank" id="bank" value={Amount} onChange={(event) => setAmount(Number(event.target.value))}/>
            <hr />
            <div className="btns">
            <button onClick={PayIn}>Einzahlen</button>
            <button onClick={PayOut}>Auszahlen</button>
            </div>
        </section>
    );
}
 
export default Home;