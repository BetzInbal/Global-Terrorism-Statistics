import fs from "fs/promises"
import eventModel, { IEvent } from "../models/eventModel";
import Typemodel from "../models/Typemodel";
import AreaModel from "../models/AreaModel";
import YearModel from "../models/YearModel";
import createAnlists from "../utils/createAnlists";



export const getFileData = async <T>(): Promise<T[]> => {
    try {
        const dataFromFile: any = await fs.readFile(
            `C:/Users/codco/Music/Global-Terrorism-Statistics/Server/globalterrorismdb_0718dist.json`,
            "utf-8"
        );
        const parsaData: T[] = await JSON.parse(dataFromFile);
        return parsaData || [];
    } catch (error) {
        console.log(error);
        return [];
    }
};

export default async ()=>{
  const event = await eventModel.findOne()
  if(event){
    console.log("[database] DB id full");
    return 
  }
  console.log("[database] Inserts the original information into DB");
  await seed()


}

export const seed = async () => {
    const data = await getFileData<IEvent>()
        if (!data.length) throw new Error("Failed to read JSON file");
        for (const event of data) {
          await createAnlists(event)
        }


}


