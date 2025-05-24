

import { ChevronLeft, ChevronRight } from "lucide-react";
import type React from "react";

import styles from "./accessories.module.css";
import SliderComponent from "./slider";
import { getProductsByCategory } from "@/lib/api";



export const Accessories = async () => {

    const data = await getProductsByCategory("mobile-accessories")

    return (
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Accessories</h2>
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
