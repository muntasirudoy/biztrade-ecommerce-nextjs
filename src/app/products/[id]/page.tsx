import { MainLayout } from "@/components/layouts/main/main-layout"
import { Breadcrumb } from "@/components/ui/breadcrumb/breadcrumb"
import { getProductDetailsById } from "@/lib/api"
import { ProductDetail } from "./(_components)/details/product-detail"
import { RelatedProducts } from "./(_components)/related/related-products"
import { ProductReviews } from "./(_components)/review/product-reviews"
import { SellerInfo } from "./(_components)/seller/seller-info"


interface ProductPageProps {
    params: {
        id: string
    }
}



export default async function ProductDetails({ params }: ProductPageProps) {
    const param = await params.id
    const data = await getProductDetailsById(Number(param))
    console.log(data);

    const product = {
        id: 0,
        name: "Modern Hanging Lamp",
        price: "20.00",
        currency: "$",
        discount: "15%",
        originalPrice: "23.50",
        moq: 400,
        rating: 4.5,
        reviewCount: 128,
        inStock: true,
        description:
            "This modern hanging lamp features a unique design that adds elegance to any space. Made from high-quality materials, it provides warm ambient lighting perfect for living rooms, dining areas, or bedrooms. The adjustable cord length allows for versatile installation options.",
        features: [
            "Handcrafted golden amber glass shade",
            "Energy-efficient LED compatible",
            "Adjustable cord length (up to 1.5m)",
            "Suitable for E27 bulbs (not included)",
            "CE and RoHS certified",
        ],
        specifications: [
            { name: "Material", value: "Glass, Metal" },
            { name: "Dimensions", value: "25cm x 25cm x 30cm" },
            { name: "Weight", value: "1.2kg" },
            { name: "Wattage", value: "Max 60W" },
            { name: "Voltage", value: "110-240V" },
            { name: "Color", value: "Amber Gold" },
            { name: "Installation", value: "Ceiling mounted" },
        ],
        images: [
            "/placeholder.svg?height=600&width=600",
            "/placeholder.svg?height=600&width=600",
            "/placeholder.svg?height=600&width=600",
            "/placeholder.svg?height=600&width=600",
        ],
        seller: {
            name: "LuxLighting Co.",
            rating: 4.8,
            responseRate: "98%",
            responseTime: "< 12h",
            verified: true,
            country: "Italy",
            yearEstablished: 2008,
            mainProducts: ["Pendant Lights", "Chandeliers", "Wall Sconces", "Table Lamps"],
            logo: "/placeholder.svg?height=80&width=80",
        },
        shipping: {
            methods: ["Express", "Standard"],
            leadTime: "3-5 days",
            shipsFrom: "Milan, Italy",
        },
        customization: {
            available: true,
            options: ["Color", "Size", "Cord Length"],
        },
    }



    return (
        <MainLayout>
            <div style={{ background: 'white', padding: '20px 0' }} >
                <div className="container">

                    <Breadcrumb
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Electronics", href: "/categories/electronics" },
                            { label: "Lighting", href: "/categories/electronics/lighting" },
                            { label: product.name, href: `/products/${product.id}`, active: true },
                        ]}
                    />


                    <ProductDetail product={data} />

                    <div className="mt-16">
                        <RelatedProducts products={data} />
                    </div>

                    <div >
                        <div>
                            <ProductReviews products={data} averageRating={product.rating} totalReviews={product.reviewCount} />
                        </div>
                        <div>
                            <SellerInfo seller={product.seller} />
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}