import { Style } from "./style";
import { Link } from "react-router-dom";

export default function Header() {
    return(
        <Style className="header">
            <div className="container">
                <div className="header-inner flex space-between align-center">
                    <div class="first-items flex justify-start align-center gap-20">
                        <div className="logo">
                            <Link to="/">
                                <img src="assets/images/logo.png" />
                            </Link>
                        </div>
                        <div className="menu">
                            <ul>
                                <Link to="/"><li>فیلم</li></Link>
                                <Link to="/"><li>سریال</li></Link>
                                <Link to="/"><li>انیمه</li></Link>
                                <Link to="/"><li>تماشای آنلاین</li></Link>
                                <Link to="/"><li>سی‌نما با هم</li></Link>
                                <Link to="/"><li>اخبار</li></Link>
                                <Link to="/"><li>دسته بندی ها</li></Link>
                                <Link to="/"><li>تماس با ما</li></Link>
                            </ul>
                        </div>
                    </div>
                    <div className="second-items flex justify-end align-center gap-30">
                        <div className="subscription">
                            <Link className="btn-primary" to="/">خرید اشتراک</Link>
                        </div>
                        <div className="login">
                            <Link className="btn" to="/">ورود</Link>
                        </div>
                        <div className="search">
                            <Link to="/">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Style>
    )
}