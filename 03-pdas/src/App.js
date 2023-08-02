import "bulma/css/bulma.css"
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png"

function App(){
    return(
    <div>
        <section className="hero is-primary">
            <div className="hero-body">
                <p className="title">Personal Digital Assistance</p>
            </div>
        </section>

        <div className="container">
            <section className="section">
                <div className="columns">
                    <div className="column is-3">
                        <ProfileCard 
                            title="Alexa" 
                            handle="@alexa99" 
                            image={AlexaImage}
                            description="Alexa was created by Amazon and help you buy things.hii"
                        />
                    </div>
                    <div className="column is-3">
                        <ProfileCard 
                            title="Cortana" 
                            handle="@cortana72"
                            image={CortanaImage}
                            description="Cortana was made by Microsoft. Who knows what it does?"
                        />
                    </div>
                    <div className="column is-3">
                        <ProfileCard 
                            title="Siri" 
                            handle="@siri44" 
                            image={SiriImage}
                            description="Siri was made by Apple and is being phased out."
                        />
                    </div>
                </div>
            </section>
        </div>
        
        
        
    </div>
    )
}

export default App;