import React from 'react'

import './home.scss'

import HomeBanner from '../../components/HomeBanner/HomeBanner'
import ListItems from '../../components/ListItems/ListItems'
// import Loader from '../../components/Loader/Loader'

const Home = () => {

    //const [loader, setLoader] = useState(true)

    return (
        //loader ? <Loader/> :
        <section className='home-container margin-t'>
            <header>
                <h1>shophender</h1>
            </header>
            
            <ListItems filterSex = 'men' />

            <HomeBanner  
                bannerText = 'hombres' 
                bannerClass='banner-men' 
                bannerPosition='bannerRight'
                bannerGender = 'men'
            />

            <ListItems filterSex = 'women' />

            <HomeBanner  
                bannerText = 'mujeres' 
                bannerClass='banner-women' 
                bannerPosition='bannerLeft'
                bannerGender = 'women'
            />

            <ListItems filterSex = {null} />

            <HomeBanner  
                bannerText = 'ver.todo' 
                bannerClass='banner-all' 
                bannerPosition='bannerRight'
                bannerGender = 'all'
            />
        </section>
    )
}

export default Home