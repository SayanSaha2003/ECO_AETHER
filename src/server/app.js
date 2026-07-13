const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "..", "pages")));
app.use(express.static(path.join(__dirname, "..", "..", "public")));

const users = new Map();

app.post("/api/signup", (req, res) => {
    const { fullname, email, mobile, password } = req.body;
    if (!fullname || !email || !mobile || !password) {
        return res.status(400).json({ error: "Missing required fields" });
    }
    if (users.has(email)) {
        return res.status(409).json({ error: "Email already registered" });
    }
    users.set(email, { fullname, email, mobile, password });
    return res.json({ message: "Signup successful" });
});

app.post("/api/login", (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: "Missing email or password" });
    }
    const user = users.get(email);
    if (!user || user.password !== password) {
        return res.status(401).json({ error: "Invalid email or password" });
    }
    return res.json({
        message: "Login successful",
        user: {
            fullname: user.fullname,
            email: user.email,
            mobile: user.mobile,
        },
    });
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "..", "pages", "index.html"));
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
