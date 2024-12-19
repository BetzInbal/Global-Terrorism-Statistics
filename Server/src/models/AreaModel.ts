import mongoose, { Schema, Document, Types } from "mongoose";

interface incidents {
    gname: string,
    total_incidents: number
    total_damage: number
}

const IncidentsSchema = new Schema<incidents>({
    gname: {
        type: String,
        unique: true,
        required: true
    },
    total_incidents: {
        type: Number,
        required: true
    },
    total_damage: {
        type: Number,
        required: true
    }
})

export interface IArea extends Document {
    area: string,
    incidents:incidents[],
    total_incidents: number
    total_damage: number,
    latitude: number,
    longitude: number,

}

const AreaSchema = new Schema<IArea>({
    area: {
        type: String,
        unique: true,
        required: true
    },
    incidents: {
        type: [IncidentsSchema],
        default: []
    },
    total_incidents: {
        type: Number,
        required: true,
        default:0
    },
    total_damage: {
        type: Number,
        required: true,
        default:0
    },
    latitude: {
        type: Number ,
        required: true,
        default:0
    },
    longitude: {
        type: Number,
        required: true,
        default:0
    }
    })
    
    export default mongoose.model<IArea>("Area", AreaSchema)