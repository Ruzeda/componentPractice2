import React { Component } from 'react';
import ProfileCard from './UserProfileCard';

class ProfileCard extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userImage: '',
            userBio: ''
        }
    }

    updateProfile = (event) => {
        this.setState({
            userName: event.target.value,
            userImage: event.target.value,
            userBio: event.target.value
        })
    }

    render() {
        const { userName, userImage, userBio } = this.state;

        return (
            <div className='user-profile-card'>
                <div className='profile-image'>
                    <img src={userImage} alt='User' />
                </div>
                <div className='profile-info'>
                    <h2>{userName}</h2>
                    <p>{userBio}</p>
            </div>
            <div className='profile-edit'>
                <input type='text' placeholder='User Name' value={userName} onChange={(event) => this.setState({ userName: event.target.value})} />
                <input type='text' placeholder='Image URL' value={userImage} onChange={(event) => this.setState({ userImage: event.target.value })} />
                <textarea placeholder='User Bio' value={userBio} onChange={(event) => this.setState({ userBio: event.target.value })} />
                <button onClick={this.updateProfile}>Update Profile</button>
            </div>
        </div>
        );
    }
}

export default ProfileCard;