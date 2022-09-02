import React from 'react';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './Home.css'

function Home(props) {
    return (
        <div className='home-container'>
            <Header/>
            <Profile/>
            <Footer/>
        </div>
    );
}

export default Home;









// import React from 'react'
// import Profile from './Profile/Profile'
// import Footer from './Footer/Footer'
// import './Home.css'
// export default function Home() {
//   return (
//     <div className='home-container'>
//         <Profile/>
//         <Footer/>
//     </div>
//   )
// }
