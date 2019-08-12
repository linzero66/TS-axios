import { isPlainObject } from './util'


export function  transformRequest(data:any):any{
  console.log(data);
        if(isPlainObject(data)){


              return JSON.stringify(data)
        }
        return data;
}
