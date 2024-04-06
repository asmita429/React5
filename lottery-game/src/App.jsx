import "./App.css";
import Lottery from "./Lottery";
import Ticket from "./Ticket";
import TicketNum from "./TicketNum";
import { sum } from "./helper";

function App() {
  let winCondition = (ticket) => {
    // return sum(ticket) === 15;
    return ticket.every((num) => num == ticket[0]);
  };
  return (
    <>
      <Lottery n={3} winCondition={winCondition} />
    </>
  );
}

export default App;
