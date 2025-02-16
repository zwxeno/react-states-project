import {Component} from "react";

class Profile extends Component {
    person;

    constructor(props) {
        super(props);
        this.person = props;
    }

    render() {
        return (
            <div>
                <img src={this.person.imgSrc} alt='person image'/>
                <h1>{this.person.fullName}</h1>
                <h3>{this.person.profession}</h3>
                <p>{this.person.bio}</p>
            </div>
        )
    }
}

export default Profile;