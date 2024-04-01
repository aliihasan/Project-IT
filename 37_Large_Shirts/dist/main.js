// Assignment no 37
function make_shirt(size = 'large', text = 'I love Typescript.') {
    console.log(`creating a ${size} shirt with a message: ${text}`);
}
make_shirt();
make_shirt('Medium');
make_shirt('Small', 'I love python');
export {};
