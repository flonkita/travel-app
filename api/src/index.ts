import express from "express";
import cors from "cors";

const travelList = [
  {
    id: 1,
    name: "Paris",
    city: "Paris",
    country: "France",
    image:
      "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
    description:
      "Paris is known for its iconic landmarks like the Eiffel Tower, art museums like the Louvre, and its romantic atmosphere.",
  },
  {
    id: 2,
    name: "New York City",
    city: "New York",
    country: "USA",
    image:
      "https://www.planetware.com/photos-large/USNY/new-york-city-empire-state-building.jpg",
    description:
      "New York City is famous for its skyline, Central Park, Times Square, and vibrant cultural life.",
  },
  {
    id: 3,
    name: "Tokyo",
    city: "Tokyo",
    country: "Japan",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG9reW98ZW58MHx8MHx8fDA%3D",
    description:
      "Tokyo is a bustling metropolis with cutting-edge technology, traditional temples, and an exciting nightlife.",
  },
  {
    id: 4,
    name: "Rome",
    city: "Rome",
    country: "Italy",
    image: "https://www.planetware.com/photos-large/I/italy-rome-colosseum.jpg",
    description:
      "Rome is a city filled with ancient history, from the Colosseum to the Roman Forum, and delicious Italian cuisine.",
  },
  {
    id: 5,
    name: "Sydney",
    city: "Sydney",
    country: "Australia",
    image:
      "https://www.planetware.com/photos-large/AUS/australia-sydney-opera-house.jpg",
    description:
      "Sydney is known for its iconic Opera House, beautiful beaches, and the stunning Sydney Harbour.",
  },
];

const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/travels", (req, res) => {
    console.log(req.body);
  res.send(travelList);
});

app.post("/travels", (req, res) => {
    // create a new travel
    const newTravel = req.body;
    // add id param to object travel
    newTravel.id = travelList.length + 1;
    // insert the new travel in the travelList
    travelList.push(newTravel);
    // send back add travel object
    res.send(newTravel);
});

app.get("/travels/:id", (req, res) => {
  res.send(travelList.find((travel) => travel.id === parseInt(req.params.id)));
});

app.put("/travels/:id", (req, res) => {
  // Contain to change
  const info = req.body;
  // The id of the travel to change
  const id = req.params.id;
  // Get the travel by is id
  let travelIndex = travelList.findIndex((travel) => travel.id === Number(id));
  // Replace with the new information
  travelList[travelIndex] = {
    ...travelList[travelIndex],
    ...info,
  };
  // push the travelList
  res.send(travelList);
});

app.delete("/travels/:id", (req, res) => {
    console.log("Delete Body:" , req.params);
    //create const id with req.params.id
    const id = req.params.id;
    const newTravelList = travelList.filter((travel) => travel.id !== Number(id));
    res.send(newTravelList);
});

app.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});
