import axios from "axios";
import { BaseService } from "./BaseService";
import { BaseModel } from "../models/BaseModel";


export class UrlService implements BaseService{
    async getİnfo(url:string): Promise<BaseModel[]> {
        let response = await axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`);
        let res: BaseModel[] = response.data;
        return res;
    }
}