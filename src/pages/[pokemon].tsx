import Head from 'next/head';
import { useRouter } from 'next/router';
import { Header } from '../components/Header';
import { PokeInfo } from '../components/PokeInfo';

export default function Pokemon() {
    const router = useRouter()
    const pokemon = router.query.pokemon

    return (
        <div className='container'>
            <Head>
                <title>Pokemon Info</title>
            </Head>
            <Header />
            <PokeInfo pokemon={pokemon}/>
        </div>
    )
}