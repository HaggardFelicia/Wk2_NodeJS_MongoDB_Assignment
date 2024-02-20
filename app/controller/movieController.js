const Movies = require('../models/Movies');

const getAllMovies = async (req, res) => {
    try{
        const movies = await Movies.find({});
        res.status(200).json({ 
            data: movies,
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

const getMovieById = async (req, res) => {
    const {id} = req.params;
    try{
        const movie = await Movies.findById(id);
        res.status(200).json({ 
            data: movie,
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
}

const createMovie = async (req, res) => {
    const {movie} = req.body;
    try{
        const newMovie = await Movies.create(movie);
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
    try{
        const movie = await Movies.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ 
            data: movie,
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
};

const deleteMovie = async (req, res) => {
    const {id} = req.params;
    try{
        const movie = await Movies.findByIdAndDelete(id, req.body, { new: false });
        res.status(200).json({ 
            id,
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
    }
};

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
};