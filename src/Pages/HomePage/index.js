import HeroSlider from "../../Components/HeroSlider";
import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";
import MovieList from "../../Components/MovieList";

export default function HomePage() {
  return (
    <PrimaryLayout>
      <HeroSlider></HeroSlider>
      <MovieList></MovieList>
    </PrimaryLayout>
  );
}
