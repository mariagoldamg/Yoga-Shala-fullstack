import YogaShalaLogo from "./YogaShalaLogo.png";

import Teachers from "./Teachers";
import Footer from "./Footer";

function About(){

    return (<div>
        <div className="blockAbout">

<img alt='logo' className="yogaIcon" src={YogaShalaLogo}/>
<h1>Welcome to Yoga Shala</h1>
        </div>
        <div className="color">
<div className="blockAbout" >
    <p>
    At Yoga Shala, we are dedicated to provide you with the perfect environment to focus on yourself, so that when you walk out our doors, you feel like a new person, rested, reenergized and inspired.
Yoga Shala was built to be a sanctuary where you can find piece either in peacefull meditation or in an active vinyasa flow.
Whether you’re new to yoga or an experienced practioner, Yoga Shala can offer your a variety sessions to improve body, mind, and soul.
    </p></div>
</div>
<br></br>
<div className="blockAbout">
<h2>Meet Our Teachers</h2>
</div>

<div className="blockAbout">
    <Teachers/>
</div>

<div className="blockAbout" >
    <p>
   Drop-ins are welocme ($15/class), memberships are available at the studio.</p>
</div>



<div>
    <Footer/>
</div>
</div>
    )
}



export default About;