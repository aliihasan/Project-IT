// Assignment no 32
let current_user = ['Ali', 'Hassan', 'Arsall', 'Sufiyan', 'TaHA'];
let new_user = ['Bilal', 'Ali', 'Hassan', 'Hamza', 'Raza'];
new_user.forEach(newUsername => {
    let lowercase = newUsername.toLowerCase();
    if (current_user.map(c_user => c_user.toLowerCase()).includes(lowercase)) {
        console.log(`The username ${newUsername} is not available. please write a different username`);
    }
    else {
        console.log(`The username ${newUsername} is available`);
    }
});
export {};
