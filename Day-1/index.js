const fs = require("fs");
fs.writeFileSync("hello.txt", "Hello from Nodejs", (err) => {
    if(err) console.log("error occured")
    else console.log("file created successfully")
});

