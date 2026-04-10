// CRUD operation in MongoDB using Momgoose

const mongoose = require("mongoose");
async function runCurdDemo() {
    try{
           await mongoose.connect("mongodb://localhost:27017/abcmern");
           console.log("MongoDB Connected Successfully");
    
           const studentSchema = new mongoose.Schema({
            name: String,
            age: Number,
            role: String
           });

           const student = mongoose.models.student || mongoose.model("Student",studentSchema);
        //    Clearing the previous demo data
           await student.deleteMany({role:"demo-student"});

        //    Create using the function save()
        const firstStudent = new student({
            name: "Puneeth",
            age: 22,
            role: "demo-student"
        });
        await firstStudent.save();
        // console.log("Created new student with save()",firstStudent);

         //    Create using the function create()
        const secondStudent = await student.create({
            name: "Harsha",
            age: 21,
            role: "demo-student"
        });
        // console.log("Created new student with create()",secondStudent);

        // Read using the function of find()
        const allDemoStudents = await student.find({role:"demo-student"});
        // console.log("Read with find()",allDemoStudents);

        // Read using findOne()
        const oneDemoStudent = await student.findOne({name:"Harsha"});
        console.log("Read using findOne()",oneDemoStudent);

        // Update using findByIdAndUpdate()
        const updatedStudent = await student.findByIdAndUpdate(
            secondStudent._id,
            {age:19},
            {new:true}
        );
        console.log("Updated with findByIdAndUpdate()",updatedStudent);

        // Delete using function findByIdAndUpdate()
        const deletedStudent = await  student.findByIdAndDelete(secondStudent._id);
        console.log("Deleted with findByIdDelete()",deletedStudent);

        await mongoose.connection.close();
        console.log("connection closed");
    }
    catch(error){
        console.log("Crud demo error",error.message);
    }
};
runCurdDemo();