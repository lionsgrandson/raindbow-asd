import "./App.css";

import ContactSec from "./component/contactSec";
import QnaSec from "./component/qnaSec";
import Footer from "./component/footer";
import Hero from "./component/hero";
import RecBox from "./component/recSec";
function App() {
  return (
    <div className="mDiv">
      <Hero />
      <ContactSec />
      <section>
        <QnaSec />
        <RecBox />
        {/* <RecomendSec /> */}
      </section>
      <section className="FirstBox">
        <button className="btContact">
          <a href="#contact">לחצו כאן להשארת פרטים</a>
        </button>
        <Footer />
      </section>
    </div>
  );
}

export default App;
