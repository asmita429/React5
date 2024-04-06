import { useState } from "react";
import { geneTicket, sum } from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";

export default function Lottery({ n = 3, winCondition }) {
  let [ticket, setTicket] = useState(geneTicket(n));

  let isWinning = winCondition(ticket);
  let buyTicket = () => {
    setTicket(geneTicket(n));
  };
  return (
    <div>
      <h1>Lottery Game!</h1>
      <Ticket ticket={ticket} />
      <Button action={buyTicket} />
      <h3>{isWinning && "Congratulations! You won."}</h3>
    </div>
  );
}
