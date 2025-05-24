


import { getProductsByCategory } from "@/lib/api";
import styles from "./accessories.module.css";
import SliderComponent from "./slider";



export const Accessories = async () => {

    const data = await getProductsByCategory("mobile-accessories")

    return (
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Accessories</h2>
            <div className={styles.carouselContainer}>
                {/* <button className={styles.carouselButton} aria-label="Previous">
                    <ChevronLeft className={styles.carouselIcon} />
                </button> */}

                <div className={styles.productsGrid}>
                    <SliderComponent products={data.products} />
                </div>

                {/* <button className={styles.carouselButton} aria-label="Next">
                    <ChevronRight className={styles.carouselIcon} />
                </button> */}
            </div>
        </section >
    )
}
