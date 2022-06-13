import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Header } from './Header';
import { Footer } from './Footer';

type Props = {
  title:string;
  header:string;
  children: React.ReactNode;
};

export const Layout:React.FC<Props> = (props) => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Header header={props.header} />
      <div>
        <h3>{props.title}</h3>
        {props.children}
      </div>
      <Footer footer="footer" />
    </div>
  )
}