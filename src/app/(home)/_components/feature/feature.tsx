import type React from "react"

import styles from "./feature.module.css"
import SliderComponent from "./slider"

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

interface FeaturedSellersProps {
    sellers: Seller[]
}

export const FeaturedSellers: React.FC<FeaturedSellersProps> = ({ sellers }) => {
    return (
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Featured Seller</h2>
            <div className={styles.carouselContainer}>


                <div className={styles.carouselTrack}>
                    <SliderComponent sellers={sellers} />
                </div>


            </div>
        </section>
    )
}
