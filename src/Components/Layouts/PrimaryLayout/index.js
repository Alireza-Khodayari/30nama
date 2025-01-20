import Footer from "../../Footer";
import Header from "../../Header";
import { Style } from "./style";

export default function PrimaryLayout({children}) {
    return(
        <Style>
            <Header />
            {children}
            <Footer />
        </Style>
    )
}