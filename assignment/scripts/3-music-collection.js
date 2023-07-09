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
        title,
        artist,
        yearPublished,
    }
    return collection.push(newLp);
}
// is newLp really the object I should be creating?
// - Return the newly created object

addToCollection('Pod', 'Breeders', 1990);
console.log(collection);

// Test the addToCollection function:
// - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. 
//    (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
addToCollection('Black Sea', 'XTC', 1980);
console.log(collection);
addToCollection('Isn`t Anything', 'My Bloody Valentine', 1988);
console.log(collection);
addToCollection('Loveless', 'My Bloody Valentine', 1991);
console.log(collection);
addToCollection('Tago Mago', 'Can', 1971);
console.log(collection);
addToCollection('Hunky Dory', 'David Bowie', 1971);
console.log(collection);
addToCollection('Zapp', 'Zapp', 1980);
console.log(collection);
// - Console.log each album as added using the returned value.
// - After all are added, console.log the collection array.
console.log(collection);
console.log(collection.length);

// Add a function named showCollection. This function should:
function showCollection(array) {
    // - Take in an array parameter. (This allows it to be reused to show any collection, 
    //    like the results from the find or search.)
    // - Console.log the number of items in the array.
    console.log(array.length);
    // - Loop over the array and console.log each album's information formatted like: 
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        //    TITLE by ARTIST, published in YEAR.
        console.log(array.title, ', by ', array.artist, ' published in ', array.yearPublished);
        // Why does the line of code directly above result in undefind properties?
    }
}
// Test the showCollection function.
showCollection(collection);

// Add a function named findByArtist. This function should:
// - Take in an artist (a string) parameter
function findByArtist(artist) {
    // - Create an array to hold any results, empty to start
    let artistArray = [];
    // - Loop through the collection and add any objects with a matching artist to the array.
    //for (let artist of collection) {
    for (let i = 0; i < collection.length; i++) {
        if (artist == collection[i]) {
            // - Return the array with the matching results. If no results are found, return an empty array.
            return artistArray.push(collection[i]);
        }
        else (console.log('Artist not found!'));
    }
    console.log(artistArray);
}

// Test the findByArtist function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection.
findByArtist('Simply Saucer');
// ^This checks out because it isn't in collection, but why not this...
findByArtist('XTC');
//  Check that for artists with multiple matches, all are found.
findByArtist('My Bloody Valentine');
