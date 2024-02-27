import Footer from "./footer";
import Header from "./header";
import ScrollToTop from "./scrollToTop";
import { Analytics } from '@vercel/analytics/react';

export default function Layout({ children }) {
    return (
        <div className="bg-primary">
            <ScrollToTop/>
            <Header/>
            <div>{children}
            <Analytics />
            </div>
            <Footer/>
        </div>
    )
}