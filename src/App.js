import "./App.css";

import ContactSec from "./component/contactSec";
import QnaSec from "./component/qnaSec";
import RecomendSec from "./component/recomendationSec";
import Footer from "./component/footer";
import Hero from "./component/hero";

function App() {
  return (
    <div className="mDiv">
      <Hero />
      <ContactSec />
      <section>
        <QnaSec />
        <RecomendSec />
      </section>
      <button>
        <a href="#contact">לחצו כאן להשארת פרטים</a>
      </button>
      <Footer />
    </div>
  );
}

export default App;
