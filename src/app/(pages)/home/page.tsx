
import Footer from "@/components/mainHeaderFooter/FooterMain";
import Header from "@/components/mainHeaderFooter/HeaderMain";
import React from "react";

export default function Home(){
    return(
        <div className="min-h-screen max-w-full  py-1">
            <Footer/>
            <main className="mt-20">
                <h1 className="text-2xl font-bold text-center">Welcome to the Home Page</h1>
            </main>
            <Header/>


        </div>
    )
}