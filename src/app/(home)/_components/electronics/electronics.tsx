

import { ChevronLeft, ChevronRight } from "lucide-react";
import type React from "react";

import styles from "./electronics.module.css";
import SliderComponent from "./slider";

import { getProductsByCategory } from "@/lib/api";





export const Electronics = async () => {
    const data = await getProductsByCategory('smartphones')

    return (
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Electronics</h2>
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
