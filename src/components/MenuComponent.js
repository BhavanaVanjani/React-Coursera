import React from 'react';
import {Card,CardImg,CardImgOverlay,CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
  // constructor(props){
  //    super(props);
  //    console.log('Menu component constructor is invoked');
  // }
  //
  // componentDidMount(){
  //   console.log('Menu Component componentDidMount invoked');
  // }
      //console.log('Menu component render is invoked');
      function RenderMenuItem({ dish , onclick }){
        return(
          <Card onclick>
          <Link to={`/menu/${dish.id}`}>
            <CardImg width="100%" src={dish.image} alt={dish.name}/>
            <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
            </Link>
          </Card>
        );
      }

      const Menu = (props) => {
        const menu = props.dishes.map((dish) => {
          return(
             <div  key={dish.id} className="col-12 col-md-5 m-1">
              <RenderMenuItem dish={dish} onclick={props.onClick} />
             </div>
          );
        });
       return(
          <div className="container">
          <div className="row">
           <Breadcrumb>
           <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
           <BreadcrumbItem active>Menu</BreadcrumbItem>
           </Breadcrumb>
           <div className="col-12">
           <h3>Menu</h3>
           <hr/>
           </div>
          </div>
           <div className="row">
              {menu}
           </div>
         </div>
       );
      }


export default Menu;
