import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from  'lodash';
import Modal from 'react-responsive-modal';
class Product extends Component {
    constructor(props){
        debugger;
        super(props);
        this.state = {
            open: false,
            product:{},
            isEdit:false,
        };
    }
    onModal = () => {
            this.setState({ open: !this.state.open });
    };
    handleChange=(e)=>{
        const {product} =this.state;
        product[e.target.id]=e.target.value;
        this.setState({product});
        console.log(this.state.product);
    };
    handleSubmit=()=>{
        if(this.state.name==='' || this.state.price==='' || this.state.image==='')
        {
            this.setState({
                error:"Invalid Credentials."
            });
        }
        else
        {
            this.props.Onsubmit(this.state.product);
        }
    }
    getData=(product)=>{
        debugger
        this.setState({
            product : _.cloneDeep(product),
            isEdit:!this.state.isEdit
        },()=>{
            this.onModal();
        });
    };
    handleUpdate=()=>{
        if(this.state.name==='' || this.state.price==='' || this.state.image==='')
        {
            this.setState({
                error:"Invalid Credentials."
            });
        }
        else
        {
            this.props.updateProduct(this.state.product);
        }


    }
    // componentDidMount(){
    //     debugger;
    //     this.props.onGET();
    // }
    add = () => {

        debugger;
        this.props.onGET();
    };
    render() {
        debugger;
        const { open } = this.state;
        debugger;
        console.log("your Product",this.props.productReducer);
        debugger;
        return (
            <div>
                <button onClick={this.add} class = "btn btn-default">View Product</button>
                <button onClick={this.onModal}  class = "btn btn-default">Add Product</button>
                <h1>Product Page</h1>
                <table border="1" class="table table-hover">
                    <thead>
                    <tr>
                        <th>name</th>
                        <th>price</th>
                        <th>image</th>
                        <th>delete</th>
                        <th>update</th>
                    </tr>
                    </thead>
                {
                    (this.props.productReducer.data) &&
                    this.props.productReducer.data.map((value, index) => {
                        debugger;
                        return (
                            <tbody>
                            <tr>
                                <td>{value['name']}</td>
                                <td>{value['price']}</td>
                                <td>{value['image']}</td>
                                <td><button onClick={() => this.props.onDelete(value['id'])} className="btn btn-danger">
                                    Remove
                                </button></td>
                                <td><button  onClick={()=>{this.getData(value)}} className="btn btn-success">
                                    Edit
                                </button></td>
                            </tr>
                            </tbody>
                        )
                    })
                }
                </table>

                <Modal open={open} onClose={this.onModal}>
                    <form class = "form-horizontal" role = "form">
                        <h1>{ !this.state.isEdit ?<h5> Add New User  </h5>: <h5>Update User</h5>}</h1>
                        <span style={{color:"red"}}>{this.state.error}</span>
                        <input type = "text" class = "form-control" id ="name" placeholder = "Enter  Name" value={this.state.product.name} onChange={this.handleChange}/>
                        <input type = "text" class = "form-control" id ="price" placeholder = "Enter Price"   value={this.state.product.price}  onChange={this.handleChange}/>
                        <input type = "text" class = "form-control" id ="image" placeholder = "Enter image"   value={this.state.product.image}  onChange={this.handleChange}/>
                        {
                            !this.state.isEdit ?
                                <button type = "submit" class = "btn btn-default" onClick={this.handleSubmit}>submit</button>
                                :
                                <button type = "submit" class = "btn btn-default" onClick={this.handleUpdate}>update</button>
                        }
                    </form>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    debugger;
    return {
        productReducer: state.productReducer
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onGET: () => {
            dispatch({type: 'GETPRODUCT'})
        },
        Onsubmit : (product)=>{
            dispatch({
                type:"ADDPRODUCT",
                payload:product,
            })
        },
        onDelete :(id)=>{

            dispatch({
                type:"REMOVEPRODUCT",
                payload:id,
            })
        },
        updateProduct :(product)=>{
            dispatch({
                type:"UPDATEPRODUCT",
                payload:product,
            })
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Product)