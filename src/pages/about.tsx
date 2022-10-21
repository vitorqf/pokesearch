import Head from 'next/head';
import { AboutMain } from '../components/AboutMain';
import { Header } from '../components/Header';

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About</title>
      </Head>
      <Header />
      <AboutMain />
    </div>
  );
}
