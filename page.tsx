import { Header } from "./components/header"
import { Hero } from "./components/hero"
import { ProductShowcase } from "./components/product-showcase"
import { GigModels } from "./components/gig-models"
import { FinancingBanner } from "./components/financing-banner"
import { Sankalp2024 } from "./components/sankalp-2024"
import { Hyperservice } from "./components/hyperservice"
import { StoreLocations } from "./components/store-locations"
import { Manufacturing } from "./components/manufacturing"
import { Community } from "./components/community"
import { News } from "./components/news"
import { Footer } from "./components/footer"
import { NotificationBar } from "./components/notification-bar"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <Hero />
        <ProductShowcase />
        <GigModels />
        <FinancingBanner />
        <Sankalp2024 />
        <Hyperservice />
        <StoreLocations />
        <Manufacturing />
        <Community />
        <News />
      </main>
      <Footer />
    </div>
  )
}

