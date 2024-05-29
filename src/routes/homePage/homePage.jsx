import SearchBar from '../../components/searchBar/SearchBar.jsx'
import './homePage.scss'

function HomePage() {
    return (
        <div className='homePage'>
            <div className='textContainer'>
                <div className='wrapper'>
                    <h1 className='title'>Buy Or Sell Your Car - Online Marketplace</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <SearchBar/>
                    <div className='boxes'>
                        <div className='box'>
                            <h1>10+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className='box'>
                            <h1>2000+</h1>
                            <h2>Deals per Month</h2>
                        </div>
                        <div className='box'>
                            <h1>5000+</h1>
                            <h2>Vehicles Ready</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className='imgContainer'>
                <img src='/bg.png' />
            </div>
        </div>
    )
}

export default HomePage