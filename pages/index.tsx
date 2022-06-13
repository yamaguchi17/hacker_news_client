import {useState, useEffect} from 'react';
import { Layout } from '../components/Layout';
import Link from 'next/link';

import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import { SingleArticle } from '../components/SingleArticle';



const Home: NextPage = () => {

  
  const targetURL = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
  const [ idList, setIdList ] = useState<number[]>([]);

  useEffect(()=>{
    fetch(targetURL)
    .then(res=>res.json())
    .then(res=>{
      setIdList(res.slice(0,10));
    })
  },[])

  return (
    <div>
      <Layout header="header" title="Top page.">
      <div>
        <h5>タイトル</h5>
          {idList.map((value) => <SingleArticle id={value} key={"getItem"+value}/>)}
      </div>
      <div>
        <h5>リンク</h5>
        <Link href="./other">
          <button>
            go to Other &gt;&gt;
          </button>
        </Link>
      </div>
      </Layout>
    </div>
  )

}

export default Home