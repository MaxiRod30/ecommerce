import "./ItemSomosNosotros.css"
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel';

const ItemSomosNosotros = () => {
    return(
      <>
        <Carousel >
                <Carousel.Item>
                    <img
                    className="d-block w-100 "
                    src="./asset/SomosNosotros/P1.webp?text=Second slide&bg=282c34"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 "
                    src="./asset/SomosNosotros/P2.jpg?text=Second slide&bg=282c34"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 "
                    src="./asset/SomosNosotros/P3.jpg?text=Second slide&bg=282c34"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 img-fluid shadow-4"
                    src="./asset/SomosNosotros/P4.jpg?text=Second slide&bg=282c34"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
        </Carousel>
        <div className="vista vistaCel">
            <Card className="vistaItem2 vistaItem" >
                <Card.Img variant="top" src="./asset/SomosNosotros/P5.jpg" />
                <Card.Body>
                <Card.Title>Lo mejor</Card.Title>
                <Card.Text>
                    Varias variades de ropa para que usted se pruebe.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className="vistaItem2 vistaItem ">
                <Card.Img variant="top" src="./asset/SomosNosotros/P6.jpg" />
                <Card.Body>
                <Card.Title>Variedades de camisetas</Card.Title>
                <Card.Text>
                    Varias camisetas con diseños personalidos
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className="vistaItem2 vistaItem ">
                <Card.Img variant="top" src="./asset/SomosNosotros/P7.jpg" />
                <Card.Body>
                <Card.Title>Venga a nuestro local</Card.Title>
                <Card.Text>
                    Elija y pruébese todo lo que quiera.
                </Card.Text>
                </Card.Body>
            </Card>
          </div>
        </>
    )
}

export default ItemSomosNosotros