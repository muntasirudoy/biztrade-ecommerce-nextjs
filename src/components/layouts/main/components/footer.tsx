import type React from "react"
import Link from "next/link"
import { DollarSign, Truck, CreditCard, Shield, Users, Facebook, Instagram } from "lucide-react"
import styles from "./footer.module.css"

interface ValueProposition {
  icon: React.ReactNode
  title: string
  description: string
}

interface FooterLink {
  label: string
  href: string
}

interface FooterColumnProps {
  title: string
  links: FooterLink[]
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => (
  <div className={styles.footerColumn}>
    <h3 className={styles.columnTitle}>{title}</h3>
    <ul className={styles.linkList}>
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.href} className={styles.footerLink}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

interface SocialLinksProps {
  title: string
}

const SocialLinks: React.FC<SocialLinksProps> = ({ title }) => (
  <div className={styles.footerColumn}>
    <h3 className={styles.columnTitle}>{title}</h3>
    <div className={styles.socialIcons}>
      <Link href="#" className={styles.socialIcon} aria-label="Facebook">
        <Facebook />
      </Link>
      <Link href="#" className={styles.socialIcon} aria-label="WhatsApp">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z" />
          <path d="M20.52 3.449C12.831-3.984.521 1.75.521 12.115c0 2.213.549 4.388 1.592 6.292l-1.674 6.08 6.252-1.629c1.84.991 3.92 1.511 6.012 1.512h.006c10.413 0 15.996-12.349 8.583-20.021zM12.034 21.034c-2.353-.001-4.666-.637-6.674-1.835l-.48-.285-4.969 1.301 1.331-4.863-.314-.512a11.642 11.642 0 01-1.788-6.219c-.001-6.453 5.255-11.707 11.71-11.707 3.126 0 6.061 1.219 8.264 3.43 2.203 2.202 3.416 5.137 3.416 8.261-.002 6.453-5.257 11.709-11.708 11.709z" />
        </svg>
      </Link>
      <Link href="#" className={styles.socialIcon} aria-label="Instagram">
        <Instagram />
      </Link>
    </div>
  </div>
)

export const Footer: React.FC = () => {
  const valueProps: ValueProposition[] = [
    {
      icon: <DollarSign />,
      title: "Great Value",
      description: "We offer competitive prices on over 100 million items",
    },
    {
      icon: <Truck />,
      title: "Worldwide shopping",
      description: "We ship to over 200 countries and regions, and our site comes in 12 languages",
    },
    {
      icon: <CreditCard />,
      title: "Safe payment",
      description: "Pay with the world's most popular and secure payment methods",
    },
    {
      icon: <Shield />,
      title: "Shop with confidence",
      description: "Our Buyer Protection policy covers your entire purchase journey",
    },
    {
      icon: <Users />,
      title: "Help center",
      description: "Round-the-clock assistance for a smooth shopping experience",
    },
  ]

  const aboutLinks: FooterLink[] = [
    { label: "About Biztrade", href: "#" },
    { label: "Biztradebd.com Blog", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Condition", href: "#" },
    { label: "Policies & Rules", href: "#" },
    { label: "Open a Case", href: "#" },
  ]

  const sourceLinks: FooterLink[] = [
    { label: "Product Categories", href: "#" },
    { label: "Request for Quotation", href: "#" },
    { label: "Buyer Guide", href: "#" },
    { label: "Global Business Directory", href: "#" },
    { label: "Search Product or Suppliers", href: "#" },
  ]

  const sellLinks: FooterLink[] = [
    { label: "Create Seller Page", href: "#" },
    { label: "Premium Member Pricing", href: "#" },
    { label: "Display your Product", href: "#" },
    { label: "Seller Guide", href: "#" },
    { label: "Learning Center", href: "#" },
  ]

  const serviceLinks: FooterLink[] = [
    { label: "Buyer Matchmaking", href: "#" },
    { label: "Export Market Ready", href: "#" },
    { label: "Legal & Licensing", href: "#" },
    { label: "Digital Marketing", href: "#" },
    { label: "Web Design and Development", href: "#" },
    { label: "Graphic Designing", href: "#" },
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.valuePropositions}>
        {valueProps.map((prop, index) => (
          <div key={index} className={styles.valueProposition}>
            <div className={styles.iconContainer}>{prop.icon}</div>
            <h3 className={styles.propTitle}>{prop.title}</h3>
            <p className={styles.propDescription}>{prop.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.divider}></div>

      <div className={styles.footerLinks}>
        <SocialLinks title="Stay Connected" />
        <FooterColumn title="About US" links={aboutLinks} />
        <FooterColumn title="Source on Biztrade" links={sourceLinks} />
        <FooterColumn title="Sell on Biztrade" links={sellLinks} />
        <FooterColumn title="Services" links={serviceLinks} />
      </div>

      <div className={styles.divider}></div>

      <div className={styles.footerBottom}>
        <p className={styles.tagline}>One Stop Solution For All Business Needs</p>
        <p className={styles.copyright}>© 2023 Biztrade.com. All rights reserved.</p>
      </div>
    </footer>
  )
}
