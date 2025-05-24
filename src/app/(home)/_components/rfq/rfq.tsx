import type React from "react"
import Image from "next/image"
import { Play, Search } from "lucide-react"
import styles from "./rfq.module.css"

interface Statistic {
    value: string
    label: string
}

interface Testimonial {
    quote: string
    author: {
        name: string
        business: string
        image: string
    }
}

interface RfqSectionProps {
    statistics: Statistic[]
    testimonial: Testimonial
}

export const Rfq: React.FC<RfqSectionProps> = ({ statistics, testimonial }) => {
    return (
        <section className={styles.container}>
            <div className={styles.whatIsRfq}>
                <h2 className={styles.sectionTitle}>What is RFQ</h2>

                <div className={styles.contentWrapper}>
                    <div className={styles.leftContent}>
                        <div style={{ display: 'flex', gap: '50px' }}>
                            <div className={styles.videoPlaceholder}>
                                <button className={styles.playButton} aria-label="Play video">
                                    <Play className={styles.playIcon} />
                                </button>
                            </div>

                            <p className={styles.description}>
                                Request for Quotation is a free and easy solution for buyers who are seeking quality quotes. By sending
                                out a simple request, you will receive multiple quotes from qualified suppliers
                            </p>
                        </div>

                        <div className={styles.statisticsContainer}>
                            {statistics.map((stat, index) => (
                                <div key={index} className={styles.statistic}>
                                    <div className={styles.statisticValue}>{stat.value}</div>
                                    <div className={styles.statisticLabel}>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.testimonialContainer}>
                        <div className={styles.testimonial}>
                            <div className={styles.testimonialHeader}>
                                <div className={styles.testimonialImage}>
                                    <Image
                                        src={testimonial.author.image || "/faq/c.png"}
                                        alt={testimonial.author.name}
                                        width={50}
                                        height={50}
                                        className={styles.authorImage}
                                    />
                                </div>
                                <div className={styles.testimonialAuthor}>
                                    <h3 className={styles.authorTitle}>Buyer from the U.S</h3>
                                    <p className={styles.authorBusiness}>{testimonial.author.business}</p>
                                </div>
                            </div>
                            <blockquote className={styles.testimonialQuote}>{testimonial.quote}</blockquote>
                            <div className={styles.testimonialDots}>
                                <span className={styles.dot}></span>
                                <span className={styles.dot}></span>
                                <span className={styles.dot}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.postRequirement}>
                <div className={styles.postRequirementContent}>
                    <div className={styles.illustrationContainer}>
                        <Image
                            src="/faq/3d.svg"
                            alt="Person using laptop"
                            width={400}
                            height={300}
                            className={styles.illustration}
                        />
                    </div>

                    <div className={styles.formContainer}>
                        <h2 className={styles.formTitle}>Post Buy Requirement</h2>
                        <p className={styles.formSubtitle}>Get the Best Deals and Exclusive Offers with Biztrade</p>

                        <div className={styles.progressBar}>
                            <div className={styles.progressFill}></div>
                        </div>

                        <form className={styles.requirementForm}>
                            <div className={styles.formGroup}>
                                <label htmlFor="requirement" className={styles.formLabel}>
                                    Tell us about your requirement*
                                </label>
                                <div className={styles.searchInputContainer}>
                                    <Search className={styles.searchIcon} />
                                    <input
                                        type="text"
                                        id="requirement"
                                        className={styles.searchInput}
                                        placeholder="Enter the product you are looking for"
                                    />
                                </div>
                            </div>

                            <button type="button" className={styles.continueButton}>
                                Continue
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
