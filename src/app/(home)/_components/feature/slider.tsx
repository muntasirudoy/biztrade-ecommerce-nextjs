'use client';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "@/components/ui/card/card";
import Image from "next/image";
import styles from "./feature.module.css"
import { StarRating } from "@/components/ui/rating/rating";
import { CheckCircle } from "react-feather";

interface Seller {
    id: number
    name: string
    category: string
    logo: {
        src: string
        bgColor: string
        invert?: boolean
    }
    rating: number
    verified?: boolean
}

export default function SliderComponent({ sellers }: {
    sellers: Seller[]
}) {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,

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
                {sellers.map((seller) => (
                    <Card key={seller.id} className={styles.sellerCard}>
                        {seller.verified && (
                            <Card.Badge className={styles.badge}>
                                <CheckCircle className={styles.verifiedIcon} />
                                <span>Verified</span>
                            </Card.Badge>
                        )}
                        <Card.Header className={styles.sellerCardHeader}>
                            <div className={styles.logoContainer} style={{ backgroundColor: seller.logo.bgColor }}>
                                <Image
                                    src={seller.logo.src || "/placeholder.svg"}
                                    alt={`${seller.name} logo`}
                                    width={48}
                                    height={48}
                                    className={seller.logo.invert ? styles.invertedLogo : ""}
                                />
                            </div>
                        </Card.Header>
                        <Card.Body className={styles.sellerCardBody}>
                            <h3 className={styles.sellerName}>{seller.name}</h3>
                            <p className={styles.sellerCategory}>{seller.category}</p>
                            <div className={styles.ratingContainer}>
                                <StarRating rating={seller.rating} />
                            </div>
                        </Card.Body>
                    </Card>
                ))}

            </Slider>
        </div>
    );
}
