import { Header } from "../components/Header";
import { PokeList } from "../components/PokeList";
import { Search } from "../components/Search";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Search />
      <PokeList />
    </div>
  )
}

