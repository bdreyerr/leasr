import React from 'react';
// import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import MapImage from '../Images/map.png';

class Map extends React.Component {
    render() {
        return (
            // <Jumbotron>
                <Image src={MapImage} fluid />
            // </Jumbotron>
        );
    }
}

export default Map;