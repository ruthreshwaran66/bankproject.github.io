import { useContext, useState } from "react";
// import image from "./deposit.jpg";
import UserContext from "./Context";

export default function Deposit() {
  const ctx = useContext(UserContext);
  const balLen = ctx.users.length;
  const newValue = ctx.users[balLen - 1].balance;

  const [balance, setBalance] = useState(newValue);
  const [deposit, setDeposit] = useState(0);
  const [update, setUpdate] = useState(true);
  const total = balance + deposit;

  const handleDeposit = (e) => {
    e.preventDefault();
    setBalance(total);
    setDeposit(0);
    ctx.users[balLen - 1].balance = total;
    alert(`Deposit successful. New balance: ${total}`);
    setUpdate(false);
  };

  return (
    <div className="deposit">
      {/* <img src={image} alt="" /> */}
      {/* <h1 id="wid">Deposit</h1> */}
      <h3>Balance: {balance}</h3>
      <br />
      <label htmlFor="deposit">Enter The Amount To Deposit</label>
      <input
        type="number"
        id="deposit"
        value={deposit}
        onChange={(e) => setDeposit(Number(e.target.value))}
      />
      <br />
      <button onClick={handleDeposit}>Deposit</button>
    </div>
  );
}
