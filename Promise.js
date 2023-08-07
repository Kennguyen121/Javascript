
function myDisplayer(some) {
    console.log(some);
}

let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;

    if (x == 0) {
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

myPromise
    .then(function(value) {
        myDisplayer(value);
    })
    .catch(function(error) {
        myDisplayer(error);
    })