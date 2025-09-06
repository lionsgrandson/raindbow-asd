import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import logoLongTxt from '../img/Logo_with_NO_shadow_text.png'
import './footer.css'
export default function Footer() {
  return (
    <div className='footerSec '>
      <img
        src={logoLongTxt}
        className='footerImg'
        alt='on the left the slogan on the right a puzzle piece with rainbow colors'
      />
      <div className='ContactFooter'>
        <div>
          <a href='tel:+972546495902'>054-649-5902</a>
          {'  '} <FaPhoneAlt />
        </div>
        <div>
          <a href='mailto:LEVANONSKI@GMAIL.COM'>levanonski@gmail.com</a>
          {'  '}
          <MdEmail />
        </div>
      </div>
    </div>
  )
}
// TODO pricacy policy etc and plugin
