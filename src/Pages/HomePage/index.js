import { useEffect } from "react";
import HeroSlider from "../../Components/HeroSlider";
import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";
import MovieList from "../../Components/MovieList";
import NewsList from "../../Components/NewsList";

const newsItems = [
  {
    poster: "assets/images/superman.webp",
    title: "شکایت نمایندگان پدیدآورنده Superman از برادران وارنر و فیلم جیمز گان",
    details: "نمایندگان «جوزف شوستر» یکی از پدیدآورندگان کتاب‌های کامیک «سوپرمن» (Superman) دی‌سی از استودیوی برادران وارنر شکایت کرد. این شکایت چند ماه مانده به اکران اقتباس سینمایی جدید به نویسندگی و کارگردانی",
    readingTime: "۲ دقیقه",
    publishDate: "۱۳ بهمن ۱۴۰۳"
  },
  {
    poster: "assets/images/snow-white.webp",
    title: "دومین تریلر Snow White دیزنی از ۱ میلیون دیسلایک عبور کرد",
    details: "دومین تریلر رسمی فیلم لایو-اکشن «سفید برفی» (Snow White) دیزنی مانند تریلر اول از مرز ۱ میلیون دیسلایک در یوتیوب عبور کرد. این فیلم با بازی «ریچل زگلر» و «گل گدوت» در نقش‌های «سفید برفی» و «ملکه بدجنس» از",
    readingTime: "۳ دقیقه",
    publishDate: "۱۳ بهمن ۱۴۰۳"
  },
]

const reviewItems = [
  {
    poster: "assets/images/oscars2025.webp",
    title: "شگفتی‌های اسکار ۲۰۲۵: دنی ویلنوو، دنزل واشینگتن و سه بازیگر زن ۵۷ ساله",
    details: "فهرست نامزدهای اسکار نود و هفتم (Oscars 2025) در حالی رونمایی شد که بخش‌هایی از شهر لس‌آنجلس هنوز در آتش می‌سوزد. این فهرست مانند ادوار قبلی پر از غفلت و غافلگیری‌هایی است که شاید در آینده هرگز از",
    readingTime: "۴ دقیقه",
    publishDate: "۴ بهمن ۱۴۰۳"
  },
  {
    poster: "assets/images/red-carpet.webp",
    title: "منتخب تصاویر فرش قرمز و مراسم اهدای جوایز گلدن گلوب ۲۰۲۵",
    details: "مراسم فرش قرمز گلدن گلوب هشتاد و دوم (Golden Globes 2025) یکشنبه شب برگزار شد و ستارگان زیادی را به هتل بورلی هیلتون در لس‌آنجلس کشاند. این مراسم با برتری فیلم «امیلیا پرز» (Emilia Perez) با دریافت چ...",
    readingTime: "۵ دقیقه",
    publishDate: "۱۷ دی ۱۴۰۳"
  },
]

export default function HomePage() {
  useEffect(() => {
    const savedPosition = sessionStorage.getItem("scrollPosition");
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition, 10));
    }
  }, []);
  return (
    <PrimaryLayout>
      <HeroSlider></HeroSlider>
      <MovieList listTitle="مورد انتظار ترین ها" url="upcoming" icon="fa-solid fa-camera" />
      <MovieList listTitle="در حال اکران" url="now_playing" icon="fa-solid fa-fire" />
      <MovieList listTitle="عناوین برتر" url="top_rated" icon="fa-regular fa-star" hasNumber={true} />
      <NewsList news={newsItems} listTitle="اخبار دنیای فیلم و سریال" icon="fa-solid fa-earth-americas" />
      <NewsList news={reviewItems} listTitle="نقد، بررسی و مصاحبه‌ها" icon="fa-solid fa-book" />
    </PrimaryLayout>
  );
}
