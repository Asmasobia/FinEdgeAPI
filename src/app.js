const express = require('express');
const app = express();
 //Importing routes
const healthRoute = require('./routes/health');
//Middleware
app.use('/health', healthRoute);
//Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
});

