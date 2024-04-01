// Assignment no 30
const userName = ['admin', 'Bugs Bunny', 'Daffy duck', 'Sylvester', 'Tweety'];
for (let index = 0; index < userName.length; index++) {
    if (userName[index] === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log(`Hello ${userName[index]}, thank you for logging in again`);
    }
}
export {};
