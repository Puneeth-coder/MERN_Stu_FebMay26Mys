const { getCurrentUser } = require("./user");
const emitter = require("./events");

let posts = [];

function createPost(content) {
    return new Promise((resolve, reject) => {
        const user = getCurrentUser();
        if (!user) return reject("Login first");

        const post = {
            id: Date.now().toString(),
            author: user.id,
            content,
            likes: [],
            comments: []
        };

        posts.push(post);
        emitter.emit("postCreated");
        resolve(post);
    });
}

function getPosts() {
    return posts;
}

module.exports = { createPost, getPosts };