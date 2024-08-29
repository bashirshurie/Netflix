import HomeHero from "../components/HomeHero"
import Faqs from "../components/faqs/Faqs"
import Features from "../components/feature/Features"
import Footer from "../components/footer/Footer"

const Home = () => {
  return (
    <div className="relative">
      <HomeHero />
      <Features />
      <Faqs />
      <Footer />
    </div>
  )
}

export default Home