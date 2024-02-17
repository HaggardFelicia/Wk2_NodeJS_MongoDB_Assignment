const Movies = require('../models/Movies');

const getAllMovies = async (req, res) => {
    const movies = await Movies.find({});
    res.status(200).json({ 
        data: movies,
        message: `${req.method} - request to Movie endpoint`, 
        success: true
    });
};

const getMovieById = (req, res) => {
    const {id} = req.params;
    res.status(200).json({ 
        id,
        message: `${req.method} - request to Movie endpoint`, 
        success: true
    });
};

const createMovie = async (req, res) => {
    const {movie} = req.body;
    try{
        const newMovie = await Movies.create(director);
        console.log('data >>>', newMovie);
        res.status(200).json({ 
            message: `${req.method} - request to Movie endpoint`, 
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

const updateMovie = async (req, res) => {
    const {id} = req.params;
    const movie = await Movies.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ 
        data: movie,
        message: `${req.method} - request to Movie endpoint`, 
        success: true
    });
};

const deleteMovie = (req, res) => {
    const {id} = req.params;
    res.status(200).json({ 
        id,
        message: `${req.method} - request to movie endpoint`, 
        success: true
    });
};

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
};