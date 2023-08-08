
async function myFunc() {
  // Wait 1 second
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Print "Hello World!" to the console
  console.log("Hello World!");
}

myFunc();
