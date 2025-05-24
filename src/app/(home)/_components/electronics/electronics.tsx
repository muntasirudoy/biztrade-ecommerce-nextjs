


import styles from "./electronics.module.css";
import SliderComponent from "./slider";

import { getProductsByCategory } from "@/lib/api";


export const Electronics = async () => {
    const data = await getProductsByCategory('smartphones')

    return (
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Electronics</h2>
            <div className={styles.carouselContainer}>


                <div className={styles.productsGrid}>
                    <SliderComponent products={data.products} />
                </div>


            </div>
        </section >
    )
}
