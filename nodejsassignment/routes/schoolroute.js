const express = require("express");
const router = express.Router();
const db = require('../dbconnection/db.js')
router.post('/addschool' , (req , res)=>{
    const {name , address , latitude , longitude} = req.body;
    if(!name || !address || !latitude || !longitude){
        return res.status(400).json({error : "invalid data input"});
    }
    const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
    db.query(query , [name , address , latitude , longitude] , (err , result)=>{
        if(err) throw err;
        res.status(201).json({message : 'school added succesfully' , schoolId: result.insertId});
    })

})

const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const radian = (value) => (value * Math.PI) / 180;
    const earthradius = 6371;

    const dlat = radian(lat2 - lat1);
    const dlon = radian(lon2 - lon1);

    const a = Math.sin(dlat / 2) * Math.sin(dlat / 2) +
              Math.cos(radian(lat1)) * Math.cos(radian(lat2)) *
              Math.sin(dlon / 2) * Math.sin(dlon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return (earthradius * c).toFixed(2);
};

router.get('/listSchools', (req, res) => {
    const { userlatitude, userlongitude } = req.query;
    
    if (isNaN(userlatitude) || isNaN(userlongitude)) {
        return res.status(400).json({ error: 'Invalid latitude or longitude' });
    }

    const query = 'SELECT * FROM schools';
    db.query(query, (error, schools) => {
        if (error) throw err;
        
        const sortedSchools = schools.map(school => ({
            ...school,
            distance: calculateDistance(userlatitude, userlongitude, school.latitude, school.longitude)
        })).sort((a, b) => a.distance - b.distance);

        res.status(200).json(sortedSchools);
    });
});

module.exports = router;