const fs = require("fs");

exports.getRandomUser = (req, res, next) => {
    fs.readFile("user.json", (err, data) => {
        if (err) {
            res.status(500).json({ success: false, message: err.message });
            return;
        }
        try {
            const users = JSON.parse(data);
            const randomUser = users[Math.floor(Math.random() * users.length)];
            res.status(200).json({ success: true, data: randomUser });
            console.log(randomUser);
            // res.send(users);
        } catch (err) {
            next(err)
            console.log("Error parsing JSON string:", err);
        }
    });
}