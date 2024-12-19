import mongoose, { Schema, Document, Double } from "mongoose";


export interface IEvent extends Document {
    eventid: number,
    iyear: number,
    imonth: number,
    iday: number,
    country_txt: string,
    region_txt: string,
    city: string,
    latitude: number,
    longitude: number,
    attacktype1_txt: string,
    targtype1_txt: string,
    target1: string,
    gname: string,
    weaptype1_txt: string,
    nkill: number,
    nwound: number
    nperps: number,
    summary: string
}


const EventSchema = new Schema<IEvent>({
    eventid: {
        type: Number,
        unique: true,
        required: true
    },
    iyear: {
        type: Number,
        required: true
    },
    imonth: {
        type: Number,
        required: true
    },
    iday: {
        type: Number,
        required: true
    },
    country_txt: {
        type: String,
        required: true
    },
    region_txt: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    latitude: {
        type: Number ,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    attacktype1_txt: {
        type: String,
        required: true
    },
    targtype1_txt: {
        type: String,
        required: true
    },
    target1: {
        type: String,
        required: true
    },
    gname: {
        type: String,
        required: true
    },
    weaptype1_txt: {
        type: String,
        required: true
    },
    nkill: {
        type: Number,
        required: true
    },
    nwound: {
        type: Number,
        required: true
    },
    nperps: {
        type: Number,
        required: true
    },
    summary: {
        type: String,
    }
});

export default mongoose.model<IEvent>("Event", EventSchema);