const Directors = require('../models/Directors');

const getAllDirectors = async (req, res) => {
    const directors = await Directors.find({});
    res.status(200).json({ 
        data: directors,
        message: `${req.method} - request to Director endpoint`, 
        success: true
    });
};

const getDirectorById = (req, res) => {
    const {id} = req.params;
    res.status(200).json({ 
        id,
        message: `${req.method} - request to Director endpoint`, 
        success: true
    });
};

const createDirector = async (req, res) => {
    const {director} = req.body;
    try{
        const newDirector = await Directors.create(director);
        console.log('data >>>', newDirector);
        res.status(200).json({ 
            message: `${req.method} - request to Director endpoint`, 
            success: true
        });
    }
    catch(error){
        if (error.name === 'ValidationError') {
            console.error('Error Validating!', error);
            res.status(422).json(error);
        }
        else{
            console.error(error);
            res.status(500).json(error);
        }
    }
    
};

const updateDirector = async (req, res) => {
    const {id} = req.params;
    const director = await Directors.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ 
        data: director,
        message: `${req.method} - request to Director endpoint`, 
        success: true
    });
};

const deleteDirector = (req, res) => {
    const {id} = req.params;
    res.status(200).json({ 
        id,
        message: `${req.method} - request to director endpoint`, 
        success: true
    });
};

module.exports = {
    getAllDirectors,
    getDirectorById,
    createDirector,
    updateDirector,
    deleteDirector
};