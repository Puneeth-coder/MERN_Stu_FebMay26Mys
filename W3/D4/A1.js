// Assignment-1
let ticketQueue = [
    {id:101, priority:"LOW", resolved:true},
    {id:102, priority:"MEDIUM", resolved:false},
    {id:103, priority:"MEDIUM", resolved:false},
    {id:104, priority:"LOW", resolved:false},
    {id:105, priority:"HIGH", resolved:true}
];

// let urgentTicket = new Array({id:106, priority:"urgent", resolved:false});
ticketQueue.unshift({id:100, priority:"urgent", resolved:false});
console.log(ticketQueue);

ticketQueue.push({id:106, priority:"normal", resolved:true},{id:107, priority:"normal", resolved:true});
console.log(ticketQueue);

let currentTicket = ticketQueue.shift();
console.log(ticketQueue);
console.log(currentTicket);

let droppedTicket = ticketQueue.pop();
console.log(droppedTicket);

let pending = ticketQueue.filter(ticket => !ticket.resolved);
console.log(pending);

let pendingIds = ticketQueue.map(ticket => ticket.id);
console.log(pendingIds);