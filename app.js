const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const markup = `
   <!DOCTYPE html>
   <html>
   <head>
   <title> Form </title>
   </head>
   <body>

<form action="submit" method="post">
   <input name="data" type="text" placeholder="Enter something" />
   <input type="submit" value="submit" />
</form>

   </body>
   </html>
   `
   res.send(markup)
});

// app.get('/form', (req, res) => {
//     res.setHeader("Content-Type", "html")
//     res.write('<form> <input name="theForm" /> <button> submit </button> </form> ')
//     res.end();

// });


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})