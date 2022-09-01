import MainCard from '../MainCard';
import './index.css';

const TopRatedList = ({ cardData, modalVisibility }) => {

  return (
    <div className="TopRatedList">
    
      {
       cardData.map((cardData, ii) => <MainCard  modalVisibility={modalVisibility} cardData={ cardData } value={{className:"TopRated__card"}} key={ii}/>)
      }
    </div>
  )
}

export default TopRatedList;