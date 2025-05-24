'use client'

import Link from "next/link"
import styles from "./header.module.css"

import { useState } from "react"
import Image from "next/image"
export const Header = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }
    return <>
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.topNav}>
                    <div className={styles.topNavLinks}>
                        <div className={styles.dropdownContainer}>
                            <button className={styles.dropdownButton}>
                                Sell on Biztrade <span className={styles.chevron}>▼</span>
                            </button>
                        </div>
                        <div className={styles.dropdownContainer}>
                            <button className={styles.dropdownButton}>
                                Help <span className={styles.chevron}>▼</span>
                            </button>
                        </div>
                        <span className={styles.devider}></span>
                        <Link href="#" className={styles.navLink}>
                            About Us
                        </Link>
                        <span className={styles.devider}></span>
                        <Link href="#" className={styles.navLink}>
                            Blog
                        </Link>
                        <span className={styles.devider}></span>
                        <Link href="#" className={styles.navLink}>
                            Sign In
                        </Link>
                        <span className={styles.devider}></span>
                        <div className={styles.dropdownContainer}>
                            <button className={styles.dropdownButton}>
                                Register <span className={styles.chevron}>▼</span>
                            </button>
                        </div>
                        <span className={styles.devider}></span>
                        <Link href="#" className={styles.navLink}>
                            <span className={styles.userIcon}>👤</span> Account
                        </Link>
                    </div>
                </div>

                <div className={styles.mainNav}>

                    <div className={styles.mainNavContainer}>
                        <button className={styles.mobileMenuButton} onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
                            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerLineOpen1 : ""}`}></span>
                            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerLineOpen2 : ""}`}></span>
                            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerLineOpen3 : ""}`}></span>
                        </button>

                        <Link href="/" className={styles.logo}>
                            <Image
                                src="/logo.svg"
                                width={173}
                                height={40}
                                alt='logo'
                            />
                        </Link>
                        <div className={styles.midContainer}>
                            <nav className={styles.mainTabs}>
                                <Link href="#" className={styles.activeTab}>
                                    Products
                                </Link>
                                <Link href="#" className={styles.tab}>
                                    Category
                                </Link>
                                <Link href="#" className={styles.tab}>
                                    Events
                                </Link>
                            </nav>
                            <div className={styles.searchContainer}>
                                <div className={styles.searchInputContainer}>
                                    <input
                                        type="text"
                                        placeholder="search for product category or service"
                                        className={styles.searchInput}
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                                <button className={styles.searchButton}>Search</button>
                            </div>
                            <div className={styles.quickCategories}>
                                <div className={styles.categoryLinks}>
                                    <Link href="#" className={styles.categoryLink}>
                                        shoe
                                    </Link>
                                    <Link href="#" className={styles.categoryLink}>
                                        toys
                                    </Link>
                                    <Link href="#" className={styles.categoryLink}>
                                        Fish
                                    </Link>
                                    <Link href="#" className={styles.categoryLink}>
                                        wooden furniture
                                    </Link>
                                    <Link href="#" className={styles.categoryLink}>
                                        plastic
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className={styles.secondaryNav}>
                            <div className={styles.dropdownContainer}>
                                <button className={styles.navDropdown}>
                                    Buyer <span className={styles.chevron}>▼</span>
                                </button>
                            </div>
                            <div className={styles.dropdownContainer}>
                                <button className={styles.navDropdown}>
                                    Seller <span className={styles.chevron}>▼</span>
                                </button>
                            </div>
                            <div className={styles.dropdownContainer}>
                                <button className={styles.navDropdown}>
                                    Advisory <span className={styles.chevron}>▼</span>
                                </button>
                            </div>
                            <div className={styles.dropdownContainer}>
                                <button className={styles.navDropdown}>
                                    Events <span className={styles.chevron}>▼</span>
                                </button>
                            </div>
                        </div>
                    </div>


                </div>

                {isMobileMenuOpen && (
                    <>
                        <div className={styles.mobileMenuOverlay} onClick={toggleMobileMenu}></div>
                        <div className={styles.mobileMenu}>
                            <div className={styles.mobileMenuContent}>
                                {/* Mobile main navigation */}
                                <div className={styles.mobileMainNav}>
                                    <Link href="#" className={styles.mobileNavLink} onClick={toggleMobileMenu}>
                                        Products
                                    </Link>
                                    <Link href="#" className={styles.mobileNavLink} onClick={toggleMobileMenu}>
                                        Category
                                    </Link>
                                    <Link href="#" className={styles.mobileNavLink} onClick={toggleMobileMenu}>
                                        Events
                                    </Link>
                                </div>

                                {/* Mobile secondary navigation */}
                                <div className={styles.mobileSecondaryNav}>
                                    <button className={styles.mobileNavDropdown}>
                                        Buyer <span className={styles.chevron}>▼</span>
                                    </button>
                                    <button className={styles.mobileNavDropdown}>
                                        Seller <span className={styles.chevron}>▼</span>
                                    </button>
                                    <button className={styles.mobileNavDropdown}>
                                        Advisory <span className={styles.chevron}>▼</span>
                                    </button>
                                    <button className={styles.mobileNavDropdown}>
                                        Events <span className={styles.chevron}>▼</span>
                                    </button>
                                </div>

                                {/* Mobile top navigation */}
                                <div className={styles.mobileTopNav}>
                                    <Link href="#" className={styles.mobileNavLink} onClick={toggleMobileMenu}>
                                        Sell on Biztrade
                                    </Link>
                                    <Link href="#" className={styles.mobileNavLink} onClick={toggleMobileMenu}>
                                        Help
                                    </Link>
                                    <Link href="#" className={styles.mobileNavLink} onClick={toggleMobileMenu}>
                                        About Us
                                    </Link>
                                    <Link href="#" className={styles.mobileNavLink} onClick={toggleMobileMenu}>
                                        Blog
                                    </Link>
                                    <Link href="#" className={styles.mobileNavLink} onClick={toggleMobileMenu}>
                                        Sign In
                                    </Link>
                                    <Link href="#" className={styles.mobileNavLink} onClick={toggleMobileMenu}>
                                        Register
                                    </Link>
                                    <Link href="#" className={styles.mobileNavLink} onClick={toggleMobileMenu}>
                                        <span className={styles.userIcon}>👤</span> Account
                                    </Link>
                                </div>

                                {/* Mobile quick categories */}
                                <div className={styles.mobileCategoryLinks}>
                                    <h4 className={styles.mobileCategoryTitle}>Quick Categories</h4>
                                    <Link href="#" className={styles.mobileCategoryLink} onClick={toggleMobileMenu}>
                                        shoe
                                    </Link>
                                    <Link href="#" className={styles.mobileCategoryLink} onClick={toggleMobileMenu}>
                                        toys
                                    </Link>
                                    <Link href="#" className={styles.mobileCategoryLink} onClick={toggleMobileMenu}>
                                        Fish
                                    </Link>
                                    <Link href="#" className={styles.mobileCategoryLink} onClick={toggleMobileMenu}>
                                        wooden furniture
                                    </Link>
                                    <Link href="#" className={styles.mobileCategoryLink} onClick={toggleMobileMenu}>
                                        plastic
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </header>
    </>
}