import { useContext, useState } from "react";
import UserContext from "./Context";

export default function Withdraw() {
  const ctx = useContext(UserContext);
  const balLen = ctx.users.length;
  const newValue = ctx.users[balLen - 1].balance;

  const [balance, setBalance] = useState(newValue);
  const [value, setValue] = useState(0);
  const [update, setUpdate] = useState(true);

  const handleTransaction = (e) => {
    e.preventDefault();
    const newBalance = balance - value;
    setBalance(newBalance);
    setValue(0);
    ctx.users[balLen - 1].balance = newBalance;
    alert(`withdraw successfully ${value}`);
    setUpdate(false);
  };

  return (
    <div className="Withdraw">
      <center>
        {/* <h1 id="wid">Withdrawal</h1> */}
        <h3>Balance: {balance}</h3>
        <br />
        <label htmlFor="withdrawal">Enter The Amount To Withdraw</label>
        <input
          type="number"
          id="withdrawal"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <br />
        <button onClick={handleTransaction}>Withdraw</button>
      </center>
    </div>
  );
}
