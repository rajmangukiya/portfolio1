import Carousel from 'react-bootstrap/Carousel';

function CarouselComponent({ items }) {
    return (
        <Carousel>
            {
                [...Array(items.count).keys()].map((item, i) => {
                    return (
                        <Carousel.Item key={i}>
                            <img
                                className="carousel-image"
                                src={require(`../images/${items.src}/${i + 1}.jpg`)}
                                alt="First slide"
                            />
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>
    );
}

export default CarouselComponent;