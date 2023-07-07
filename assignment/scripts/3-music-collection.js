console.log('***** Music Collection *****')
// Create a variable collection that starts as an empty array.
const collection = [];
console.log(collection);

// I want to make a function that takes multiple parameters as input,
// converts them into an object with multiple properties and
// adds it to an array.
// Add a function named addToCollection. This function should:
// - Take in the album's title, artist, yearPublished as input parameters
function addToCollection(title, artist, yearPublished) {
    // - Create a new object having the above properties
    console.log(title, artist, yearPublished);
    // - Add the new object to the end of the collection array
    let newLp = {
        "title": title,
        "artist": artist,
        "yearPublished": yearPublished,
    }
    return collection.push(newLp);
}
// - Return the newly created object

addToCollection('"Pod"', 'Breeders', 1990);
console.log(collection);

// Test the addToCollection function:
// - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. 
//    (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
addToCollection('"Juju"', 'Siouxsie and the Banshees', 1982);
console.log(collection);
addToCollection('"Isn`t Anything"', 'My Bloody Valentine', 1988);
console.log(collection);
addToCollection('"Loveless"', 'My Bloody Valentine', 1991);
// - Console.log each album as added using the returned value.
// - After all are added, console.log the collection array.

// Add a function named showCollection. This function should:
// - Take in an array parameter. (This allows it to be reused to show any collection, 
//    like the results from the find or search.)
// - Console.log the number of items in the array.
// - Loop over the array and console.log each album's information formatted like: 
//    TITLE by ARTIST, published in YEAR.

// Test the showCollection function.

// Add a function named findByArtist. This function should:
// - Take in artist (a string) parameter
// - Create an array to hold any results, empty to start
// - Loop through the collection and add any objects with a matching artist to the array.
// - Return the array with the matching results. If no results are found, return an empty array.

// Test the findByArtist function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. 
//  Check that for artists with multiple matches, all are found.

// When testing your functions, write all tests in the JavaScript file!
