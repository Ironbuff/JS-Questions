// Simulate an asynchronous operation using setTimeout
function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
      const data = { id: 1, name: "Product A" };
      callback(data); // Invoke the callback with the fetched data
    }, 2000); // Simulate a 2-second delay
  }
  
  // Define a callback function to handle the data
  function handleData(data) {
    console.log("Data received:", data);
  }
  
  // Call the function with the callback
  fetchData(handleData);
  