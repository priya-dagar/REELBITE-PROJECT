// create server
const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes');
const foodRoutes = require('./routes/food.routes');
const foodPartnerRoutes = require('./routes/food-partner.routes');
const cors = require('cors');

const app = express();

/**
 * Allow frontend requests in both local + production
 */
const allowedOrigins = [
  "http://localhost:5173",
  "https://reelbite-project.vercel.app",
  "https://reelbite-project-12us.vercel.app"
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      const allowedOrigins = [
        "http://localhost:5173",
        "https://reelbite-project.vercel.app",
        "https://reelbite-project-12us.vercel.app"
      ];

      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.log("Blocked origin:", origin);
      return callback(null, false);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(cookieParser());
app.use(express.json());

/**
 * Health check route for Render
 */
app.get("/", (req, res) => {
  res.send("Food View API running successfully");
});

app.use("/api/auth", authRoutes);
app.use("/api/food", foodRoutes);
app.use("/api/food-partner", foodPartnerRoutes);

module.exports = app;