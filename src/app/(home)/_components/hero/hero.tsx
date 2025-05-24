import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ShoppingBag } from "react-feather"
import styles from './hero.module.css'
export const HeroSection = () => {
    return (<>
        <div className={styles.container}>
            <div className={styles.layout}>
                <div className={styles.categoriesSidebar}>
                    <h3 className={styles.sidebarTitle}>Top Categories</h3>
                    <ul className={styles.categoryList}>
                        <li className={styles.categoryItem}>
                            <span className={styles.categoryIcon}>📱</span>
                            <span>RMG & Accessories</span>
                        </li>
                        <li className={styles.categoryItem}>
                            <span className={styles.categoryIcon}>🥾</span>
                            <span>Leather & Leather Products</span>
                        </li>
                        <li className={styles.categoryItem}>
                            <span className={styles.categoryIcon}>🧵</span>
                            <span>Jute & Jute Products</span>
                        </li>
                        <li className={styles.categoryItem}>
                            <span className={styles.categoryIcon}>🌾</span>
                            <span>Agro & Agro Based Products</span>
                        </li>
                        <li className={styles.categoryItem}>
                            <span className={styles.categoryIcon}>🏠</span>
                            <span>Home Textiles, Kitchen</span>
                        </li>
                        <li className={styles.categoryItem}>
                            <span className={styles.categoryIcon}>🧶</span>
                            <span>Handicraft & Handloom</span>
                        </li>
                        <li className={styles.categoryItem}>
                            <span className={styles.categoryIcon}>🍔</span>
                            <span>Food & Beverages</span>
                        </li>
                        <li className={styles.categoryItem}>
                            <span className={styles.categoryIcon}>🪑</span>
                            <span>Furniture and Furniture Parts</span>
                        </li>
                        <li className={styles.categoryItem}>
                            <span className={styles.categoryIcon}>🧱</span>
                            <span>Building materials & Hardware</span>
                        </li>
                        <li className={styles.categoryItem}>
                            <span className={styles.categoryIcon}>📚</span>
                            <span>Books, Stationary & Office</span>
                        </li>
                        <li className={styles.categoryItem}>
                            <span className={styles.categoryIcon}>🔌</span>
                            <span>Consumer Electronics</span>
                        </li>
                        <li className={styles.categoryItem}>
                            <span className={styles.categoryIcon}>👗</span>
                            <span>Fashion, Beauty & Personal Care</span>
                        </li>
                        <li className={styles.categoryViewAll}>
                            <Link href="#">View all categories</Link>
                        </li>
                    </ul>
                </div>


                <div className={styles.mainContent}>
                    <div className={styles.heroBanner}>

                        <div className={styles.mainContentTop}>
                            <div className={styles.heroContent}>
                                <Image src={'/hero.png'} width={460} height={430} alt="hero" />
                            </div>
                            <div className={styles.rightCards}>
                                <div className={styles.sourceCard}>
                                    <div className={styles.cardContent}>
                                        <p className={styles.cardText}>
                                            Source products
                                            <br />
                                            from trusted suppliers.
                                        </p>
                                        <button className={styles.shopButton}>SHOP</button>
                                    </div>
                                    <div className={styles.exploreLink}>
                                        <Link href="#" className={styles.sellerListLink}>
                                            Explore Seller List
                                        </Link>
                                    </div>
                                </div>

                                <div className={styles.requirementCard}>
                                    <div className={styles.cardContent}>
                                        <p className={styles.cardText}>
                                            Searching for a<br />
                                            product?
                                        </p>
                                        <div className={styles.bagIconContainer}>
                                            <ShoppingBag className={styles.bagIcon} />
                                        </div>
                                    </div>
                                    <div className={styles.postLink}>
                                        <Link href="#" className={styles.requirementLink}>
                                            Post Buy Requirement
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.mainContentBottom}>
                            <div>
                                <h3 className={styles.mainContentBottomTitle}>More Services</h3>
                            </div>
                            <div className={styles.mainContentBottomBanners}>
                                <div className={styles.mainContentBottomBanner}>
                                    <span >
                                        Buyer <br />
                                        Matchmaking
                                        <p className={styles.mainContentBottomBannerLearn}>Learn More <ArrowRight size={18} style={{ background: '#f97316', color: 'white', marginTop: '5px', borderRadius: '100%', padding: '1px' }} />
                                        </p>
                                    </span>
                                    <Image className={styles.mainContentBottomBannerIcon} src="/icons/handshake.svg" width={50} height={50} alt="icons" />
                                </div>
                                <div className={styles.mainContentBottomBanner}>
                                    <span >
                                        Become a <br />
                                        Seller
                                        <p className={styles.mainContentBottomBannerLearn}>Learn More <ArrowRight size={18} style={{ background: '#f97316', color: 'white', marginTop: '5px', borderRadius: '100%', padding: '1px' }} />
                                        </p>
                                    </span>

                                    <Image className={styles.mainContentBottomBannerIcon} src="/icons/int.svg" width={50} height={50} alt="icons" />

                                </div>

                                <div className={styles.mainContentBottomBanner}>
                                    <span >
                                        Legal <br /> Service
                                        <p className={styles.mainContentBottomBannerLearn}>Learn More <ArrowRight size={18} style={{ background: '#f97316', color: 'white', marginTop: '5px', borderRadius: '100%', padding: '1px' }} />
                                        </p>
                                    </span>

                                    <Image className={styles.mainContentBottomBannerIcon} src="/icons/wallet.svg" width={50} height={50} alt="icons" />

                                </div>
                                <div className={styles.mainContentBottomBanner}>
                                    <span >
                                        Membership <br />
                                        Plans
                                        <p className={styles.mainContentBottomBannerLearn}>Learn More <ArrowRight size={18} style={{ background: '#f97316', color: 'white', marginTop: '5px', borderRadius: '100%', padding: '1px' }} />
                                        </p>
                                    </span>
                                    <Image className={styles.mainContentBottomBannerIcon} src="/icons/server.svg" width={50} height={50} alt="icons" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>

    </>)
}