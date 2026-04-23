const showService = require("../services/show.service");

// Create Show 
exports.createShow = async (req,res,next) => {
    try{
        const show = await showService.createShow(req.body);

        res.status(201).json({
            success:true,
            message:"Show created successfuly",
            data:show,
        });
    }
    catch(error){
        next(error);
    }
};

// Get shows
exports.getShows = async (req,res,next) => {
    try{
        const shows = await showService.getShows(req.query);

        res.status(200).json({
            success:true,
            message:"Shows fetched successfuly",
            data:shows,
        });
    }
    catch(error){
        next(error);
    }
};

// Get show by id
exports.getShowById = async (req,res,next) => {
    try{
        const show = await showService.getShowById(req.params.id);

        res.status(200).json({
            success:true,
            message:"Show fetched successfuly",
            data:show,
        });
    }
    catch(error){
        next(error);
    }
};

// Update shows
exports.updateShow = async (req,res,next) => {
    try{
        const show = await showService.updateShow(req.params.id,req.body);

        res.status(200).json({
            success:true,
            message:"Show updated successfuly",
            data:show,
        });
    }
    catch(error){
        next(error);
    }
};

// Delete shows
exports.deleteShow = async (req,res,next) => {
    try{
        await showService.deleteShow(req.params.id);

        res.status(200).json({
            success:true,
            message:"Show deleted successfuly",
            data:show,
        });
    }
    catch(error){
        next(error);
    }
};