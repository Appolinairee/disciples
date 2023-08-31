import React from 'react';
import './TransitionEffect.css';
import {motion} from 'framer-motion';

const TransitionEffect = () => {
  return (
    <>
        <motion.div className='transEffect transEffect2'
        initial={{ x: '0%' }}
        animate={{ x: '-100%' }}
        exit={{ x: '100%' }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        />

        <motion.div className='transEffect transEffect3'
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
        exit={{ x: '100%' }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        />
    </>
  )
}

export default TransitionEffect;
