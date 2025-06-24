import React from "react"
import Header from "../components/common/header"
import Hero from "../components/webinar/hero"
import Webinars from "../components/webinar/webinars"
import NewsLetter from '../components/common/newsletter'
import Footer from "../components/common/footer"
import WebinarDialog from "../components/webinar/webinar-dialog"

const Webinar = () => {
    const [showWebinarDialog, setShowWebinarDialog] = React.useState(false)
    const [selectedWebinarId, setSelectedWebinarId] = React.useState("")
    return (
        <div className="top-bar">
            {
                showWebinarDialog &&
                <div className="model-parent" onClick={() => setShowWebinarDialog(false)}>
                    <div className="model-wrap-webinar" onClick={(e) => e.stopPropagation()}>
                        <WebinarDialog setShowWebinarDialog={setShowWebinarDialog} selectedWebinarId={selectedWebinarId} />
                    </div>
                </div>
            }
            <Header />
            <section style={{ overflow: "hidden" }}>
                <Hero />
                <Webinars setShowWebinarDialog={setShowWebinarDialog} setSelectedWebinarId={setSelectedWebinarId} />
                <NewsLetter webinar />
                <Footer />
            </section>
        </div>
    )
}

export default Webinar
