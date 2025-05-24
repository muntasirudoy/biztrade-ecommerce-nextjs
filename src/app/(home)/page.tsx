
import { MainLayout } from "@/components/layouts/main/main-layout";
import { B2BMatchmakingIcon, DigitalMarketingIcon, LicensingIcon, WebDesignIcon } from "@/components/ui/icons/service/service-icon";
import { Accessories } from "./_components/accessories/accessories";
import { BusinessAdvisory } from "./_components/business/business";
import { Electronics } from "./_components/electronics/electronics";
import { FeaturedSellers } from "./_components/feature/feature";
import { Gadgets } from "./_components/gadgets/gadgets";
import { HeroSection } from "./_components/hero/hero";
import { Rfq } from "./_components/rfq/rfq";
interface ServiceCardProps {
  title?: string
  description?: string
  icon?: React.ReactNode
  actions?: {
    label: string
    variant: "primary" | "secondary" | "tertiary"
  }[]
}
export default async function Home() {

  const sellers = [
    {
      id: 1,
      name: "Adidas",
      category: "Leather & Leather Products",
      logo: {
        src: "/brand/b1.svg",
        bgColor: "#000000",
        invert: true,
      },
      rating: 4,
      verified: true,
    },
    {
      id: 2,
      name: "La Chemise Lacoste",
      category: "RMG & Accessories",
      logo: {
        src: "/brand/b2.svg",
        bgColor: "#0f5132",
        invert: true,
      },
      rating: 5,
    },
    {
      id: 3,
      name: "King T-Shirt",
      category: "RMG & Accessories",
      logo: {
        src: "/brand/b3.svg",
        bgColor: "#fde047",
      },
      rating: 4,
    },
    {
      id: 4,
      name: "Info BD",
      category: "ICT, Computer & Electronics",
      logo: {
        src: "/brand/b4.svg",
        bgColor: "#2563eb",
        invert: true,
      },
      rating: 5,
      verified: true,
    },
    {
      id: 5,
      name: "Digi",
      category: "ICT, Computer & Electronics",
      logo: {
        src: "/brand/b5.svg",
        bgColor: "#1e1b4b",
        invert: true,
      },
      rating: 4,
    },
    {
      id: 1,
      name: "Adidas",
      category: "Leather & Leather Products",
      logo: {
        src: "/brand/b1.svg",
        bgColor: "#000000",
        invert: true,
      },
      rating: 4,
      verified: true,
    },
    {
      id: 3,
      name: "King T-Shirt",
      category: "RMG & Accessories",
      logo: {
        src: "/brand/b3.svg",
        bgColor: "#fde047",
      },
      rating: 4,
    },
  ]
  const services: ServiceCardProps[] = [
    {
      title: "B2B Matchmaking",
      description:
        "We won't leave you hanging after your website is complete. We can take an in-depth look at your online marketing opportunities including SEO, Google Ads and inbound marketing techniques",
      icon: <B2BMatchmakingIcon />,
      actions: [
        { label: "Web Design", variant: "secondary" },
        { label: "Web Development", variant: "tertiary" },
      ],
    },
    {
      title: "Licensing",
      description:
        "We won't leave you hanging after your website is complete. We can take an in-depth look at your online marketing opportunities including SEO, Google Ads and inbound marketing techniques",
      icon: <LicensingIcon />,
      actions: [
        { label: "SEO Package", variant: "secondary" },
        { label: "Digital Marketing", variant: "primary" },
      ],
    },
    {
      title: "Digital Marketing",
      description:
        "We won't leave you hanging after your website is complete. We can take an in-depth look at your online marketing opportunities including SEO, Google Ads and inbound marketing techniques",
      icon: <DigitalMarketingIcon />,
      actions: [
        { label: "SEO Package", variant: "secondary" },
        { label: "Digital Marketing", variant: "primary" },
      ],
    },
    {
      title: "Web Design",
      description:
        "We won't leave you hanging after your website is complete. We can take an in-depth look at your online marketing opportunities including SEO, Google Ads and inbound marketing techniques",
      icon: <WebDesignIcon />,
      actions: [
        { label: "Trade License", variant: "secondary" },
        { label: "Export License", variant: "primary" },
      ],
    },
  ]
  const rfqStatistics = [
    { value: "2,701,000+", label: "RFQs posted" },
    { value: "163,000+", label: "Active suppliers" },
    { value: "< 22h", label: "Average response time" },
    { value: "7602", label: "Industries covered" },
  ]

  const rfqTestimonial = {
    quote: "With RFQ I connected with almost 100 factories in an instant. Vendor on Biztrade reply quickly",
    author: {
      name: "Buyer from the U.S",
      business: "Hardware, Computer and Phone Accessories Business",
      image: "/faq/c.png",
    },
  }
  return (
    <MainLayout>
      <HeroSection />
      <div className="container">
        <FeaturedSellers sellers={sellers} />
        <Electronics />
        <Gadgets />
        <Accessories />
        <BusinessAdvisory services={services} />
        <Rfq statistics={rfqStatistics} testimonial={rfqTestimonial} />
      </div>
    </MainLayout>
  );
}
