const profileDummy =  {
    firstName: 'Cute', 
    lastName: 'Koala', 
    handle: 'cutekoala',
    profilePicture: 'https://i.ibb.co/C0Rfsd7/kk.jpg', 	
    bannerPicture: 'https://i.ibb.co/Jxb45x8/koala-banner.jpg',
    bio: 'Leader of the space force, and owner of Cute Koala Planet.',
    location: 'Boston, MA',
    dateOfBirth: '7/7/1777',	
    dateJoined: '4/2022',
    followingCount: 10000,	
    followersCount: 9998,
    _id: "koala1"
  }

const profileReducer = (state = profileDummy, action) =>{
    switch (action.type) {
        case 'edit-profile':
            const splitName = action.name.split(' ')
            const fname = splitName[0]
            const lname = splitName[1]
            return {...state, bio: action.bio, firstName: fname, lastName: lname}
        default:
            return(state);
    }
    
};

export default profileReducer;