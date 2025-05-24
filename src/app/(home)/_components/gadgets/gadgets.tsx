
import { ChevronLeft, ChevronRight } from "lucide-react";
import type React from "react";
import styles from "./gadgets.module.css";
import SliderComponent from "./slider";
import { getProductsByCategory } from "@/lib/api";

export const Gadgets = async () => {
    const data = await getProductsByCategory("womens-watches")
    return (
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Gadgets</h2>
            <div className={styles.carouselContainer}>
                <button className={styles.carouselButton} aria-label="Previous">
                    <ChevronLeft className={styles.carouselIcon} />
                </button>

                <div className={styles.productsGrid}>
                    <SliderComponent products={data.products} />
                </div>

                <button className={styles.carouselButton} aria-label="Next">
                    <ChevronRight className={styles.carouselIcon} />
                </button>
            </div>
        </section >
    )
}
