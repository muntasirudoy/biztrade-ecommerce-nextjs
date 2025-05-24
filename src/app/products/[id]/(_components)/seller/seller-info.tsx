import Image from "next/image"
import { CheckCircle, Clock, MessageSquare } from "lucide-react"
import styles from "./seller-info.module.css"

interface SellerInfoProps {
  seller: {
    name: string
    rating: number
    responseRate: string
    responseTime: string
    verified: boolean
    country: string
    yearEstablished: number
    mainProducts: string[]
    logo: string
  }
}

export function SellerInfo({ seller }: SellerInfoProps) {
  return (
    <div className={styles.sellerCard}>
      <div className={styles.sellerHeader}>
        <div className={styles.sellerLogo}>
          <Image src={seller.logo || "/placeholder.svg"} alt={seller.name} width={80} height={80} />
        </div>
        <div className={styles.sellerMeta}>
          <h3 className={styles.sellerName}>
            {seller.name}
            {seller.verified && <CheckCircle className={styles.verifiedIcon} />}
          </h3>
          <div className={styles.sellerLocation}>{seller.country}</div>
        </div>
      </div>

      <div className={styles.sellerStats}>
        <div className={styles.statItem}>
          <div className={styles.statLabel}>Seller Rating</div>
          <div className={styles.statValue}>{seller.rating}/5</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statLabel}>Response Rate</div>
          <div className={styles.statValue}>{seller.responseRate}</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statLabel}>Response Time</div>
          <div className={styles.statValue}>{seller.responseTime}</div>
        </div>
      </div>

      <div className={styles.sellerDetails}>
        <div className={styles.detailItem}>
          <div className={styles.detailLabel}>Year Established</div>
          <div className={styles.detailValue}>{seller.yearEstablished}</div>
        </div>
        <div className={styles.detailItem}>
          <div className={styles.detailLabel}>Main Products</div>
          <div className={styles.productTags}>
            {seller.mainProducts.map((product, index) => (
              <span key={index} className={styles.productTag}>
                {product}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.sellerActions}>
        <button className={styles.contactButton}>
          <MessageSquare size={16} />
          Contact Supplier
        </button>
        <button className={styles.visitButton}>Visit Store</button>
      </div>

      <div className={styles.responseInfo}>
        <Clock size={16} className={styles.responseIcon} />
        <span>Responds within {seller.responseTime}</span>
      </div>
    </div>
  )
}
