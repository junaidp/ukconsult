import Header from "../components/common/header"
import Hero from "../components/webinar/hero"
import Webinars from "../components/webinar/webinars"
import NewsLetter from '../components/common/newsletter'
import Footer from "../components/common/footer"

const Webinar = () => {
    return (
        <div className="top-bar">
            <Header />
            <section style={{overflow:"hidden"}}>
                <Hero />
                <Webinars/>
                <NewsLetter webinar />
                <Footer/>
            </section>
        </div>
    )
}

export default Webinar
