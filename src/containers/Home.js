import React, { Fragment } from 'react'
import Main from './Main'
import Links from './Links'
import WrappedLocation from './Location'

const mapStyles = [
    {
        elementType: 'geometry',
        stylers: [{color: 'white'}]
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#fad778'}]
    },
    {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#ffffff'}]
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#708090'}]
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#ffffff'}]
    },
    {
        featureType: 'poi',
        stylers: [{visibility: 'off'}]
    }
]

const Home = () => (
    <Fragment>
        <Main />
        <Links />
        <WrappedLocation
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key={process.env.REACT_APP_GOOGLE_KEY}`}
            loadingElement={<div  style={{mapStyles}}/>}
            containerElement={<div />}
            mapElement={<div />}
        />
    </Fragment>
)

export default Home