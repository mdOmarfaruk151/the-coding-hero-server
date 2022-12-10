const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors()); //! use for open API data all

//! Get All json Data
const categories = require("./data/categories.json");
const courses = require("./data/courses.json");
const blogsCategories = require("./blog/blogsCategories.json");
const blogs = require("./blog/blogs.json");

//! set server test routes
app.get("/", (req, res) => {
  res.send("All Json Data Running");
});

//!..................All Courses functions.........................

//! To Send Courses Categories API Data
app.get("/courses-categories", (req, res) => {
  res.send(categories);
});
//! To Send Courses Category id API Data
app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if(id==='06'){
   res.send(courses);
  }
  else{
  const category_courses = courses.filter(c=> c.category_id === id);
  res.send(category_courses);
  }
  
});
//! To Send Courses API Data
app.get("/courses/:id", (req, res) => {
    const id = req.params.id;
    const selectedCourses = courses.find(c=>c._id===id);
    res.send(selectedCourses);
});
//! To show all courses API Data
app.get("/courses",(req, res)=>{
    res.send(courses);
});
//!..................All Courses functions End.........................

//!..................All Blogs functions Start.........................

//! To Send blogs Categories API Data
app.get("/blogs-categories", (req, res) => {
  res.send(blogsCategories);
});
//! To Send blogs Category id API Data
app.get("/blogs-category/:id", (req, res) => {
    const id = req.params.id;
    if(id === '05'){
        res.send(blogs)
    }
    else{
        const category_blogs = blogs.filter(b=> b.category_id === id);
        res.send(category_blogs);
    }
});
//! To Show all blogs post API Data
app.get('/blogs', (req, res)=>{
    res.send(blogs)
})
//! To Send blogs id API Data
app.get("/blogs/:id", (req, res) => {
    const id = req.params.id;
    const selectedBlogs = blogs.find(b=>b.id===id);
    res.send(selectedBlogs)
    
});
//!..................All Blogs functions End.........................

//! for test server port is running
app.listen(port, () => {
  console.log("coding server running on port", port);
});
