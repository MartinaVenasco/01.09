import './index.css';

const Modal = ({data, isVisibile, onModalClick}) => {
  const { title, vote_average, poster_path, overview } = data;

  return isVisibile && (
    <div className="Modal__overlay" onClick={() => onModalClick(false)}>
        <div className="Modal" >
        <img className="MainCard--img" src={`https://image.tmdb.org/t/p/w342${ poster_path }`} alt={ title }></img>
        <h2 className="Modal__header">{title}</h2>
        <p className="Modal__desc">{overview}</p>
        <p className='vote'> {vote_average}</p>
      </div>
    </div>
  )
}

export default Modal;