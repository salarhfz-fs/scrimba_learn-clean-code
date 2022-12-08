//  Limit Params - BAD
function getUsersFullName(first, middle, last, nickName) {
    return `${first} ${middle} ${last} - AKA: ${nickName}`
}

//  Limit Params - GOOD 1 (best)
function getUsersFullNameGood1({ first, middle, last, nickName }) {
    return `${first} ${middle} ${last} - AKA: ${nickName}`
}

//  Limit Params - GOOD 2
function getUsersFullNameGood2([first, middle, last, nickName]) {
    return `${first} ${middle} ${last} - AKA: ${nickName}`
}

console.log(getUsersFullName('Salar', '', 'Hafezi', 'salar.hfz'));

console.log(getUsersFullNameGood1({
    first: 'Salar', middle: '', last: 'Hafezi', nickName: 'salar.hfz'
}));

console.log(getUsersFullNameGood2(['Salar', '', 'Hafezi', 'salar.hfz']));
