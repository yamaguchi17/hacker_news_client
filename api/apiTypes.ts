export type hackerNewsAPIModel = null |
{
  id:number;
  deleted?:boolean;
  type:string;
  by?:string;
  time?:number;
  dead?:boolean
  kids?:number[];
  text?:string;
  descendants?:number;
  score?:number;
  title?:string;
  url?:string;
  parent?:number;
  parts?:number[];
}