import {handleComplaint} from './complaintsHandler';


let complaint1 = {
    text: "I'm not getting enough money",
    type: c.FINANCE
}

let complaint2 = {
    text: "My salary hasn't come in yet",
    type: c.FINANCE
}

let complaint3 = {
    text: "I'm always full of energy",
    type: c.EMOTION
}

console.log(handleComplaint(complaint1)); //should print "Money doesn't grow on trees, you know."
console.log(handleComplaint(complaint2)); //should print "Money doesn't grow on trees, you know."
console.log(handleComplaint(complaint3)); //should print "It'll pass, as all things do, with time."