import React from 'react'
import Header from '../Header'
import WidgetWrapper from '../WidgetWrapper'
import ChartWrapper from '../ChartWrapper'
import Footer from '../Footer'

const Home = ({isDarkMode, toggleDarkMode}) => {
  return (
    <>
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
        <WidgetWrapper />
        <ChartWrapper />
        <Footer />
    </>
  )
}

export default Home