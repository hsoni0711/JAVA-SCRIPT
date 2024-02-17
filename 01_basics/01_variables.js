const accountId = 12345
let accountEmail = "xyz@abcd.com"
var accountPassword = "121212"
accountCity = "Bombay"

//accountId = 23456 Not allowed 'Assignment to constant variable'.

accountEmail = "abcd@xyz.com"
accountPassword = "131313"
accountCity = "Banglore"
let accountState;

console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
    prefer not use var
    because the issue in block and functional scope
*/