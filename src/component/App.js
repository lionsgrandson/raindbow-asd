import './App.css'

import ContactSec from './component/contactSec'
import QnaSec from './component/qnaSec'
import Footer from './component/footer'
import Hero from './component/hero'
import ContactBtn from './component/contactBtn'
import RecSec from './component/recSec'
function App() {
  return (
    <div className='mDiv'>
      <Hero />
      <ContactSec />
      <section>
        <QnaSec />
      </section>
      <section>
        <RecSec />
      </section>
      <ContactBtn />
      <Footer />
    </div>
  )
}

export default App
