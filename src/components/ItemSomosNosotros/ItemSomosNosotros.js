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
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 "
                    src="./asset/SomosNosotros/P2.jpg?text=Second slide&bg=282c34"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 "
                    src="./asset/SomosNosotros/P3.jpg?text=Second slide&bg=282c34"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 img-fluid shadow-4"
                    src="./asset/SomosNosotros/P4.jpg?text=Second slide&bg=282c34"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
        </Carousel>
        <div className="vista vistaCel">
            <Card className="vistaItem2 vistaItem" >
                <Card.Img variant="top" src="./asset/SomosNosotros/P5.jpg" />
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className="vistaItem2 vistaItem ">
                <Card.Img variant="top" src="./asset/SomosNosotros/P6.jpg" />
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className="vistaItem2 vistaItem ">
                <Card.Img variant="top" src="./asset/SomosNosotros/P7.jpg" />
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>
          </div>
        </>
    )
}

export default ItemSomosNosotros