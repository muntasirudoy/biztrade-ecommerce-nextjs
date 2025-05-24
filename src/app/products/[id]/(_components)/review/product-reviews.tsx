"use client"

import { Product } from "@/types/tyes.d"
import { Star, ThumbsUp } from "lucide-react"
import { useState } from "react"
import styles from "./product-reviews.module.css"



interface ProductReviewsProps {

  averageRating: number
  totalReviews: number
  products: Product
}

export function ProductReviews({ products, averageRating, totalReviews }: ProductReviewsProps) {
  const [filter, setFilter] = useState<number | null>(null)
  const [helpfulClicked, setHelpfulClicked] = useState<Record<string, boolean>>({})

  const filteredReviews = filter ? products.reviews.filter((review) => review.rating === filter) : products.reviews

  const ratingCounts = [5, 4, 3, 2, 1].map((rating) => {
    const count = products.reviews.filter((review) => review.rating === rating).length
    const percentage = totalReviews > 0 ? Math.round((count / totalReviews) * 100) : 0
    return { rating, count, percentage }
  })

  const handleHelpfulClick = (reviewId: string) => {
    setHelpfulClicked((prev) => ({ ...prev, [reviewId]: true }))
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
  }

  return (
    <div className={styles.reviewsContainer}>
      <h2 className={styles.sectionTitle}>Customer Reviews</h2>

      <div className={styles.reviewsSummary}>
        <div className={styles.overallRating}>
          <div className={styles.ratingNumber}>{averageRating.toFixed(1)}</div>
          <div className={styles.ratingStars}>
            {products.reviews.map((_, i) => (
              <Star
                key={i}
                className={`${styles.star} ${i < Math.floor(averageRating) ? styles.filledStar : ""}`}
                fill={i < Math.floor(averageRating) ? "currentColor" : "none"}
              />
            ))}
            <span className={styles.reviewCount}>Based on {totalReviews} reviews</span>
          </div>
        </div>

        <div className={styles.ratingBreakdown}>
          {ratingCounts.map((item) => (
            <button
              key={item.rating}
              className={`${styles.ratingBar} ${filter === item.rating ? styles.activeFilter : ""}`}
              onClick={() => setFilter(filter === item.rating ? null : item.rating)}
            >
              <div className={styles.ratingLabel}>{item.rating} stars</div>
              <div className={styles.progressBarContainer}>
                <div className={styles.progressBar} style={{ width: `${item.percentage}%` }}></div>
              </div>
              <div className={styles.ratingCount}>{item.count}</div>
            </button>
          ))}
        </div>
      </div>

      {filter && (
        <div className={styles.activeFilters}>
          <div className={styles.filterBadge}>
            {filter} Stars
            <button className={styles.clearFilter} onClick={() => setFilter(null)}>
              ×
            </button>
          </div>
        </div>
      )}

      <div className={styles.reviewsList}>
        {filteredReviews.length > 0 ? (
          filteredReviews.map((review, i) => (
            <div key={i} className={styles.reviewCard}>
              <div className={styles.reviewHeader}>
                <div className={styles.reviewAuthor}>{review.reviewerName}</div>
                <div className={styles.reviewDate}>{formatDate(review.date)}</div>
              </div>

              <div className={styles.reviewRating}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`${styles.reviewStar} ${i < review.rating ? styles.filledStar : ""}`}
                    fill={i < review.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>

              <h3 className={styles.reviewTitle}>{review.reviewerName}</h3>
              <p className={styles.reviewContent}>{review.comment}</p>

              {/* {review.images.length > 0 && (
                <div className={styles.reviewImages}>
                  {review.images.map((image, index) => (
                    <div key={index} className={styles.reviewImageContainer}>
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Review image ${index + 1}`}
                        width={100}
                        height={100}
                      />
                    </div>
                  ))}
                </div>
              )} */}

              <button
                className={`${styles.helpfulButton} ${helpfulClicked[review.date] ? styles.helpfulClicked : ""}`}
                onClick={() => handleHelpfulClick(review.date)}
                disabled={helpfulClicked[review.date]}
              >
                <ThumbsUp size={16} />
                Helpful ({helpfulClicked[review.date] ? review.date + 1 : review.date})
              </button>
            </div>
          ))
        ) : (
          <div className={styles.noReviews}>No reviews match your filter. Try another filter or view all reviews.</div>
        )}
      </div>
    </div>
  )
}
