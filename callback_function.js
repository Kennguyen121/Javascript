
function myFunction(param) {
    if(typeof param === 'function')
        param('java');
};

function myCallback(value) {
    console.log('value: ', value);
};

myFunction(myCallback);