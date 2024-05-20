'use client'
import { About } from "@/components/About"
import { Banner } from "@/components/Banner"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { JoinCommunity } from "@/components/JoinCommunity"
import { Products } from "@/components/Products"
import { Services } from "@/components/Services"
import { TransitionPage } from "@/components/TransitionPage"
import dynamic from "next/dynamic"

const locationMap = dynamic(
    () => import('../components/location').then(module => module.location),
    {
        ssr:false
    }

)

export default function Home (){

    return (
        <>
            <TransitionPage />
            <Header />
            <main>
                <Banner/>
                <Products/>
                <div className="max-w-6xl mx-auto">
                    <Services/>
                    <locationMap/>
                    <About/>
                </div>
                <JoinCommunity/>
                <Footer/>
            </main>
        </>
    )
}
