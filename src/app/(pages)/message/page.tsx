import Header from "@/components/mainHeaderFooter/HeaderMain";
import Footer from "@/components/mainHeaderFooter/FooterMain";

export default function Message() {
  return (
    <div className="min-h-screen max-w-full  py-1">
      <Footer />
      <main className="mt-40">
        <h1 className="text-2xl font-bold text-center">
           Welcome to the Setting Page
        </h1>

        <div className="flex justify-center items-center">
           This page is implementing in version2.
        </div>
          <div className="text-lg  text-center ">😊</div>
      </main>
      <Header />
    </div>
  );
}
