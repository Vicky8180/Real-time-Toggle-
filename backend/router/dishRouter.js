const express = require('express');
const Dish = require('../model/dishModel');
const router = express.Router();

module.exports = (io) => {
   
    router.get('/dishes', async (req, res) => {
        try {
            console.log("hh")
            const dishes = await Dish.find();
            console.log("12")
            res.json(dishes);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });

    
    router.patch('/dishes/:id/toggle', async (req, res) => {
        try {
            console.log(req.params.id)
            const dish = await Dish.findOne({ dishId: req.params.id });
            console.log(dish)
            if (dish) {
                dish.isPublished = !dish.isPublished;
                await dish.save();
                io.emit('dishUpdated', dish);  
                console.log("updating realtime")
                res.json(dish);
            } else {
                res.status(404).json({ message: 'Dish not found' });
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });


    router.get('/dishes/search', async (req, res) => {
        try {
          const { name } = req.query;
          const query = {};
    
          if (name) {
            query.dishName = { $regex: name, $options: 'i' }; // Case-insensitive search
          }
    
        //   if (typeof isPublished !== 'undefined') {
        //     query.isPublished = isPublished === 'true';
        //   }
    
          const dishes = await Dish.find(query);
          res.json(dishes);
        } catch (err) {
          res.status(500).json({ message: err.message });
        }
      });

    return router;
};

// module.exports = router;