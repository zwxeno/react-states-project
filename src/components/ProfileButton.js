import {Component} from "react";
import {Button} from "react-bootstrap";
import Profile from "./Profile";

class ProfileButton extends Component {
    intervalVariable;

    constructor(props) {
        super(props);
        this.state = {
            Person: {
                fullName: 'Wassim Zerhouni',
                bio: 'React apprentice',
                imgSrc: 'https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png',
                profession: 'Software Engineer'
            },
            shows: false,
            timer: 0
        };
    }

    toggleShows = () => {this.setState((prevState) => ({shows: !prevState.shows}));}

    componentDidMount() {
        this.intervalVariable = setInterval(() => {
            this.setState((prevState) => ({timer: prevState.timer += 1}))
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.intervalVariable);
    }


    render() {
        return (
            <>
                {this.state.shows && <Profile {...this.state.Person}/> }
                <Button onClick={this.toggleShows}>
                    👤 {this.state.shows ? 'Hide' : 'Show'} Profile
                </Button>
                <div style={{position: 'absolute', bottom: '0', left: '45%'}}>{this.state.timer} s since birth 👶</div>
            </>
        );
    }
}

export default ProfileButton;