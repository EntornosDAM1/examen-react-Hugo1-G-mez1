import React  from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

const Brands = [
  {
    label: "Apple", 
   
  },{
    label: "LG", 
    
  },
  {
    label: "Samsung", 
  }
];

class ListaDesplegable extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <Select options={Brands} />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
  
}
 export default ListaDesplegable;