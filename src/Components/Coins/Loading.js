import Spinner from 'react-bootstrap/Spinner';

function Loading() {
  return (
    // no variant for dark mode
    <div style={{ position: 'absolute', left:'50%'}}>

   
    <Spinner animation="border" variant="success" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
  );
}

export default Loading