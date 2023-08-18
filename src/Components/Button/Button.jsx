
import './Button.css'

const Button = ({icons,text,isOutline,...rest}) => {
  return (
    <button {...rest} className = {isOutline? 'Outline' : 'btn' }>
        {icons}
        {text}  
    </button>
  )
}

export default Button
