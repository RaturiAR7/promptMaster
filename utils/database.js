import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  // If already connected, return early
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("MongoDB Connected");
  } catch (error) {
    // Handle connection errors
    console.error("Error connecting to MongoDB:", error);
    isConnected = false; // Ensure isConnected is false in case of failure
  }
};
