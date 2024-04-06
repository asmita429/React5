import "./App.css";
import Lottery from "./Lottery";
import Ticket from "./Ticket";
import TicketNum from "./TicketNum";

function App() {
  return (
    <>
      <Lottery n={3} winningSum={15} />
    </>
  );
}

export default App;
