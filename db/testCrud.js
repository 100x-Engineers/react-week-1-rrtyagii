const {Users, Posts, Likes, FollowSystem} = require("./models"); 


async function createRecords (){
    const user = await Users.create({
        username: "dipslyaName",
        email: "dipslyaName@gmail.com",
        display_name: "dipslya Name",
        dateOfBirth: new Date(),
        passwordHash: "DataTypes.STRING",
        following: 0,
        follower: 1,
        profile_picture_url: "././../DataTypes.STRING",
        cover_picture_url: "././../DataTypes.STRING"
    }); 

    const user2 = await Users.create({
        username: "display Name2",
        email: "dipslyaName22@gmail.com",
        display_name: "display Name",
        dateOfBirth: new Date(),
        passwordHash: "DataTypes.STRING12",
        following: 0,
        follower: 0,
        profile_picture_url: "././images/DataTypes.STRING",
        cover_picture_url: "././.images/DataTypes.STRING2"
    }); 

    const post = await Posts.create({
        user_id: user.id, 
        content: "Robin Singh Ki Century",
        posted_at: new Date()
    }); 

    const reply = await Posts.create({
        user_id: user.id,
        content: "reply to robin singh ki centry", 
        posted_at: new Date(),
        reply_to_post_id: post.id, 
    }); 

    const like = await Likes.create({
        user_id: user.id,
        post_id: post.id, 
        liked_at: new Date(),
    }); 

    const followSystem = FollowSystem.create({
        follower_id : user2.id,
        followee_id: user.id,
        followed_at: new Date(),
    }); 
}

async function createUser(){
    const user = await Users.create({
        username: "display Name2",
        email: "dipslyaName22@gmail.com",
        display_name: "display Name",
        dateOfBirth: new Date(),
        passwordHash: "DataTypes.STRING12",
        following: 0,
        follower: 0,
        profile_picture_url: "././images/DataTypes.STRING",
        cover_picture_url: "././.images/DataTypes.STRING2"
    }); 
}

async function updateUser(){
    const reply = await Users.update({location: "Chicago 📍"},{
        where:{
            id:1
        }
    }); 
} 

async function updatePost(){
    const reply = await Posts.update({replies: 1},{
        where:{
            id:1
        }
    }); 
} 

async function updateReply(){
    const reply = await Posts.update({likes_count: 3},{
        where:{
            id:2
        }
    }); 
}   

async function retrieveUsers(){
    const users = await Users.findAll(); 
    console.log(JSON.stringify(users, null, 2));
}   

retrieveUsers(); 