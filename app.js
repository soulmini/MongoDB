const mongoose = require('mongoose');
// connection creation and creatin a new db
mongoose.connect("mongodb://localhost:27017/NewData").then(() => console.log("connected Succesfully"))
    .catch(() => console.log("not connected"));
// console.log("connected"); 


// schema
// A Mongoose schema defines the structure of the document,
// default values, validators, etc., |


const playlistSchema = new mongoose.Schema({
    name: String,
    ctype: String,
    video: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        Default: Date.now
    }
})


// A Mongoose model is a wrapper on the Mongoose schema.
// A Mongoose schema defines the structure of the document,
// default values, validators, etc., whereas a Mongoose model
// provides an interface to the database for creating,
// querying, updating, deleting records, etc.

// for creating collection
const Playlist = new mongoose.model("Playlist", playlistSchema);

// create Document or insert


const createDocument = async() => {
    try {
        const rPlaylist = new Playlist({
            name: "reactjs",
            ctype: "FrontEnd",
            video: 80,
            author: "Ayush",
            active: true,
        })

        const NodePlaylist = new Playlist({
            name: "Node.js",
            ctype: "FrontEnd",
            video: 80,
            author: "Ayush",
            active: true,
        })

        const JsPlaylist = new Playlist({
            name: "js",
            ctype: "FrontEnd",
            video: 80,
            author: "Ayush",
            active: true,
        })

        const result = await Playlist.insertMany([rtPlaylist, JsPlaylist, NodePlaylist]);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

// createDocument();

// Read Document

const getDocument = async() => {
        const result = await Playlist
            .find({ $or: [{ ctype: "FrontEnd" }, { name: "js" }] })
            // .sort("name : 1");
            // .countDocuments();
        console.log(result);
    }
    // getDocument();


// Update Document
const updateDocument = async(_id) => {
    const result = await Playlist.findByIdAndUpdate({ _id }, {
        $set: {
            name: "JavaScript"
        },
    });
    console.log(result);
}

// updateDocument("63309d4bff2e6e66aeb0a2c7");
// getDocument();

// delete the Document

const deleteDocument = async(_id) => {
    try {
        const result = await Playlist.findByIdAndDelete({ _id });
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

deleteDocument("63309d4bff2e6e66aeb0a2c7");