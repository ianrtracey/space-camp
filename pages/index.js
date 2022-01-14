import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container">
    <h1 className='title'>Space Camp</h1>
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
</div>
  )
}
