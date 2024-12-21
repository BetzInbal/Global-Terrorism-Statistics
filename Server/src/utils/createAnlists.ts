import eventModel, { IEvent } from "../models/eventModel";
import Typemodel from "../models/Typemodel";
import AreaModel from "../models/AreaModel";
import YearModel from "../models/YearModel";




const insertToTypes = async (event: IEvent) => {
    try {
        let type = await Typemodel.findOne({ type: event.attacktype1_txt })
        if (!type) {
            type = new Typemodel({
                type: event.attacktype1_txt,
                total_damage: 0
            })
        }
        type.$inc("total_damage", event.nkill + event.nwound)
        await type.save()
        return event
    } catch (error) {
        console.log("[insertToTypes]")
        console.error(error);
    }
}

const insertToEvents = async (event: IEvent) => {
    try {
        let newEvent = await new eventModel(event)
        await newEvent.save()
        return event
    } catch (error) {
        console.log("[insertToEvents]")
        console.error(error);
    }
}

const insertToArieas = async (event: IEvent) => {
    try {
        let area = await AreaModel.findOne({ area: event.city })
        if (!area) {
            area = new AreaModel({
                area: event.city,
                latitude: event.latitude,
                longitude: event.longitude

            })
        }
        let incidents = area.incidents.find((i) => i.gname === event.gname)
        if (!incidents) {
            area.incidents.push({
                gname: event.gname,
                total_damage: event.nkill + event.nwound,
                total_incidents: 1
            })
        }
        else {
            incidents.total_damage += (event.nkill + event.nwound)
            incidents.total_incidents++
        }
        area.latitude = area.latitude ? area.latitude : event.latitude;
        area.longitude = area.longitude ? area.longitude : event.longitude;
        area.$inc("total_damage", event.nkill + event.nwound)
        area.$inc("total_incidents", 1)
        await area.save()
    } catch (error) {
        console.log("[insertToArieas]")

        console.error(error);

    }

}

const insertToYears = async (event: IEvent) => {
    try {
        let year = await YearModel.findOne({ year: event.iyear })
        if (!year) {
            year = new YearModel({
                year: event.iyear
            })
        }
        let incidents = year[`m${event.imonth as 1}`].find((i) => i.gname === event.gname)
        if (!incidents) {
            year[`m${event.imonth as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12}`]
                .push({
                    gname: event.gname,
                    total_incidents: 1
                })
        }
        else {
            incidents.total_incidents++
        }
        await year.save()
    } catch (error) {
        console.log("[insertToYears]")

        console.error(error);

    }

}
export default async (event: IEvent) => {
    await insertToYears(event)
    await insertToArieas(event)
    await insertToTypes(event)
    await insertToEvents(event)
}
