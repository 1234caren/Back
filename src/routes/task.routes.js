const express = require('express');
const router = express.Router();
const Task = require('../models/task');

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    console.log(tasks)
    res.json(tasks);

});
router.get('/:id', async (req, res) =>{
    const task = await Task.findById(req.params.id);
});
router.post('/', async (req, res) => {
    const { description , name} = req.body;
    const Task = new Task({
        name,
        description
    });
    await task.save();
    res.json({status:"tarea guardada"});
});

router.put('/:id', async (req, res) =>{
    const { name, description } = req.body;
    const newTask = { name, description};
    await Task.findByIdAndUpdate(req.params.id, newTask);
});

router.delete('/:id', async (req, res) =>{
    await Task.findByIdAndRemove(req.params.id);
});


module.exports = router;
