import { useRouter } from "next/router";
import { Header } from "../components/Header";

export default function Pokemon() {
  const router = useRouter()
  const pokemon = router.query.pokemon

  return (
    <div className="container">
      <Header />
      <h1>{pokemon}</h1>
    </div>
  );
}
