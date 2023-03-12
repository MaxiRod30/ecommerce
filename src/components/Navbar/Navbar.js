import './Navbar.css'
import Button from '../Button/Button'
//import logo from './asset/nombrefoto'
const Navbar = () => {
    return (
        <nav className="Navbar">
            <h1>Ecommerce</h1>

            <div>
                {/* <button className='btn btn-primary'>PLCs</button>
                <button className='btn btn-primary'>HMI</button>
                <button className='btn btn-primary'>Sensores</button> */}
                <Button label="PLCs" callback={() => console.log("PLCs")}/>
                <Button label="HMI"/>
                <Button label="Sensores"/>
            </div> 


        </nav>
    )
}

export default Navbar