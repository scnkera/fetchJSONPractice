let jsonString = '{"menu":{"id":"file","value":"File","popup":[{"value":"New","action":"CreateNewDoc"},{"value":"Open","action":"OpenDoc"},{"value":"Close","action":"CloseDoc"}]}}';

let data = JSON.parse(jsonString);
console.log(data);


// let jsonString = '{"menu":{"id":"file","value":"File","popup":[{"value":"New","action":"CreateNewDoc"},{"value":"Open","action":"OpenDoc"},{"value":"Close","action":"CloseDoc"}]}}';

// let data = JSON.parse(jsonString);

// data.menu.popup.push({value: "Save", action: "SaveDoc"});

// let updatedData = JSON.stringify(data);