import './Navbar.css'
const Navbar = () => {
    return (
        <nav className="Navbar">
            <h1>Ecommerce</h1>

            <div>
                <button className='btn btn-primary'>PLCs</button>
                <button className='btn btn-primary'>HMI</button>
                <button className='btn btn-primary'>Sensores</button>

            </div>


        </nav>
    )
}

export default Navbar