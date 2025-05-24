import React from "react"
import styles from "./card.module.css"
import Link from "next/link"

interface CardProps {
    className?: string
    children: React.ReactNode
    href?: string
}

interface CardComposition {
    Header: React.FC<CardHeaderProps>
    Body: React.FC<CardBodyProps>
    Footer: React.FC<CardFooterProps>
    Badge: React.FC<CardBadgeProps>
}

const Card: React.FC<CardProps> & CardComposition = ({ className, children, href = '#' }) => {
    return <Link href={href}>
        <div className={`${styles.card} ${className || ""}`}>{children}</div>
    </Link>
}

interface CardHeaderProps {
    className?: string
    children: React.ReactNode
}

const CardHeader: React.FC<CardHeaderProps> = ({ className, children }) => {
    return <div className={`${styles.cardHeader} ${className || ""}`}>{children}</div>
}

interface CardBodyProps {
    className?: string
    children: React.ReactNode
}

const CardBody: React.FC<CardBodyProps> = ({ className, children }) => {
    return <div className={`${styles.cardBody} ${className || ""}`}>{children}</div>
}

interface CardFooterProps {
    className?: string
    children: React.ReactNode
}

const CardFooter: React.FC<CardFooterProps> = ({ className, children }) => {
    return <div className={`${styles.cardFooter} ${className || ""}`}>{children}</div>
}

interface CardBadgeProps {
    className?: string
    children: React.ReactNode
}

const CardBadge: React.FC<CardBadgeProps> = ({ className, children }) => {
    return <div className={`${styles.cardBadge} ${className || ""}`}>{children}</div>
}

Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter
Card.Badge = CardBadge

export { Card }
