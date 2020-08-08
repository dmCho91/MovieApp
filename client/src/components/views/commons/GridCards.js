import React from 'react'
import { Col } from 'antd'

function GridCards(props) {

    if(props.landingPage){
        return (
            // 한 Col 24 ===> lg 4Col,  md 3Col, xs 1Col
            <Col lg={6} md={8} xs={24}>  
                <div style={{position: 'relative'}}>
                    <a href = {`/movie/${props.movieId}`}>
                        <img style={{width:'100%', height:'320px'}} src = {props.image} alt={props.movieName}/>
                    </a>
                </div>
            </Col>
        )
    }else{
        return (
            <Col lg={6} md={8} xs={24}>  
                <div style={{position: 'relative'}}>
                    <img style={{width:'100%', height:'320px'}} src = {props.image} alt={props.characterName}/>
                </div>
            </Col>  
        )
    }
}

export default GridCards
