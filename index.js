import express from "express";
import dotenv from "dotenv";
import cors from "cors"

// intiating server
const app = express();

// cors used
app.use(cors());

// dotenv used
dotenv.config();

//port
const PORT = process.env.PORT;

// data
export const artistlist = [
    {
        "id": "1",
        "name": "Ajith",
        "age": 52,
        "profession": "actor",
        "latestMovie": "Thunivu"
    },
    {
        "id": "2",
        "name": "Vijay",
        "age": 48,
        "profession": "actor",
        "latestMovie": "Varisu",
    },
    {
        "id": "3",
        "name": "Tirsha",
        "age": 40,
        "profession": "actress",
        "latestMovie": "Varisu",
    },
    {
        "id": "4",
        "name": "Nayanthara",
        "age": 38,
        "profession": "actress",
        "latestMovie": "Jawan",
    },
    {
        "id": "5",
        "name": "Jeyam Ravi",
        "age": 42,
        "profession": "actor",
        "latestMovie": "PS-II",
    }
]

export let loginuser = {
    "id": 1,
    "name": "Manirathnam",
    "profession": "Director and Producter",
    "email": "director@gmail.com",
    "contact": 42342123,
    "place": "chennai,tamilnade"
}

// get all data
app.get("/all", (req, res) => {
    try {
        res.status(200).json({ artistData: artistlist, loginData: loginuser })
    } catch (err) {
        console.log(err);
    }
})

// test url
app.use("/", (req, res) => {
    res.send({ message: "api working good" })
})

// listen and started server
app.listen(PORT, () => console.log(`Server connected in localhost:${PORT}`));

