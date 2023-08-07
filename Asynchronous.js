function myAsyncFunction() {
    console.log("Thuc hien hanh dong bat dong bo");
    setTimeout(function() {
      console.log("Nhiem vu bat dong bo hoan thanh");
    }, 2000);
  }
  
  myAsyncFunction();