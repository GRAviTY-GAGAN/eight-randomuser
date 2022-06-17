import React from "react";
import {Card, CardBody, CardTitle, CardText} from "reactstrap";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";



const MyCard = ({details}) =>{
    return(
        <Card>
            <CardBody className="text-center">
                <img height='150' width='150' 
                className='rounded-circle img-thumbnail border-danger'
                src={details.picture?.large}
                />
                <CardTitle className="text-primary" >
                    <h1>
                        <span className="pe-2">{details.name?.title}</span>
                        <span>{details.name?.first}</span>
                        <span>{details.name?.last}</span>
                    </h1>
                </CardTitle>
                <CardText>
                    <h6 className="mb-0">
                        <FaEnvelope />
                        {details.email}
                    </h6>
                    <p className="mb-0"><FaPhone />{details.phone}</p>
                    <FaMapMarkedAlt />
                    {details.location?.city}
                    <p>Age:{details.dob?.age}</p>                    
                </CardText>
            </CardBody>
        </Card>
    )
}

export default MyCard;