# idea notes

Multiple users,
One admin
Line and a house button
Random number 1 - 90
Track every number that comes out,
Play for a line,
then a house,


Everyuser gets a bingo book,

9 rows, and 3 down * 6


Backend models,

User {name-string, password-hash, avatar-string(url), wins-integer, admin-boolen}

Many users logged in and can all see the same number, when the admin presses roll, a new number is displayed for all users at the same time.
This will require websockets

1st step build a front end that has a bingo ball and a random number stored as state, that admin can control


