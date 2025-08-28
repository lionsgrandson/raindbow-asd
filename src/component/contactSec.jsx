import TextField from '@mui/material/TextField'
import { MdEmail } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import '../App.css'
import './contactSec.css'
import { FaLocationDot } from 'react-icons/fa6'
import sivanHeadShot from '../img/sivanHeadShot.png.png'
function ContactSec() {
  return (
    <section id='contact' className='FirstBox'>
      <h2 className='h1Con'>יצירת קשר</h2>
      <div className='contactContent'>
        <form method='POST' className='ConForm'>
          <input
            type='text'
            placeholder='שם'
            id='name'
            autoComplete='name'
            className='textField'
            required
          />
          <input
            type='phone'
            autoComplete='phone'
            id='phone'
            placeholder='טלפון'
            className='textField'
            required
          />
          <input
            type='email'
            autoComplete='email'
            id='email'
            placeholder='מייל'
            className='textField'
            required
          />
          <textarea
            type='text'
            placeholder='הודעה'
            className='textArea'
            required
          />
        </form>
        <div className='midContactSec'>
          <img
            className='sivanHeadshotContact'
            src={sivanHeadShot}
            alt='headshot of website owner'
          />
          <button
            type='submit'
            onClick={(e) => {
              e.preventDefault()
              console.log('btn clicked')
            }}
            className='submitBTN'
          >
            שלח
          </button>
        </div>

        <section className='conDit'>
          <div>
            <p c>קריית אונו והסביבה</p>
            <FaLocationDot />
          </div>
          <div>
            <a href='tel:+972546495902'>054-649-5902</a>
            <FaPhoneAlt />
          </div>
          <div>
            <a href='mail:LEVANONSKI@GMAIL.COM'>levanonski@gmail.com</a>
            <MdEmail />
          </div>
        </section>
      </div>
    </section>
  )
}
export default ContactSec
