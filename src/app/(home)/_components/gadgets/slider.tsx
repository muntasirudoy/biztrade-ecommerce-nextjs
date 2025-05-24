'use client';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "@/components/ui/card/card";
import Image from "next/image";
import styles from ".//gadgets.module.css"
import { Product } from "@/types/tyes.d";

export default function SliderComponent({ products }: {
    products: Product[]
}) {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,

        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,

                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };










    return (
        <div style={{ maxWidth: '100%', overflow: 'hidden' }}>

            <Slider {...settings} className="sliders">
                {products.map((product) => (
                    <Card key={product.id} className={styles.productCard}>
                        <Card.Header className={styles.productCardHeader}>
                            <Image
                                src={product.images[0] || "/placeholder.svg"}
                                alt={product.title}
                                width={200}
                                height={200}
                                className={styles.productImage}
                            />
                        </Card.Header>
                        <Card.Body className={styles.productCardBody}>
                            <h3 className={styles.productName}>{product.title}</h3>
                            <p className={styles.productPrice}>{product.price}</p>
                            <p className={styles.productMoq}>MOQ {product.stock}</p>
                        </Card.Body>
                        <Card.Footer className={styles.productCardFooter}>
                            <div className={styles.associationContainer}>
                                <div className={styles.associationLogo}>
                                    <span>A</span>
                                </div>
                                <span className={styles.associationName}>{product.brand}</span>
                            </div>
                            <button className={styles.inquiryButton}>Send Inquiry</button>
                        </Card.Footer>
                    </Card>
                ))}

            </Slider>
        </div>
    );
}
