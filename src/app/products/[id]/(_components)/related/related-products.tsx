import { Product } from "@/types/tyes.d"
import Image from "next/image"
import Link from "next/link"
import styles from "./related-products.module.css"



interface RelatedProductsProps {
  products: Product
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <div className={styles.relatedProducts}>
      <h2 className={styles.sectionTitle}>Related Products</h2>
      <div className={styles.productsGrid}>
        {products.reviews.map(() => (
          <Link key={products.id} href={`/products/${products.id}`} className={styles.productCard}>
            <div className={styles.imageContainer}>
              <Image
                src={products.images[0] || "/placeholder.svg"}
                alt={products.title}
                width={200}
                height={200}
                className={styles.productImage}
              />
            </div>
            <div className={styles.productInfo}>
              <h3 className={styles.productName}>{products.title}</h3>
              <p className={styles.productPrice}>{products.price}</p>
              <p className={styles.productMoq}>MOQ {products.stock}</p>
              <div className={styles.association}>
                <div className={styles.associationLogo}>{products.brand}</div>
                <span className={styles.associationName}>{products.brand}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
