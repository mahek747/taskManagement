const express = require("express");
const dotenv = require("dotenv");
const { dbConnection } = require("./database/db");  
const userRoute = require("./routes/user.route");  
const taskRoute = require("./routes/task.route");  
const roleRoute = require("./routes/role.route");  
const categoryRoute = require("./routes/category.route");  

dotenv.config();  

const app = express();  

app.use(express.json());  
app.use(express.urlencoded({ extended: true }));  
  
app.use("/user", userRoute);  
app.use("/task", taskRoute);  
app.use("/role", roleRoute);  
app.use("/category", categoryRoute);  

dbConnection();  

const PORT = process.env.PORT || 8080; 
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
