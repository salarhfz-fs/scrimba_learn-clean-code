// Proper Spacing and Returns
// https://eslint.org/docs/rules/padding-line-between-statements
function addUser(user) {
    const userData = { ...user, type: 'Admin' };

    if (userData) {

    }

    return userData;
}
// Standardization of Naming
function retrieveAdminById(id) {
    //  gets admin
}
function getUserById(id) {
    switch (id) {
        case 1:
            return addUser(1);
        case 2:
        case 3:
            return addUser(2);
        default:
            return addUser(3);
    }
}