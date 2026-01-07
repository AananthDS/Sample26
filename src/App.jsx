import React, {useEffect} from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import MetricsSection from './components/MetricsSection'
import WorksSection from './components/WorksSection'
import Footer from './components/Footer'
import { initializeAnimations, addHoverAnimations, initScrollAnimations } from './utils/animations'

export default function App(){
  useEffect(()=>{
    // Initialize all animations after DOM is ready
    const timer = setTimeout(()=>{
      initializeAnimations()
      addHoverAnimations()
      initScrollAnimations()
    }, 100)
    
    return ()=> clearTimeout(timer)
  }, [])

  return (
    <>
      <Navbar />
      <HeroSection />
      <MetricsSection />
      <WorksSection />
      <Footer />
    </>
  )
}
