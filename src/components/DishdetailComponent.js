import React from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle} from 'reactstrap';

// componentDidMount(){
//   console.log('DishDetail Component componentDidMount invoked');
// }
//
// componentDidUpdate(){
//      console.log('DishDetail Component componentDidUpdate invoked');
//   }

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

  function RenderComments({comments}){
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
      const dish = props.selectedDish ;
      console.log(dish);
      if(dish != null){
        return (
          <div className="container">
          <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments comments={dish.comments} />
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
