// Relationship patterns
const mongoose = require("mongoose");
async function main() {
    try{
           await mongoose.connect('mongodb://127.0.0.1:27017/embrel');
            console.log("Connected to mongoDB");
         // one-to-many Relationship (embedding approch)
            const blogSchema = new mongoose.Schema({
                title:String,
                comments:
                [
                    {
                        text:String
                    }
                ]
            });
            const Blog = mongoose.model('Blog',blogSchema);
            await Blog.deleteMany();    // Deleting the existing document

            const blog = await Blog.create({
                title:"Mongoose basics",
                comments:
                [
                    
                        {text:"Great article"},
                        {title:"Helpful article"}
                ]
            });
            // console.log("Embedding:");
            // console.log(await Blog.find());

            // one-to-many Relationship (Referencing approch)
            const postSchema = new mongoose.Schema({
                title:String
            });
            const commentSchema = new mongoose.Schema({
                text:String,
                post:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'Post'
                }
            });

            const Post = mongoose.model('Post',postSchema);
            const Comment = mongoose.model('Comment',commentSchema);

            await Post.deleteMany();
            await Comment.deleteMany();

            const post = await Post.create({title:"NodeJS Basics"});
            await Comment.create([
                {text:"Nice post!", post:post._id},
                {text:"Good", post:post._id}
            ]);
            // console.log("Referencing:");
            // console.log(await Comment.find().populate('post'));

            // Many-to-Many relation
            const studentSchema = new mongoose.Schema({
                name:String,
                courses:
                [
                    {
                        type:mongoose.Schema.Types.ObjectId,
                        ref:'Course'
                    }
                ]
            });
            const courseSchema = new mongoose.Schema({
                title:String,
                students:[
                    {
                        type:mongoose.Schema.Types.ObjectId,
                        ref:'Student'
                    }
                ]
            });
            const Student = mongoose.model('Student',studentSchema);
            const Course = mongoose.model('Course',courseSchema);

            // await Student.deleteMany();
            // await Course.deleteMany();

            const course1 = await Course.create({title:"MongoDB"});
            const course2 = await Course.create({title:"Node.js"});

            const student1 = await Student.create({
                name:"Puneeth",
                courses:[course1._id,course2._id]
            });

            const student2 = await Student.create({
                name:"Lekhana",
                courses:[course2._id]
            });
            // Updated courses with students
            course1.students.push(student1._id,student2._id);
            course2.students.push(student2._id);
            await course1.save();
            await course2.save();

            console.log("Many-to-Many:");
            console.log(await Student.find().populate('courses'));
            console.log(await Course.find().populate('students'));
    }
    catch(err){
        console.error("Error:",err.message);
    }
    finally{
        await mongoose.disconnect();
        console.log("DB Disconnected");
    }
};
main();