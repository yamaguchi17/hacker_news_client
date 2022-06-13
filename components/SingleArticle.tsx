import {useState, useEffect} from 'react';
import { distanceTime } from './commonFunc';
import { hackerNewsAPIModel } from '../api/ApiTypes';

type Props = {
    id:number;
  }
  
export const SingleArticle:React.FC<Props> = (props) => {
  
    const [item, setItem] = useState<hackerNewsAPIModel>(null);
  
    useEffect(()=>{
        const getByIdURL = `https://hacker-news.firebaseio.com/v0/item/${props.id}.json?print=pretty`;
        fetch(getByIdURL)
        .then(res=>res.json())
        .then(res=>{
          setItem(res);
        });
    },[])
  
    return (
      <article key={"article"+props.id} style={{border:"solid 1px"}}>
        <p>{props.id}</p>
        <p>{item?.type}</p>
        <p>{item?.title}</p>
        <p>{item?.by}</p>
        {item?.time !== undefined && <p>{distanceTime(item.time)}</p>}
      </article>
    )
  }