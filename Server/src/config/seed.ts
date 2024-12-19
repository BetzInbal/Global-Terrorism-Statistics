import fs from "fs/promises"
import { IEnents } from "../models/eventModel";
import Typemodel from "../models/Typemodel";

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

//const data = getFileData()

const insertToTypes = async (event: IEnents) => {
  try {
    const type = await Typemodel.findOne({ type: event.attacktype1_txt })

  } catch (error) {

  }

}

const insertToYears = async () => {
  try {

  } catch (error) {

  }

}

const insertToArieas = async () => {
  try {

  } catch (error) {

  }

}