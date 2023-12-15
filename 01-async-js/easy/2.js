function count(start, end) {
    
    if (start < end) {
      setTimeout(function() {
        count(start + 1, end);
        console.log(start);
      }, 1000); // 1000 milliseconds (1 second) delay
    }
  }
  
  // Example: Count from 1 to 5
  count(1, 5);