const db = require("./models/index.cjs");

    (async ()=>{
        try {
            await db.sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        } finally{
            await db.sequelize.close(); 
        }
    })()


// import { Sequelize } from "sequelize";

// const sequelize = new Sequelize("postgresql://postgres:OYLJbygH9AOkIY7c@db.trgmwvprkmjobhopqjup.supabase.co:5432/postgres"); 

// (async ()=>{
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
//     sequelize.close(); 
// })()

// import db from "../../models/index.js"; 