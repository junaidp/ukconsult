import { Helmet } from "react-helmet";
import './Procurement.css'; // Import the new CSS file

const Procurement = () => {
    return (
        <div className="procurement-page">
            <Helmet>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Procurement Maturity Level</title>
                <meta
                    name="description"
                    content="Take our free, expert-designed Procurement Maturity Assessment to evaluate the effectiveness, efficiency, and control environment of your procure-to-pay cycle."
                />
            </Helmet>

            <section className="hero-section">
                <div className="hero-container">
                    <div className="hero-content">
                        <h1 className="main-title">
                            Discover Your Procurement Maturity Level
                        </h1>
                        <h2 className="subtitle">
                            Are your procurement processes optimized, or is it time for a transformation?
                        </h2>
                        <p className="description">
                            Take our free, expert-designed Procurement Maturity Assessment to evaluate the effectiveness, efficiency, and control environment of your procure-to-pay cycle. In just 5 minutes, you’ll receive a personalized report and actionable recommendations to help you level up.
                        </p>
                        <a
                            href="https://abilite.co/form/"
                            className="cta-button"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Start the Assessment
                        </a>
                    </div>

                    <div className="hero-image-container">
                        <img
                            src="/assets/images/tool.svg"
                            alt="Procurement maturity assessment tool illustration"
                            className="hero-image"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Procurement;
