import React from 'react';
import {Container,Form, Button} from 'react-bootstrap';
import ListaDesplegable from './ListaDesplegable';
import {Row,Col,Table} from 'react-bootstrap'
import CardPhone from './CardPhone'

class Formulario extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      brand: '',
      tableData:[],
      selectItem: '',
      phone_name:'',
      slug:'',
      pasaValoresCard:[]
    };
    this.inputBrand=React.createRef();
  }


  async componentDidMount(){
    const response =await fetch('https://api-mobilespecs.azharimm.site/v2/top-by-fans');
    const responseData = await response.json();
    this.setState({tableData : responseData.data.phones,
                  selectedItem:responseData[0]
                  });
  }
  eventoclick(item) {
    this.setState({
      phone_name: item.phone_name,
      slug: item.slug,
      
    });
  }

  

  render(){
    return(
          <Container>
            <h1>Buscar</h1>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Marca</Form.Label>
                <Form.Control  type="text" placeholder="Introduce la marca" ref={this.inputBrand} />
              </Form.Group>

              <ListaDesplegable />
              <Button variant="primary" type="button" onClick={this.login}>
                Buscar
              </Button>
            </Form>
            <Row>
            <Col lg={10} md={6}>
              <Table responsive striped>
                <thead>
                  <tr>
                    <th>Marca</th>
                    <th>slug</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.map((item) => {
                    return (
                      <tr  onClick={() => this.eventoclick(item)}>
                        <td>{item.phone_name}</td>
                        <td>{item.slug}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            {console.log(this.state.phone_name)}
            {console.log(this.state.slug)}
            <Col lg={2} md={6}>
                  <CardPhone data={this.state.phone_name} />
            </Col>
           
          </Row>
          </Container>

    );
  }
}
export default  Formulario; 