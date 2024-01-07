import mongoose from "mongoose";

const dbConnect = async () => {
  // If the connection with MOngoose is already stablish
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  mongoose.connect(process.env.DB_URI);
};

export default dbConnect;
