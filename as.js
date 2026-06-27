const express = require("express")

const app = express();

let students = [

    { id: 1, name: "Nirmal", city: "gorakhpur" },
    { id: 2, name: "sachin", city: "gkp" }


];

app.use(express.json());

app.get("/", (req, res) => {

    res.send("api is running");



});

app.use(express.json());

app.get("/students", (req, res) => {

    res.json({


        message: "all students",
        data: students
    });



});

app.post("/students", (req, res) => {

    const { id, name, city } = req.body;
    const newStudent = { id, name, city };

    students.push(newStudent);
    res.json({
        message: "record added",
        students: newStudent,
        data: students


    });


});


app.put("/students/:id", (req, res) => {


    const { id } = req.params;
    const student = students.find(s => s.id == id);
    if (!student) {

        return res.status(404).json({
            menubar: "student not found"

        });

    }
    student.name = req.body.name;
    student.city = req.body.city;
    res.json({
        message: "record updated",
        student

    });

});

app.delete("/students/:id", (req, res) => {


    const { id } = req.params;
    console.log(id);
    const student = students.find(s => s.id == id);
    if (!student) {

        return res.status(404).json({
            message: "invalid id"

        });

    }
    students = students.filter(s => s.id != id);
    res.json({
        message: "record deleted",
        student

    });

});





app.listen(3001, () => {

    console.log("server started");

})