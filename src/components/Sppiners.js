import React from "react";

function Sppiners(props){
const style_flex={
    display:"flex",
    justifyContent:"center"
}
    return(
        <div class="spinner-border text-primary " role="status" style={style_flex}>
  <span class="visually-hidden">Loading...</span>
</div>
    )
}
export default Sppiners;