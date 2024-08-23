const express = require('express')
const router = express.Router()
const { constant } = require('../helper/constant')
const { users } = require('../data/example')


// Get All
router.get('/', (req, res) => {
    res.send(users)
})

// Get One
router.get(constant.router.user.id, (req, res) => {
    const user = users.find(e => e.userId === req.params.userId);
    if (!user) {
        return res.status(404).send({ err: "not found" });
    }

    res.json(user);
})
// Post
router.post('/', (req, res) => {
    const { username, email, password, department, role } = req.body;
    if (!username || !email || !password || !department || !role) {
        return res.status(400).send('Missing');
    }
    let newUser = {
        userId: "4",
        username: username,
        email: email,
        password: department,
        department: department,
        role: role
    };
    users.push(newUser);
    res.status(201).send(newUser);
})

// Update
router.put(constant.router.user.id, (req, res) => {
    const user = users.find(e => e.userId === req.params.userId);
    if (!user) {
        return res.status(404).send({ err: "not found" });
        
    }
    const { username, email, password, department, role } = req.body;

    user.username = username || user.username;
    user.email = email || user.email;
    user.password = password || user.password;
    user.department = department || user.department;
    user.role = role || user.role;

    console.log(user);
    
    res.json(user);
})

// Delete
router.delete(constant.router.user.id, (req, res) => {
    const userIndex = users.findIndex(e => e.userId === req.params.userId);


    if (userIndex === -1) {
        return res.status(404).send('Not found');
    }
    users.splice(userIndex, 1);
    res.status(204).send();
});

module.exports = router