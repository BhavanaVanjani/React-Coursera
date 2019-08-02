import React,{Component} from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle} from 'reactstrap';

class DishDetail extends Component {
   renderDish=(dish) => {
     if(dish!= null){
       return(
   <Card>
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

    renderComments=(comments) => {
      if(comments != null){
      const commentsList = comments.map((comm) =>{
          return(
            <div key={comm.id}  className="col-12">
            <ul className="list-unstyled">
            <li >
            <p>{comm.comment}</p>
            <p> --{comm.author},{comm.date}</p>
            </li>
            </ul>
            </div>
          );
        })
        return (
          <div>
          <h4> Comments : </h4>
          {commentsList}
          </div>
        );
    }
      else {
         return(
           <div></div>
         );
         console.log("Error");
      }
  }

    render(){
      const dish = this.props.selectedDish ;
      if(dish != null){
        return (
          <div className="container">
          <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(dish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            {this.renderComments(dish.comments)}
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


}

export default DishDetail ;
