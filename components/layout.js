import Footer from "./footer";
import Header from "./header";
import ScrollToTop from "./scrollToTop";

export default function Layout({ children }) {
    return (
        <div className="bg-primary">
            <ScrollToTop/>
            <Header/>
            <div>{children}</div>
            <Footer/>
        </div>
    )
}