import axios from "axios";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PokeList } from "../components/PokeList";

interface HomeProps {
  data: {
    name: string;
    url: string;
  }[]
}

export default function Home({data}: HomeProps) {
  return (
    <div className="container">
      <Head>
        <title>PokéSearch</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="IE=7" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      </Head>
      <Header />
      <PokeList data={data}/>
      <Footer />
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10000000&offset=0").then(res => res.data.results)

  return {
    props: {
      data
    },
    revalidate: 604800,
  }
}
