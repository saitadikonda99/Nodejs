const roles = ['student', 'admin'];

const verifyRoles = (...allowedRoles) => {
    console.log('allowedRoles:', allowedRoles);
    
    const containsAllRoles = roles.every(role => allowedRoles.includes(role));
    
    containsAllRoles ? console.log('true') : console.log('false');
}

verifyRoles('student', 'admin');
