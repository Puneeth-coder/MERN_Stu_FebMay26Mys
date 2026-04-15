const { getCurrentUser, getAllUsers } = require("./user");
const emitter = require("./events");

let requests = [];

function sendRequest(targetId) {
    return new Promise((resolve, reject) => {
        const user = getCurrentUser();
        if (!user) return reject("Login first");

        if (user.id === targetId)
            return reject("Cannot connect to yourself");

        const existing = requests.find(
            r => r.sender === user.id && r.receiver === targetId
        );
        if (existing) return reject("Request already sent");

        requests.push({
            sender: user.id,
            receiver: targetId,
            status: "pending"
        });

        emitter.emit("connectionRequested");
        resolve();
    });
}

function viewRequests() {
    const user = getCurrentUser();
    return requests.filter(r => r.receiver === user.id && r.status === "pending");
}

async function respondRequest(senderId, accept) {
    const user = getCurrentUser();

    const req = requests.find(
        r => r.sender === senderId && r.receiver === user.id
    );

    if (!req) throw new Error("Request not found");

    req.status = accept ? "accepted" : "rejected";

    if (accept) {
        const users = getAllUsers();
        const sender = users.find(u => u.id === senderId);

        sender.connections.push(user.id);
        user.connections.push(senderId);

        emitter.emit("connectionAccepted");
    } else {
        emitter.emit("connectionRejected");
    }
}

module.exports =
 { 
    sendRequest, 
    viewRequests, 
    respondRequest
 };