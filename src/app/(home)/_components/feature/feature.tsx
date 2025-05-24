import { ChevronLeft, ChevronRight } from "lucide-react"
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
                <button className={styles.carouselButton} aria-label="Previous">
                    <ChevronLeft className={styles.carouselIcon} />
                </button>

                <div className={styles.carouselTrack}>
                    <SliderComponent sellers={sellers} />
                </div>

                <button className={styles.carouselButton} aria-label="Next">
                    <ChevronRight className={styles.carouselIcon} />
                </button>
            </div>
        </section>
    )
}
