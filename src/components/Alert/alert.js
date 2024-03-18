import React from 'react'
import '../../assets/css/alert.css';

function Alert(props) {
  const handleClose = () => {
    props.setalert(null);
  };
  return (
    <div classname="alertdiv">
      {props.alert && (
        <div className={`alert alert-${props.alert.type}`} id="alert">
          <span>{props.alert.message}</span>
        </div>
      )}
    </div>
  )
}

export default Alert