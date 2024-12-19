import { connect } from 'mongoose';
//import { SettingsModel } from '../models/settingsModel';
//import { createSid } from '../services/settings.service';



import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "");
    console.log('[database] mongo successfully connected');
  } catch (error) {
    console.log(`${error}`);
  }
};

export default connectDB;
