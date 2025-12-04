// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import MandalaCanvas from "@/components/Mandala";
// import Header from "../Header";

// export default function Hero() {
//   return (
//     <section className="relative min-h-[70vh] overflow-hidden bg-linear-to-t from-[#f3c871] via-[#f3b886] to-[#e89b7c]">
//       <Header/>
//       <div className="mx-auto flex max-w-6xl items-start px-6 py-16 gap-10">
//         {/* Left: image + text */}
//         <div className="relative z-10 flex-1 max-w-md space-y-4 ">
//           <div className="w-[380px] h-[360px] md:w-[480px] md:h-[520px] relative ">
//             <Image
//               src="/images/heros.png"
//               alt="alt"
//               fill
//               className="object-cover shadow-xl mt-8 rounded-3xl"
//             />
//           </div>
//         <div className="absolute z-20 top-64 left-3">
//           <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/80 mt-8">
//             Modern Wedding WebApp
//           </p>
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white uppercase pt-serif-regular berkshire-swash-regular">
//             From swipe to Saat Pheras
//           </h1>
//           <p className="text-sm md:text-base text-white/80">
//             Join us for smart matching for real relationships.
//           </p>
//           </div>
//         </div>

//         {/* Right: mandala takes right half */}
      //   <div className="fixed flex-1 flex justify-center items-center right-[-150px] md:right-[-200px] lg:right-[-360px] ">
      //     <div className="h-[600px] w-[600px] md:h-[600px] md:w-[600px]">
      //       <MandalaCanvas />
      //     </div>
      //   </div>
      // </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MandalaCanvas from "@/components/Mandala";
import Header from "../Header";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-linear-to-t from-[#f3c871] via-[#f3b886] to-[#e89b7c]">
      <Header />

      <div className="mx-auto flex max-w-6xl  items-center px-6 pt-28 pb-16 gap-10">
        {/* LEFT: animated card + text overlay */}
        <div className="relative z-10 flex flex-1 justify-center md:justify-start">
          {/* soft glow ring behind card */}
          <div className="relative max-w-full md:max-w-lg">
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 0.8, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="pointer-events-none absolute -left-10 top-4
             w-full h-full md:h-[420px] md:w-[420px] rounded-full 
             bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4),transparent_60%)] blur-2xl"
          />

          {/* floating bride card */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            whileHover={{ y: -6, boxShadow: "0 30px 80px rgba(0,0,0,0.35)" }}
            className="relative w-[340px] h-[420px] md:w-[420px] md:h-[520px] items-center
            rounded-4xl bg-white/10 shadow-2xl backdrop-blur-md overflow-hidden"
          >
            <Image
              src="/images/heros.png"
              alt="Modern Indian bride"
              fill
              className="object-cover w-full"
              priority
            />

            {/* overlay gradient for text legibility */}
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/55 via-black/20 to-transparent" />
          </motion.div>

          {/* overlay text block */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
            className="pointer-events-none absolute left-8 bottom-10 max-w-xs"
          >
            <p className="text-[11px] md:text-xs uppercase tracking-[0.32em] text-white/80">
              Modern Wedding WebApp
            </p>
            <h1 className="mt-2 text-2xl md:text-3xl lg:text-4xl font-semibold text-white uppercase pt-serif-regular berkshire-swash-regular leading-tight drop-shadow-md">
              From Swipe to Saat Pheras
            </h1>
            <p className="mt-2 text-[13px] md:text-sm text-white/85">
              Smart, verified matching for real relationships rooted in Indian values.
            </p>
          </motion.div>
          </div>
        </div>

        {/* RIGHT: mandala area, no fixed positioning */}
        <div className="fixed flex-1 flex justify-center items-center 
        right-[-150px] md:right-[-200px] lg:right-[-360px] overflow-hidden">
          <div
            
            className="h-[600px] w-[600px] md:h-[600px] md:w-[600px]"
          >
            <MandalaCanvas />
          </div>
        </div>
      </div>
    </section>
  );
}
