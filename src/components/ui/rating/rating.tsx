import type React from "react"
import styles from "./rating.module.css"

interface StarRatingProps {
    rating: number
    maxRating?: number
}

export const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 5 }) => {
    return (
        <div className={styles.starRating}>
            {Array.from({ length: maxRating }).map((_, i) => (
                <span key={i} className={`${styles.star} ${i < rating ? styles.filled : ""}`}>
                    ★
                </span>
            ))}
        </div>
    )
}
