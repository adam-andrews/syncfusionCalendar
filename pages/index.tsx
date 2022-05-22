import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { CalendarComponent } from '@syncfusion/ej2-react-calendars'
const Home: NextPage = () => {
  return (
    <div>
      <CalendarComponent></CalendarComponent>
    </div>
  )
}

export default Home
 