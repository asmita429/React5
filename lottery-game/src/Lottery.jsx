import { useState } from "react";
import "./Lottery.css";
import { geneTicket, sum } from "./helper";

export default function Lottery() {
  //   let [ticket, getTicket] = useState([0, 0, 0]);
  let [ticket, setTicket] = useState(geneTicket(3));
  let isWinning = sum(ticket) === 15;
  let buyTicket = () => {
    setTicket(geneTicket(3));
  };
  return (
    <div>
      <h1>Lottery Game!</h1>
      <div className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </div>
      <h3>{isWinning && "Congratulations! You won."}</h3>
      <button onClick={buyTicket}>Buy Ticket</button>
    </div>
  );
}
