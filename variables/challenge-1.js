// Clean Code: Variables Challenge 1

/** 
 * userNames: string[first, middle, last]
 * return First Middle Initial Last Name 
*/
function getUserFullName(userNames) {
    const [firstName, middleName, lastName] = userNames;
    const middleInitial = middleName[0] ?? '';
    return `${firstName} ${middleInitial ? middleInitial + '.' : ''} ${lastName}`;
}

console.log(getUserFullName(['Dylan', 'Christopher', 'Israel']));
console.log(getUserFullName(['Salar', '', 'Hafezi']));