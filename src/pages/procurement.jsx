import Header from "../components/common/header"
import ProcurementComponent from "../components/procurement"
import Footer from "../components/common/footer"

const Procurement = () => {
    return (
        <div className="top-bar">
            <Header />
            <section style={{ overflow: "hidden" }}>
                <ProcurementComponent />
                <Footer />
            </section>
        </div>
    )
}

export default Procurement

