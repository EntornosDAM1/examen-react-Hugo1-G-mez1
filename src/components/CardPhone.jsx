import React from 'react';
import { Card,Col } from 'react-bootstrap';


class CardPhone extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }
  render() {
    if(this.props.data !=null){
      return (
       
        <Col lg={2} md={6}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>
              {console.log(this.data.phone_name)}
                Marca:
                {this.data.phone_name}
              </Card.Title>
              <Card.Text>
                Slug: {this.props.data.slug}
                <p />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      );
    }else{
      return(
          <h1>a</h1>
        ); 
    }
    
  }
}
export default CardPhone;