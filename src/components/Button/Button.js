const Button = (props) => {

    return <button onClick={props.callback} style={{backgroundColor:'red' , color:'black'}}>{props.label}</button>

}
 
export default Button