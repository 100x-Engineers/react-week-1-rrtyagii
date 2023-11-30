const db = require("./models/index.js");

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

/**
 * npx sequelize-cli model:generate --name Users --attributes username:string,email:string,email_verified_at:date,display_name:string,bio:text,DOB:date,passwordHash:string,following:integer,follower:integer,bio-link:string,profile_picture_url:string,cover_picture_url:string
 */

/**
 * npx sequelize-cli model:generate --name Posts --attributes user_id:bigint,content:text,posted_at:date,repost_id:bigint,reply_to_post_id:bigint,likes_count:integer,replies:integer,views:integer,repost_count:integer
 */

/**
 * npx sequelize-cli model:generate --name Likes --attributes user_id:bigint,post_id:bigint,liked_at:date
 */

/**
 * npx sequelize-cli model:generate --name FollowSystem --attributes follower_id:bigint,followee_id:bigint,followed_at:date
 */

/**
 * npx sequelize-cli model:generate --name Media --attributes post_id:bigint,media_url:string,media_type:string
 */