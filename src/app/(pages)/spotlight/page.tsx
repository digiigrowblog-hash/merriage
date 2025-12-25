import Header from "@/components/mainHeaderFooter/HeaderMain";
import Footer from "@/components/mainHeaderFooter/FooterMain";

export default function Settings() {
  return (
    <div className="min-h-screen max-w-full py-1">
      <Footer />

      <div className="flex mt-12">
        {/* Left header */}
        <div className="w-full md:w-auto max-h-full">
          <Header />
        </div>

        {/* Right content */}
        <div className="w-full md:w-full max-h-full ">
          <div className="mt-40">
            <h1 className="text-2xl font-bold text-center">
              Welcome to the Home Page
            </h1>

            <div className="flex justify-center items-center">
              This page is implementing in version2.
            </div>
            <div className="text-lg text-center">😊</div>
          </div>
        </div>
      </div>
    </div>
  );
}
