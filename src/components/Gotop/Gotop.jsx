import { useEffect, useState } from 'react';
import './Gotop.css';
import { BsArrowUp } from 'react-icons/bs';

const Gotop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 700)
        setVisible(true);
      else
        setVisible(false);
    })
  }, []);

  return (
      <div className="gotop" onClick={() => window.scrollTo(0, 0)} style={{ transform: `${visible ? "scale(1)": "scale(0)"}` }}>
        <BsArrowUp className='icon'/>
    </div>
  )
}

export default Gotop;
