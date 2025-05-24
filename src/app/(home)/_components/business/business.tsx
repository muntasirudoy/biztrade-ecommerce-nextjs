import type React from "react"
import styles from "./business.module.css"
import { Card } from "@/components/ui/card/card"

interface ServiceCardProps {
    title?: string
    description?: string
    icon?: React.ReactNode
    actions?: {
        label: string
        variant: "primary" | "secondary" | "tertiary"
    }[]
}

interface BusinessAdvisoryProps {
    services: ServiceCardProps[]
}

export const BusinessAdvisory: React.FC<BusinessAdvisoryProps> = ({ services }) => {
    return (
        <section className={styles.section}>
            <div className={styles.titleContainer}>
                <h2 className={styles.sectionTitle}>Business Advisory</h2>
            </div>

            <div className={styles.servicesGrid}>
                {services.map((service, index) => (
                    <Card key={index} className={styles.serviceCard}>
                        <Card.Body className={styles.serviceCardBody}>
                            <div className={styles.iconContainer}>{service.icon}</div>
                            <h3 className={styles.serviceTitle}>{service.title}</h3>
                            <p className={styles.serviceDescription}>{service.description}</p>

                            <div className={styles.actionsContainer}>
                                {service.actions?.map((action, actionIndex) => (
                                    <button key={actionIndex} className={`${styles.actionButton} ${styles[action.variant]}`}>
                                        {action.label}
                                    </button>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </section>
    )
}
