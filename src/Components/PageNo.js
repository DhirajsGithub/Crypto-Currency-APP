import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem'

function PageNo() {

    const pageItems = ()=>{
        for(let i=2; i<=13172; i++){
            return <Pagination.Item value={i} >{i}</Pagination.Item>
        }
    }
    const handleOnClick = (event)=>{
        console.log(event)
    }
    
  return (
    <Pagination onClick={handleOnClick}>
      <Pagination.First/>
      <Pagination.Prev/>
      
      <Pagination.Item value="3" >{1}</Pagination.Item>
      <Pagination.Ellipsis />

      
      {pageItems}

      <Pagination.Ellipsis />
      <Pagination.Item value="13173" >{13173}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last/>
    </Pagination>
  );
}

export default PageNo;