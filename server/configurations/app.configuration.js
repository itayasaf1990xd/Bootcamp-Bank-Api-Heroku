const { PORT, MONGODB_URL } = process.env;

const rootPath = __dirname

const corsConfig = {
    origin:["http://localhost:3000", "https://localhost:3000"]
}

module.exports = { PORT, MONGODB_URL, corsConfig, rootPath }