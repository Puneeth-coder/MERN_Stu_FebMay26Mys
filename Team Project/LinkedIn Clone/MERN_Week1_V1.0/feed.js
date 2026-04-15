const { getCurrentUser, getAllUsers } = require("./user");
const { getPosts } = require("./posts");

function viewFeed() {
    const user = getCurrentUser();

    if (!user) {
        console.log("Please login first");
        return;
    }

    const posts = getPosts();
    const users = getAllUsers();

    const feed = posts.filter(post =>
        user.connections.includes(post.author) ||
        post.author === user.id
    );

    if (feed.length === 0) {
        console.log("No posts to show");
        return;
    }

    feed.forEach(post => {
        const author = users.find(u => u.id === post.author);

        if (!author) {
            console.log(`Unknown user: ${post.content}`);
            return;
        }

        console.log(`${author.name}`);
        console.log(`${author.headline}`);
        console.log(`${post.content}`);
    });
}

module.exports = { viewFeed };