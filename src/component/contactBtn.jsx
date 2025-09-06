import '../App.css'
import './contactBtn.css'

function ContactBtn({ text = 'לחצו כאן להשארת פרטים', href = '#contact' }) {
  return (
    <a href={href} className='contactBtn'>
      <p className='btContact'>{text}</p>
    </a>
  )
}

export default ContactBtn
