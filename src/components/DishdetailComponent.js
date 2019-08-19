import React, {Component} from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle,Breadcrumb,BreadcrumbItem,Button,Modal,ModalBody,ModalHeader,Row,Col,Label} from 'reactstrap';
import {Control,LocalForm,Errors} from 'react-redux-form';
import {Link} from 'react-router-dom';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len)
const minLength = (len) => (val) =>  (val) && (val.length >= len)


class CommentForm extends Component
{
  constructor(props){
    super(props);
    this.state = {
      isModalOpen:false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
        isModalOpen:!(this.state.isModalOpen)
    });
  }

  handleSubmit=(values)=>{
    this.toggleModal();
     console.log("Current State is :" + JSON.stringify(values));
      alert("Current State is:" + JSON.stringify(values));
  };

  render() {
    return(
      <div className="container">
      <div className="ml-0">
      <Button outline onClick={this.toggleModal}>
      <span class="fa fa-pencil fa-lg"></span> Submit Comment
      </Button>
      <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
      <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
      <ModalBody>
      <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
      <Row className="form-group">
      <Label htmlFor="rating" md={12}> Rating </Label>
      <Col md={12}>
      <Control.select model=".rating" className="form-control">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      </Control.select>
      </Col>
      </Row>
      <Row className="form-group">
      <Label htmlFor="author" md={12}> Your Name </Label>
      <Col md={12}>
      <Control.text model=".author" className="form-control" id="author" name="author"
           placeholder="Your Name"  validators={{
             required, minLength: minLength(3) ,maxLength: maxLength(15)
           }} />
           <Errors
              className="text-danger" model=".author"
              show="touched"
              messages={{
                required: ' Required ',
                minLength: 'Must be greater than 2 characters',
                maxLength: 'Must be 15 characters or less'
              }} />
      </Col>
      </Row>
      <Row className="form-group">
      <Label htmlFor="comment" md={12}>Comment</Label>
      <Col md={12}>
      <Control.textarea model=".comment" id="comment" name="comment" rows="6" className="form-control"/>
      </Col>
      </Row>
      <Row className="form-group">
      <Col md={{size:12}}>
      <Button type="submit" color="primary">Submit</Button>
      </Col>
      </Row>
      </LocalForm>
      </ ModalBody>
      </Modal>
      </div>
      </div>
// <Form onSubmit={this.handleSubmit}>
      // <FormGroup>
      // <Label htmlFor="username">Username</Label>
      // <Input type="text" id="username" name="username"
      //    innerRef={(input) => this.username = input} />
      // </FormGroup>
      // </Form>
    );
  }

}

  function RenderDish({dish}) {
     if(dish!= null){
       return(
   <Card key={dish.id}>
   <CardImg width="100%" src={dish.image} alt={dish.name}/>
      <CardBody>
      <CardTitle>{dish.name}</CardTitle>
      <CardText> {dish.description}</CardText>
      </CardBody>
   </Card>
       );
     }
     else {
        return(
          <div></div>
        );
     }
    }

  function RenderComments({comments,dishId}){
     if(comments != null){
      const commentsList = comments.map((comm) =>{
          return(
            <div  key={comm.id}>
            <ul className="list-unstyled" >
            <li>
            <p>{comm.comment}</p>
            <p> --{comm.author} , {new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comm.date)))}</p>
            </li>
            </ul>
            </div>
          );
        })
        return (
          <div>
          <h4> Comments : </h4>
          {commentsList}
          <CommentForm dishId={dishId}/>
          </div>
        );
    }
      else {
         return(
           <div></div>
         );
         // console.log("Error");
      }
  }

    const DishDetail=(props)=> {
       console.log('DishDetail Component render invoked');
      //const dish = props.selectedDish ;
      //console.log(props);
      if(props.dish != null){
        return (
          <div className="container">
          <div className="row">
           <Breadcrumb>
           <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
           <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
           <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
           </Breadcrumb>
           <div className="col-12">
           <h3>{props.dish.name}</h3>
           <hr/>
           </div>
          </div>
            <div className="row">
            <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
            <RenderComments comments={props.comments} />
            </div>
            </div>
          </div>
        )
      }
       else{
         return(
           <div></div>
         )
       }
    };

export default DishDetail ;
