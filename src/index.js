require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database");
const cors = require("cors");

const ProductRouter = require("./routes/ProductRouter");
const AdminRouter = require("./routes/AdminRouter");
const NewsRouter = require("./routes/NewsRouter");
const ZayavkaRouter = require("./routes/ZayavkaRouter");
const bannerRouter = require("./routes/BannerRouter");
const OtzivRotuer = require("./routes/OtzivRouter");
const CategoryRouter = require('./routes/CategoryRouter')
const AnnonsRouter = require('./routes/AnnosRouter')
const CursRouter = require('./routes/CursRouter')
const app = express();
app.use(express.json());
app.use(cors());
connectDB();

// Serving static files from 'uploads' directory
app.use('/uploads', express.static('uploads'));

// Route Setup
app.use('/api/v1/card', ProductRouter);
app.use('/api/v1/zayavka', ZayavkaRouter);
app.use('/api/v1/banner', bannerRouter);
app.use('/api/v1/admin', AdminRouter);
app.use('/api/v1/news', NewsRouter);
app.use('/api/v1/otziv', OtzivRotuer)
app.use('/api/v1/category', CategoryRouter);
app.use('/api/v1/curs', CursRouter)
app.use('/api/v1/annons', AnnonsRouter)

// Connect to MongoDB

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
