// import fs from "fs/promises"
// import { IEnents } from "../models/eventModel";
// import Typemodel from "../models/Typemodel";
// import AreaModel from "../models/AreaModel";

// export const getFileData = async <T>(): Promise<T[] | void> => {
//   try {
//     const dataFromFile: any = await fs.readFile(
//       `C:/Users/codco/Music/Global-Terrorism-Statistics/Server/globalterrorismdb_0718dist.json`,
//       "utf-8"
//     );
//     const parsaData: T[] = await JSON.parse(dataFromFile);
//     return parsaData;
//   } catch (error) {
//     console.log(error);
//   }
// };

 
//  export const xcv = async ()=>{
//   const data = await getFileData<IEnents[]>().then((d)=>{insertToYears(d![0])})
//  }

// const insertToTypes = async (event: any) => {
//   try {
//     let type = await Typemodel.findOne({ type: event.attacktype1_txt })
//     if (!type){
//       type = new Typemodel({type:event.attacktype1_txt,
//         total_damage:0
//       })
//     }
//     type.$inc("total_damage",event.nkill+ event.nwound)
//     console.log(type);
    
//     type.save()

//   } catch (error) {
//     console.log(error);

//   }

// }


// const insertToYears = async (event: any) => {
//   try {
//     let area = await AreaModel.findOne({area:event.city})
//     if (!area){
//       area = new AreaModel({area:event.city,
//         incidents:[]
//       })
//     }
//     area.$inc("total_damage", event.nkill+ event.nwound)
//     area.$inc("total_incidents", 1)    
//     area.latitude= area.latitude|event.latitude
//     area.longitude= area.longitude|event.longitude

//   } catch (error) {
// console.log(error);

//   }

// }

// const insertToArieas = async () => {
//   try {

//   } catch (error) {

//   }

// }