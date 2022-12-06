import React from 'react'

const Alert = (props) => {

    const capitalize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
//to avoid cummulative layout shift(cls) set height of alert
    
    <div style={{textAlign:'center',height:"50px",width:"20%",marginTop:"70px",float:"right"}}>
      {

        // {/* props.alert if not null then execute the next */}
        props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <div>
    
            
      <strong>{capitalize(props.alert.type)}</strong> : {props.alert.message}
      {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>
        </div>
      }
    </div>
  )
}

export default Alert
