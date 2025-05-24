
import { getProductsByCategory } from "@/lib/api";
import styles from "./gadgets.module.css";
import SliderComponent from "./slider";

export const Gadgets = async () => {
    const data = await getProductsByCategory("womens-watches")
    return (
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Gadgets</h2>
            <div className={styles.carouselContainer}>


                <div className={styles.productsGrid}>
                    <SliderComponent products={data.products} />
                </div>

            </div>
        </section >
    )
}
