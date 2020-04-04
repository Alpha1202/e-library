// load express
const express = require('express');
const app = express();

// load mongoose
// const mongoose = require('mongoose')
const { MongoClient } = require('mongodb')

// connecting to mongodb
const url = 'mongodb+srv://Alpha:M1tRWjL4LCPzFBRp@cluster0-fub26.mongodb.net/test?retryWrites=true&w=majority'
const client = new MongoClient(url, { useUnifiedTopology: true})

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
        console.log('closed')
    }
}

run().catch(console.dir);


app.get('/', (req, res) => {
    res.send("This is our main endpoint")
})

app.listen(4545, () => {

    console.log('Server up------books service')
})