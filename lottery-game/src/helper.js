function geneTicket(n) {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * 10);
  }
  return arr;
}

function sum(ticket) {
  return ticket.reduce((sum, val) => sum + val);
}

export { geneTicket, sum };
