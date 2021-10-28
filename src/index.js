/* importing modules */
const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const methodOverride = require('method-override');
const {port} = require("../config/configuration");
require("../src/database/conn")

/* initializing the paths */
const templatePath = path.join(__dirname,'../template/views');
const partialsPath = path.join(__dirname,'../template/partials');
const staticPath = path.join(__dirname,"../public");

/* configure express */
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(staticPath));

/* setting the view engine for dynamic page content */
app.set('view engine','hbs');
app.set('views',templatePath);
hbs.registerPartials(partialsPath);
// hbs.registerHelper({select:selectOption})

/* Method Override Middleware*/
app.use(methodOverride('newMethod'));

/* routes */
const loginRegisterroutes = require("./routes/loginRegisterRoutes");
app.use("/",loginRegisterroutes);

/* listening to the server */
app.listen(port,()=>{
    console.log(`listening to the port address ${port}`);
});