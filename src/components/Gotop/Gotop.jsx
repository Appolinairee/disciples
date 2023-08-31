import './Gotop.css';
import { BsArrowUp } from 'react-icons/bs';

const Gotop = () => {
  return (
    <div className="gotop" onClick={() => window.scrollTo(0, 0)}>
        <BsArrowUp className='icon'/>
    </div>
  )
}

export default Gotop;
