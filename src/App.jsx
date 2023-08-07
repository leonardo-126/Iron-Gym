import { Header } from './components/header/header'
import './App.sass'
import { MainBgImg } from './components/mainBgImg/mainBgImg'
import { WhyChoseUs } from './components/WhyShoseUS/WhyChoseUs'
import { Experience } from './components/experience/experience'
import { CTA } from './components/startGym/cta'
import { Footer } from './components/footer/footer'
import { Trainers } from './components/trainers/trainer'
import { Testimonials } from './components/Testimonials/Testimonials'


function App() {
  return (
    <>
      <Header/>
      <MainBgImg/>
      <WhyChoseUs/>
      <Experience/>
      <Trainers/>
      <Testimonials/>
      <CTA/>
      <Footer/>
    </>
  )
}

export default App
