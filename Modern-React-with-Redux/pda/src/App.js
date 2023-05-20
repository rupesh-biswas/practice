import ProfileCard from "./ProfileCard";
import alexa from "./images/alexa.png"
import cortana from "./images/cortana.png"
import siri from "./images/siri.png"
import "bulma/css/bulma.css"

export default function App() {
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistants</p>
                </div>
            </section>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard
                                title="Alexa"
                                handle="alexa@99"
                                img={alexa}
                                description="Alexa was created by Amazon and helps you buy things."
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard
                                title="Cortana"
                                handle="Cortana@99"
                                img={cortana}
                                description="Cortana was made by Microsoft. Who knows what it does?"
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard
                                title="Siri"
                                handle="Siri@99"
                                img={siri}
                                description="Siri was made by Apple and is begin phased out."
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}