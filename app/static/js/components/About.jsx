import React, { Component } from 'react';
import { Link } from 'react-router';

class About extends Component {
    render() {
        return (
                       <div>
                <div>
                    <div id="about-background">
                        <div id="about">
                            <h1>Hello, I'm Kaisin</h1>
                            <p>I make things with code. Check out some of my work! A 1975 report indicated that the CIA attempted to hire mobsters to kill Cuban leader Fidel Castro.

The 83-page report includes an FBI memorandum detailing the time when Robert Kennedy told the agency "that an intermediary had been hired by CIA to approach Sam Giancana with a proposition of paying $150,000 to hire some gunman to go into Cuba and kill Castro." Giancana was a mob boss.

"Attorney General Kennedy stated that the CIA should never undertake the use of Mafia people again without first checking with the Department of Justice because it would be difficult to prosecute such people in the future," the report indicated. "Mr. Kennedy further advised that because of this matter it would be very difficult to initiate any prosecution against Giancana, as Giancana could immediately bring out the fact that the United States Government had approached him to arrange for the assassination of Castro."
</p>
                            <p id="about-link"><Link to = "/portfolio">Portfolio</Link></p>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default About;