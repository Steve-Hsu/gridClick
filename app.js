const express = require('express')
const path = require('path')
const app = express()

//Set static directory
app.use(express.static(path.join(__dirname, "/public")))

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

