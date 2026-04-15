const readline = require("readline");
const chalk = require("chalk");

const { createProfile, getCurrentUser } = require("./user");
const { addSkill } = require("./profile");
const { sendRequest } = require("./connections");
const { createPost } = require("./posts");
const { viewFeed } = require("./feed");
const validateInput = require("./validator");
const emitter = require("./events");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Event listeners
emitter.on("profileUpdated", () =>
    console.log(chalk.green("Profile updated!"))
);

emitter.on("connectionRequested", () =>
    console.log(chalk.blue("Connection request sent"))
);

emitter.on("postCreated", () =>
    console.log(chalk.green("Post created"))
);

emitter.on("feedViewed", () =>
    console.log(chalk.cyan("Viewing feed"))
);

// CLI Menu
function menu() {
    console.log(`
1. Create Profile
2. Add Skill
3. Send Connection Request
4. Create Post
5. View Feed
6. Exit
`);

    rl.question("Choose option: ", async (choice) => {
        switch (choice) {
            case "1":
                rl.question("Name: ", (name) => {
                    rl.question("Headline: ", async (headline) => {
                        await createProfile(name, headline);
                        console.log(chalk.green("Profile created"));
                        menu();
                    });
                });
                break;

            case "2":
                rl.question("Skill: ", (skill) => {
                    addSkill(skill);
                    menu();
                });
                break;

            case "3":
                rl.question("Target User ID: ", async (id) => {
                    try {
                        await sendRequest(id);
                    } catch (e) {
                        console.log(chalk.red(e));
                    }
                    menu();
                });
                break;

            case "4":
                rl.question("Post: ", async (content) => {
                    await createPost(content);
                    menu();
                });
                break;

            case "5":
                try {
                    const feed = await viewFeed();
                    console.log(feed);
                } catch (e) {
                    console.log(chalk.red(e.message));
                }
                menu();
                break;

            case "6":
                rl.close();
                break;

            default:
                console.log(chalk.red("Invalid option"));
                menu();
        }
    });
}

menu();