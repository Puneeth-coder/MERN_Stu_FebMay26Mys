
let rules = [
    { role: "admin", action: "READ", allowed: true },
    { role: "admin", action: "WRITE", allowed: true },
    { role: "student", action: "READ", allowed: true },
    { role: "student", action: "WRITE", allowed: false },
    { role: "guest", action: "READ", allowed: false },
    { role: "guest", action: "WRITE", allowed: false }
];

let allowedRules = rules.filter(function(rule) {
    return rule.allowed === true;
});

let allowedPairs = allowedRules.map(function(rule) {
    return rule.role + ":" + rule.action;
});

let summary = rules.reduce(function(result, rule) {

    if (!result[rule.role]) {
        result[rule.role] = 0;
    }

    if (rule.allowed === true) {
        result[rule.role]++;
    }

    return result;

}, {});

console.log("Allowed Rules:", allowedRules);
console.log("Allowed Pairs:", allowedPairs);
console.log("Summary:", summary);