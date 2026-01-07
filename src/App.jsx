import React, {useEffect, useState} from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import MetricsSection from './components/MetricsSection'
import WorksSection from './components/WorksSection'
import Footer from './components/Footer'
import Nontech from './components/Nontech'
import { initializeAnimations, addHoverAnimations, initScrollAnimations } from './utils/animations'

export default function App(){
  const [selectedWork, setSelectedWork] = useState(null)

  useEffect(()=>{
    // Initialize all animations after DOM is ready
    const timer = setTimeout(()=>{
      initializeAnimations()
      addHoverAnimations()
      initScrollAnimations()
    }, 100)
    
    return ()=> clearTimeout(timer)
  }, [])

  if(selectedWork){
    return (
      <div style={{background: '#000', color: '#fff', overflow: selectedWork ? 'hidden' : 'auto'}}>
        <WorkDetail workId={selectedWork} onClose={()=> setSelectedWork(null)} />
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <HeroSection />
      <MetricsSection />
      <WorksSection onWorkClick={setSelectedWork} />
      <Footer />
    </>
  )
}
