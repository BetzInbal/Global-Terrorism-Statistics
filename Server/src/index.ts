import connectDB from "./config/db";
import "dotenv/config";

connectDB()
import fs from "fs/promises"
import { IEvent } from "./models/eventModel";
import Typemodel from "./models/Typemodel";
import AreaModel from "./models/AreaModel";
import { log } from "console";
import YearModel from "./models/YearModel";
export const getFileData = async <T>(): Promise<T[] | void> => {
    try {
        const dataFromFile: any = await fs.readFile(
            `C:/Users/codco/Music/Global-Terrorism-Statistics/Server/globalterrorismdb_0718dist.json`,
            "utf-8"
        );
        const parsaData: T[] = await JSON.parse(dataFromFile);
        return parsaData;
    } catch (error) {
        console.log(error);
    }
};


export const xcv = async () => {
    const data = await getFileData<IEvent>().then(async (d) => {
        if (!d) return
        for (const element of d) {
               //if (element.city)
               await insertToYears(element)
            await insertToArieas(element)
            await insertToTypes(element)
        }
    })

}

const insertToTypes = async (event: any) => {
    try {
        let type = await Typemodel.findOne({ type: event.attacktype1_txt })
        if (!type) {
            type = new Typemodel({
                type: event.attacktype1_txt,
                total_damage: 0
            })
        }
        type.$inc("total_damage", event.nkill + event.nwound)
        console.log(type);

        type.save()

    } catch (error) {

    }

}


let i = 0
const insertToArieas = async (event: any) => {
    try {
        let area = await AreaModel.findOne({ area: event.city })
        console.log(area);

        
        if (!area) {
            area = new AreaModel({
                area: event.city,
                latitude:  event.latitude | 0.0,
                longitude :  event.longitude|0.0
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

        area.$inc("total_damage", event.nkill + event.nwound)
        area.$inc("total_incidents", 1)
            //console.log(area);
        area.save()
        //console.log(++i);

    } catch (error) {
        //console.error(error);

    }

}

const insertToYears = async (event: any) => {
    try {
        let year = await YearModel.findOne({ year: event.iyear })
        if (!year) {
            year = new YearModel({
                year: event.iyear
            })
        }
        let incidents = year[`m${event.imonth as 1}`].find((i) => i.gname === event.gname)
        if (!incidents) {
            year[`m${event.imonth as 1}`].push({
                gname: event.gname,
                total_incidents: 1
            })
        }
        else {
            //year.$inc(`m${event.imonth as 1}`,1)
            incidents.total_incidents++
        }
        year.save()
        

    } catch (error) {

    }

}

const test = async ()=>{
    let area = await AreaModel.find({ area: "Unknown" })
    console.log(area.length);
    
}
//test()
xcv()
