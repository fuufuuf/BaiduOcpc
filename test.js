let jsonData = {
    id: {流水: 123},
    status: "OK",
    data: [867, 5309]
  };
  
  let { id, status, data:number } = jsonData;
  
  console.log(id, status, number);
  // 42, "OK", [867, 5309]