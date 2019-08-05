import React from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

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
