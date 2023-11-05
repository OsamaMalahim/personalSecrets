// HINTS:
// 1. Import express and axios
import express from "express";
import axios  from "axios";

const app = express();
const port = 3000;
// 2. Create an express app and set the port number.

// 3. Use the public folder for static files.
app.use(express.static("public"));
// 4. When the user goes to the home page it should render the index.ejs file.
try {
    app.get("/",async(req,res)=>{
        const result = await axios.get("https://secrets-api.appbrewery.com/random");
        const finalResult = result.data; // to js object
        console.log(finalResult.secret);
        console.log(finalResult);
        res.render("index.ejs", {data: finalResult});
        });
} catch (error) {
    console.log(error.response.data);
}
// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.

app.listen(port,(req,res)=>{
    console.log(`running in port ${port}`);
});