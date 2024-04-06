import { useState } from "react";
import { geneTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({ n = 3, winningSum = 15 }) {
  let [ticket, setTicket] = useState(geneTicket(n));

  let isWinning = sum(ticket) === winningSum;
  let buyTicket = () => {
    setTicket(geneTicket(n));
  };
  return (
    <div>
      <h1>Lottery Game!</h1>
      <Ticket ticket={ticket} />
      <h3>{isWinning && "Congratulations! You won."}</h3>
      <button onClick={buyTicket}>Buy Ticket</button>
    </div>
  );
}
