import './Home.css'
import ObraList from './ObraList'
import Header from './Header'


const Home = () => {
    return (
    <div className="Home">
        <Header/>
        <div className="Home-container">
            <ObraList/>
        </div>
    </div>
    )
}


export default Home;