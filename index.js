const express = require("express");

const app = express();

app.use(express.json());

app.use(express.static("react-demo-app/dist"));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

let profileData = {
  fullName: "",
  email: "",
  address: "",
  city: "",
  education: "",
  role: "",
  experience: "",
  bio: "",
  upload: [],
  skills: [],
};

app.get("/api/getProfile", (req, res) => {
  try {
    res.status(200).json(profileData);
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/api/users/:id", (req, res) => {
  const id = req.params.id;

  const user = getUser(id);

  if (!user) {
    res.status(404).send({ error: `User ${id} not found` });
  } else {
    res.send({ data: user });
  }
});

app.get("/api/users", (req, res) => {
  const users = [
    { id: 7, name: "Rajnish Pandey", active: "true", country: "India" },
    { id: 1, name: "John Doe", active: true, country: "USA" },
    { id: 2, name: "Alice Johnson", active: true, country: "Canada" },
    { id: 3, name: "Bob Smith", active: true, country: "UK" },
    { id: 4, name: "Eva Martinez", active: true, country: "Spain" },
    { id: 5, name: "Chen Wei", active: true, country: "China" },
    { id: 6, name: "Yuki Tanaka", active: true, country: "Japan" },
  ];
  if (!users) {
    res.status(404).send({ error: `User ${id} not found` });
  } else {
    return res.send({ data: users });
  }
});

function getUser(id) {
  const users = [
    { id: 7, name: "Rajnish Pandey", active: "true", country: "India" },
    { id: 1, name: "John Doe", active: true, country: "USA" },
    { id: 2, name: "Alice Johnson", active: true, country: "Canada" },
    { id: 3, name: "Bob Smith", active: true, country: "UK" },
    { id: 4, name: "Eva Martinez", active: true, country: "Spain" },
    { id: 5, name: "Chen Wei", active: true, country: "China" },
    { id: 6, name: "Yuki Tanaka", active: true, country: "Japan" },
  ];
  return users.find((p) => p.id == id);
}

app.post("/api/updateProfile", (req, res) => {
  try {
    const {
      fullName,
      email,
      address,
      city,
      education,
      role,
      experience,
      bio,
      upload,
      skills,
    } = req.body;

    profileData = {
      fullName,
      email,
      address,
      city,
      education,
      role,
      experience,
      bio,
      upload,
      skills,
    };

    res.status(200).json({ message: "Profile updated successfully!!" });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
