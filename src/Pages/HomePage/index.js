import HeroSlider from "../../Components/HeroSlider";
import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";
import MovieList from "../../Components/MovieList";

export default function HomePage() {
  return (
    <PrimaryLayout>
      <HeroSlider></HeroSlider>
      <MovieList listTitle="مورد انتظار ترین ها" url="upcoming" icon="fa-solid fa-camera"></MovieList>
      <MovieList listTitle="در حال اکران" url="now_playing" icon="fa-solid fa-fire"></MovieList>
      <MovieList listTitle="عناوین برتر" url="top_rated" icon="fa-regular fa-star" hasNumber={true}></MovieList>
    </PrimaryLayout>
  );
}
