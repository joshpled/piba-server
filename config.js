module.exports = {
  MONGODB: `mongodb+srv://admin:${process.env.ADMIN_PASSWORD}@cluster0.dmex8.mongodb.net/piba?retryWrites=true&w=majority`,
  SECRET_KEY: process.env.SECRET_KEY,
};
