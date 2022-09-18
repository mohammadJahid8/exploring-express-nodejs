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
exports.getAllUser = (req, res, next) => {
    fs.readFile("user.json", (err, data) => {
        if (err) {
            res.status(500).json({ success: false, message: err.message });
            return;
        }
        try {
            const { limit } = req.query;
            const users = JSON.parse(data);
            res.status(200).json({ success: true, data: users.slice(0, limit) });
        } catch (err) {
            next(err)
            console.log("Error parsing JSON string:", err);
        }
    });
}

exports.saveUser = (req, res, next) => {
    fs.readFile("user.json", (err, data) => {
        if (err) {
            res.status(500).json({ success: false, message: err.message });
            return;
        }
        try {
            const newUser = req.body;
            const { id, gender, name, contact, address, photoUrl } = newUser;

            // validate the body and check if all the required properties are present in the body.
            if (id && gender && name && contact && address && photoUrl) {
                const users = JSON.parse(data);
                users.push(newUser);
                const userString = JSON.stringify(users)
                fs.writeFile("user.json", userString, (err) => {
                    if (err) {
                        res.status(500).json({ success: false, message: err.message });
                        return;
                    }

                })
                res.status(200).json({ success: true, message: 'Successfully added a user' });

            } else {
                res.status(500).json({ success: false, message: "missing property in body" });
            }
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
            next(err)
        }
    });
}
