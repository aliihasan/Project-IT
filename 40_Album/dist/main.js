// Assignment no 40
function make_album(artist, tittle, tracks) {
    const album = {
        artist: artist,
        tittle: tittle
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = make_album('artist 1', 'album tittle 1');
console.log(album1);
const album2 = make_album('artist 2', 'album tittle 2');
console.log(album2);
const album3 = make_album('artist 3', 'album tittle 3', 12);
console.log(album3);
export {};
