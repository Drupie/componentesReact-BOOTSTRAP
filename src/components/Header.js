import React from "react";
function Header(props){

const style_image={
    width:"200px",
    height:"200px"
}
const style_text={
    display:"flex",

}
return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#">{props.brand}</a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">{props.item1}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">{props.item2}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="">{props.item3}</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">{props.btn}</button>
        </form>
      </div>
    </div>
  </nav>
)



}
export default Header;