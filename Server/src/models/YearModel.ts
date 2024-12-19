import mongoose, { Schema, Document, Types } from "mongoose";

interface incidents {
    gname: string,
    total_incidents: number
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
    }
})

export interface IYear extends Document {
    year: string,
    m1: incidents[]
    m2: incidents[]
    m3: incidents[]
    m4: incidents[]
    m5: incidents[]
    m6: incidents[]
    m7: incidents[]
    m8: incidents[]
    m9: incidents[]
    m10: incidents[]
    m11: incidents[]
    m12: incidents[]
}

const YearSchema = new Schema<IYear>({
    year: {
        type: String,
        unique: true,
        required: true
    },
    m1: {

        type: [IncidentsSchema],
        default: []
    },
    m2: {

        type: [IncidentsSchema],
        default: []
    },
    m3: {

        type: [IncidentsSchema],
        default: []
    },
    m4: {

        type: [IncidentsSchema],
        default: []
    },
    m5: {

        type: [IncidentsSchema],
        default: []
    },
    m6: {

        type: [IncidentsSchema],
        default: []
    },
    m7: {

        type: [IncidentsSchema],
        default: []
    },
    m8: {

        type: [IncidentsSchema],
        default: []
    },
    m9: {

        type: [IncidentsSchema],
        default: []
    },
    m10: {

        type: [IncidentsSchema],
        default: []
    },
    m11: {

        type: [IncidentsSchema],
        default: []
    },
    m12: {

        type: [IncidentsSchema],
        default: []
    }
})

export default mongoose.model<IYear>("Year", YearSchema);
