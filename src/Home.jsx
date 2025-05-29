import Header from './Header'
import Hero from './Hero'
import Feature from './Feature'
import CustomerFeedback from './CustomerFeedback'
import JoinUS from './JoinUS'
import Footer from './Footer'
const Home = () => {
  return (
   <div className='max-w-7xl m-auto'>
    <Header />
    <main>
        {/* Hero */}
        <Hero/>

    </main>
    <Footer/>
   </div>
  )
}

export default Home