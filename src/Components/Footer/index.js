import Button from "../UiElements/Button";
import FooterMenu from "./FooterMenu";
import SocialMedia from "./SocialMedia";
import { Style } from "./style";

const applications = [
  {
    title: "اندروید و اندروید تی وی",
    link: "/",
  },
  {
    title: "ویندوز",
    link: "/",
  },
  {
    title: "مک",
    link: "/",
  },
  {
    title: "لینوکس",
    link: "/",
  },
];
const popularSubjects = [
  {
    title: "۱۰۰ فیلم برتر ۳۰نما",
    link: "/",
  },
  {
    title: "۱۰۰ سریال برتر ۳۰نما",
    link: "/",
  },
  {
    title: "۲۵۰ فیلم برتر IMDB",
    link: "/",
  },
  {
    title: "۲۵۰ سریال برتر IMDB",
    link: "/",
  },
];
const newsAndArticles = [
  {
    title: "اخبار سینمای جهان",
    link: "/",
  },
  {
    title: "نقد و بررسی و مصاحبه",
    link: "/",
  },
  {
    title: "اخبار سینما",
    link: "/",
  },
];
const boxOffice = [
  {
    title: "ایران",
    link: "/",
  },
  {
    title: "آمریکا",
    link: "/",
  },
];
const cinama = [
  {
    title: "قوانین",
    link: "/",
  },
  {
    title: "تماس با ما",
    link: "/",
  },
  {
    title: "مرکز آموزش",
    link: "/",
  },
  {
    title: "وضعیت سرویس",
    link: "/",
  },
];
const social = [
  {
    icon: "fa-instagram",
    link: "/",
  },
  {
    icon: "fa-twitter",
    link: "/",
  },
  {
    icon: "fa-telegram",
    link: "/",
  },
  {
    icon: "fa-discord",
    link: "/",
  },
];

export default function Footer() {
  return (
    <Style className="footer">
      <svg
        viewBox="0 0 1600 168"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        data-v-bbe59eaa=""
      >
        <path
          d="M0 168V44.6809C75.7121 25.0706 151.424 5.46027 221.111 1.03582C290.798 -3.38861 354.46 7.37281 438.889 18.0681C523.318 28.7633 628.513 39.3923 705.556 29.7777C782.598 20.1631 831.487 -9.69523 914.444 3.16486C997.402 16.025 1114.43 71.6034 1184.44 94.713C1254.46 117.823 1277.46 108.463 1338.89 94.713C1400.31 80.9628 1500.16 62.8218 1600 44.6809V168H0Z"
          class="wave-2"
          data-v-bbe59eaa=""
        ></path>
        <path
          d="M0 168V93.1791C99.258 51.5575 198.516 9.93587 260 35.192C321.484 60.4481 352.805 149.606 426.5 135.506C500.195 121.406 616.263 4.04707 705.556 11.6347C794.848 19.2224 849.753 154.732 914.444 158.415C979.136 162.097 1053.61 33.9532 1136.67 6.19847C1219.72 -21.5563 1311.35 51.0782 1390 82.3065C1468.65 113.535 1534.33 103.357 1600 93.1791V168H0Z"
          class="wave-1"
          data-v-bbe59eaa=""
        ></path>
      </svg>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-menu  flex justify-center gap-50">
            <FooterMenu items={applications} menuTitle="اپلیکیشن ها" />
            <FooterMenu items={popularSubjects} menuTitle="عناوین برتر" />
            <FooterMenu items={newsAndArticles} menuTitle="اخبار و مقالات" />
            <FooterMenu items={boxOffice} menuTitle="باکس آفیس" />
            <FooterMenu items={cinama} menuTitle="۳۰نما" />
          </div>
          <div className="social">
            <div className="top-section flex gap-40 justify-center align-center">
              <div className="icons">
                <SocialMedia items={social} />
              </div>
              <div className="logo">
                <img src="assets/images/logo.png"></img>
              </div>
            </div>
            <Button display="block" className="dmca" type="blue">
              DMCA
            </Button>
          </div>
          <div className="copyright">
            <p>تمام حقوق مادی و معنوی این سایت متعلق به ۳۰نما می باشد</p>
          </div>
        </div>
      </div>
    </Style>
  );
}
