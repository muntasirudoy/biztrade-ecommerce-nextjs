"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, Truck, Shield, Clock, Check, ChevronDown, ChevronUp, MinusCircle, PlusCircle } from "lucide-react"
import styles from "./product-detail.module.css"
import { Product } from "@/types/tyes.d"



export function ProductDetail({ product }: {
  product: Product
}) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(product.stock)
  const [expandedSections, setExpandedSections] = useState({
    description: true,
    specifications: true,
    shipping: false,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrementQuantity = () => {
    if (quantity > product.stock) {
      setQuantity((prev) => prev - 1)
    }
  }

  return (
    <div className={styles.productDetail}>
      <div className={styles.productGrid}>
        <div className={styles.imageGallery}>
          <div className={styles.mainImage}>
            <Image
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.title}
              width={600}
              height={600}
              className={styles.image}
            />
          </div>
          <div className={styles.thumbnails}>
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`${styles.thumbnailButton} ${selectedImage === index ? styles.activeThumbnail : ""}`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.title} thumbnail ${index + 1}`}
                  width={80}
                  height={80}
                />
              </button>
            ))}
          </div>
        </div>

        <div className={styles.productInfo}>
          <h1 className={styles.productName}>{product.title}</h1>

          <div className={styles.productMeta}>
            <div className={styles.ratings}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`${styles.star} ${i < Math.floor(product.rating) ? styles.filledStar : ""}`}
                    fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <span className={styles.ratingText}>
                {product.rating} ({product.reviews.length} reviews)
              </span>
            </div>

            <div className={styles.stockStatus}>
              {product.stock ? (
                <span className={styles.inStock}>
                  <Check size={16} /> In Stock
                </span>
              ) : (
                <span className={styles.outOfStock}>Out of Stock</span>
              )}
            </div>
          </div>

          <div className={styles.pricing}>
            <div className={styles.priceContainer}>
              <span className={styles.price}>
                TK.
                {product.price}
              </span>
              {product.discountPercentage && (
                <>
                  <span className={styles.originalPrice}>
                    Tk.
                    {product.price}
                  </span>
                  <span className={styles.discount}>{product.discountPercentage} OFF</span>
                </>
              )}
            </div>
            <div className={styles.moq}>MOQ: {product.stock} pieces</div>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.quantitySection}>
            <div className={styles.quantityLabel}>Quantity:</div>
            <div className={styles.quantityControls}>
              <button className={styles.quantityButton} onClick={decrementQuantity} disabled={quantity <= product.stock}>
                <MinusCircle size={20} />
              </button>
              <input
                type="number"
                className={styles.quantityInput}
                value={quantity}
                min={product.stock}
                onChange={(e) => {
                  const value = Number.parseInt(e.target.value)
                  if (!isNaN(value) && value >= product.stock) {
                    setQuantity(value)
                  }
                }}
              />
              <button className={styles.quantityButton} onClick={incrementQuantity}>
                <PlusCircle size={20} />
              </button>
            </div>
          </div>

          {product.description && (
            <div className={styles.customizationSection}>
              <h3 className={styles.sectionTitle}>Customization Available</h3>
              <div className={styles.customizationOptions}>
                {/* {product.description .options.map((option, index) => (
                  <span key={index} className={styles.customizationOption}>
                    {option}
                  </span>
                ))} */}
              </div>
            </div>
          )}

          <div className={styles.actionButtons}>
            <button className={styles.inquiryButton}>Send Inquiry</button>
            <button className={styles.contactButton}>Contact Supplier</button>
          </div>

          <div className={styles.shippingInfo}>
            <div className={styles.shippingDetail}>
              <Truck size={18} />
              <span>Ships from {product.shippingInformation}</span>
            </div>
            <div className={styles.shippingDetail}>
              <Clock size={18} />
              <span>Lead Time: {'10.AM'}</span>
            </div>
            <div className={styles.shippingDetail}>
              <Shield size={18} />
              <span>Buyer Protection</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.productDetails}>
        <div className={styles.detailSection}>
          <button
            className={styles.sectionHeader}
            onClick={() => toggleSection("description")}
            aria-expanded={expandedSections.description}
          >
            <h2 className={styles.sectionTitle}>Product Description</h2>
            {expandedSections.description ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          {expandedSections.description && (
            <div className={styles.sectionContent}>
              <p className={styles.description}>{product.description}</p>
              <h3 className={styles.featuresTitle}>Key Features</h3>
              <ul className={styles.featuresList}>
                {/* {product.features.map((feature, index) => (
                  <li key={index} className={styles.featureItem}>
                    <Check size={16} className={styles.checkIcon} />
                    {feature}
                  </li>
                ))} */}
              </ul>
            </div>
          )}
        </div>

        <div className={styles.detailSection}>
          <button
            className={styles.sectionHeader}
            onClick={() => toggleSection("specifications")}
            aria-expanded={expandedSections.specifications}
          >
            <h2 className={styles.sectionTitle}>Specifications</h2>
            {expandedSections.specifications ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          {expandedSections.specifications && (
            <div className={styles.sectionContent}>
              <table className={styles.specificationsTable}>
                <tbody>
                  {/* {product.specifications.map((spec, index) => (
                    <tr key={index} className={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                      <td className={styles.specName}>{spec.name}</td>
                      <td className={styles.specValue}>{spec.value}</td>
                    </tr>
                  ))} */}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className={styles.detailSection}>
          <button
            className={styles.sectionHeader}
            onClick={() => toggleSection("shipping")}
            aria-expanded={expandedSections.shipping}
          >
            <h2 className={styles.sectionTitle}>Shipping & Delivery</h2>
            {expandedSections.shipping ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          {expandedSections.shipping && (
            <div className={styles.sectionContent}>
              <div className={styles.shippingDetails}>
                <div className={styles.shippingMethod}>
                  <h3 className={styles.shippingMethodTitle}>Shipping Methods</h3>
                  <ul className={styles.methodsList}>
                    {/* {product.shipping.methods.map((method, index) => (
                      <li key={index} className={styles.methodItem}>
                        <Truck size={16} className={styles.methodIcon} />
                        {method}
                      </li>
                    ))} */}
                  </ul>
                </div>
                <div className={styles.shippingInfo}>
                  {/* <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Lead Time:</span>
                    <span className={styles.infoValue}>{product.shipping.leadTime}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Ships From:</span>
                    <span className={styles.infoValue}>{product.shipping.shipsFrom}</span>
                  </div> */}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
