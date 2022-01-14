import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <>
      <div className='container'>
        <div className='marquee'>
          <h2 className='logo'>Good Night Out</h2>
          <p className='subtitle'>Presents</p>
          <h1 className='title'>Space Camp</h1>
        </div>
        <div className='details'>
          <div className='description'>
            An extraterrestrial party in Brooklyn, NY
          </div>
          <div className=''>🗓&ensp;February 26th, 2022</div>
          <a className='link' target='_blank'>
            📍&ensp;Eris
          </a>
          <div>⏱&ensp;10pm - late</div>
          <div className='button'>get tickets 👽</div>
        </div>
      </div>

      <div className='solar-syst'>
        <div className='sun'></div>
        <div className='mercury'></div>
        <div className='venus'></div>
        <div className='earth'></div>
        <div className='mars'></div>
        <div className='jupiter'></div>
        <div className='saturn'></div>
        <div className='uranus'></div>
        <div className='neptune'></div>
        <div className='pluto'></div>
        <div className='asteroids-belt'></div>
      </div>
    </>
  )
}
