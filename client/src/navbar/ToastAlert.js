import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';


function ToastAlert(props) {
  
const {toastmessage} = props;
  

  return (
    <ToastContainer>
        <Toast {...props} delay={4000} autohide position="middle-center">
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Project Tracker</strong>            
          </Toast.Header>
          <Toast.Body>{toastmessage}</Toast.Body>
        </Toast>
        </ToastContainer>
  );
}

export default ToastAlert;