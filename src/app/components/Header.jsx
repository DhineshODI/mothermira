// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { usePathname } from "next/navigation";
// import { TextFadeHorizontal } from "./TextFadeUp";

// export default function Header({ sec }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);

//   const pathname = usePathname();

//   const navLinks = [
//     { name: "ABOUT US", href: "/aboutus" },
//     { name: "ONGOING", href: "/ourprojects" },
//     { name: "UPCOMING", href: "/ourprojects" },
//     { name: "CONTACT US", href: "/contact-us" },
//   ];

//   const menuVariants = {
//     closed: {
//       opacity: 0,
//       height: 0,
//       transition: {
//         duration: 0.4,
//         ease: [0.04, 0.62, 0.23, 0.98],
//         when: "afterChildren",
//       },
//     },
//     open: {
//       opacity: 1,
//       height: "auto",
//       transition: {
//         duration: 0.4,
//         ease: [0.04, 0.62, 0.23, 0.98],
//         when: "beforeChildren",
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     closed: { opacity: 0, y: -15 },
//     open: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.3 },
//     },
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsSticky(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <header
//         className={`sticky top-0 z-50 w-full px-9 sm:px-9 lg:px-9 transition-all duration-300 py-[20px] headdersectionmain ${
//           isSticky ? "stickyheader" : ""
//         } ${sec}`}
//       >
//         <div className="flex items-center justify-between headerrrrcontainer">
//           {/* LOGO */}
//           <Link href="/" className="flex items-center gap-2">
//             <div className="relative">
//               <img
//                 src={
//                   sec === "transperantBg" && isSticky === false
//                     ? "/images/mothermira-logo-color.svg"
//                     : "/images/mothermira-logo.svg"
//                 }
//                 alt="Mother Mira"
//                 className="headerimageesection"
//               />
//             </div>
//           </Link>

//           {/* DESKTOP NAVIGATION */}

//           <TextFadeHorizontal direction="right" delay={0.8}>
//             <nav className="hidden md:flex items-center gap-5 lg:gap-5">
//               {navLinks.map((link) => {
//                 const isActive = pathname === link.href;

//                 return (
//                   <Link
//                     key={link.name}
//                     href={link.href}
//                     className={`paratext semibold headerbuttondiv ${
//                       isActive ? "active" : ""
//                     }`}
//                   >
//                     {link.name}
//                   </Link>
//                 );
//               })}
//             </nav>
//           </TextFadeHorizontal>

//           {/* ANIMATED HAMBURGER ICON */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
//             aria-label="Toggle Menu"
//           >
//             <motion.span
//               animate={
//                 isMenuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }
//               }
//               className={`w-6 h-0.5 block rounded-full transition-transform ${
//                 sec === "transperantBg" && isSticky === false
//                   ? "bg-[#fff]"
//                   : "bg-[#0c3835]"
//               }`}
//             />

//             <motion.span
//               animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
//               className={`w-6 h-0.5 bg-[#0c3835] block transition-opacity rounded-full  ${
//                 sec === "transperantBg" && isSticky === false
//                   ? "bg-[#fff]"
//                   : "bg-[#0c3835]"
//               }`}
//             />

//             <motion.span
//               animate={
//                 isMenuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }
//               }
//               className={`w-6 h-0.5 bg-[#0c3835] block transition-transform rounded-full
//               ${
//                 sec === "transperantBg" && isSticky === false
//                   ? "bg-[#fff]"
//                   : "bg-[#0c3835]"
//               }
//               `}
//             />
//           </button>
//         </div>

//         {/* MOBILE SMOOTH SLIDE-DOWN DRAWER */}
//       </header>

//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             initial="closed"
//             animate="open"
//             exit="closed"
//             variants={menuVariants}
//             className="md:hidden overflow-hidden bg-[#f4f3e8] border-t border-[#0c3835]/10 px-4 pb-6 menubarrrrrrrstyle"
//           >
//             <div className="flex items-center justify-between headerrrrcontainer newwwwww">
//               <Link href="/" className="flex items-center gap-2">
//                 <div className="relative">
//                   <img
//                     src="/images/mothermira-logo.svg"
//                     alt="Mother Mira"
//                     className="headerimageesection"
//                   />
//                 </div>
//               </Link>

//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
//                 aria-label="Toggle Menu"
//               >
//                 <motion.span
//                   animate={
//                     isMenuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }
//                   }
//                   className={`w-6 h-0.5 block rounded-full transition-transform ${
//                     sec === "transperantBg" && isSticky === false
//                       ? "bg-[#0c3835]"
//                       : "bg-[#0c3835]"
//                   }`}
//                 />

//                 <motion.span
//                   animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
//                   className={`w-6 h-0.5 bg-[#0c3835] block transition-opacity rounded-full  ${
//                     sec === "transperantBg" && isSticky === false
//                       ? "bg-[#0c3835]"
//                       : "bg-[#0c3835]"
//                   }`}
//                 />

//                 <motion.span
//                   animate={
//                     isMenuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }
//                   }
//                   className={`w-6 h-0.5 bg-[#0c3835] block transition-transform rounded-full
//               ${
//                 sec === "transperantBg" && isSticky === false
//                   ? "bg-[#0c3835]"
//                   : "bg-[#0c3835]"
//               }
//               `}
//                 />
//               </button>
//             </div>
//             <div className="pt-4 space-y-4 menubaropennn">
//               {navLinks.map((link) => {
//                 const isActive = pathname === link.href;

//                 return (
//                   <motion.div
//                     key={link.name}
//                     variants={itemVariants}
//                     className="menuolddddnewww"
//                   >
//                     <Link
//                       href={link.href}
//                       onClick={() => setIsMenuOpen(false)}
//                       className={`block text-sm font-bold uppercase tracking-wider py-2 transition-transform ${
//                         isActive
//                           ? "text-[#0c3835]"
//                           : "text-[#0c3835] hover:translate-x-1"
//                       }`}
//                     >
//                       {link.name}
//                     </Link>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { usePathname } from "next/navigation";
// import { TextFadeHorizontal } from "./TextFadeUp";

// export default function Header({ sec }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);
//   // null = state pending check, true = run animation, false = skip
//   const [shouldAnimate, setShouldAnimate] = useState(null);
//   const [isHeaderVisible, setIsHeaderVisible] = useState(true);

//   const pathname = usePathname();

//   const navLinks = [
//     { name: "HOME", href: "/" },
//     { name: "ABOUT US", href: "/aboutus" },
//     { name: "ONGOING", href: "/ourprojects" },
//     { name: "THE WIND", href: "/projectdetail-wind" },
//     { name: "CONTACT US", href: "/contact-us" },
//   ];

//   const menuVariants = {
//     closed: {
//       opacity: 0,
//       height: 0,
//       transition: {
//         duration: 0.4,
//         ease: [0.04, 0.62, 0.23, 0.98],
//         when: "afterChildren",
//       },
//     },
//     open: {
//       opacity: 1,
//       height: "auto",
//       transition: {
//         duration: 0.4,
//         ease: [0.04, 0.62, 0.23, 0.98],
//         when: "beforeChildren",
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     closed: { opacity: 0, y: -15 },
//     open: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.3 },
//     },
//   };

//   useEffect(() => {
//     // SessionStorage-la first time check panrom
//     const hasAnimatedBefore = sessionStorage.getItem("header_has_animated");

//     if (!hasAnimatedBefore) {
//       // Direct first load -> Animation play panna set panrom
//       setShouldAnimate(true);
//       sessionStorage.setItem("header_has_animated", "true");
//     } else {
//       // Dynamic route navigation / reload in same tab -> Skip animation
//       setShouldAnimate(false);
//     }

//     const handleScroll = () => {
//       setIsSticky(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const hasAnimatedBefore = sessionStorage.getItem("header_has_animated");

//     if (!hasAnimatedBefore) {
//       setShouldAnimate(true);
//       sessionStorage.setItem("header_has_animated", "true");
//     } else {
//       setShouldAnimate(false);
//     }

//     let lastScrollY = window.scrollY;
//     let ticking = false;

//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (!ticking) {
//         window.requestAnimationFrame(() => {
//           // Sticky header state
//           setIsSticky(currentScrollY > 0);

//           // Always show header at the top
//           if (currentScrollY <= 10) {
//             setIsHeaderVisible(true);
//           }
//           // Scrolling down → Hide header
//           else if (currentScrollY > lastScrollY + 5) {
//             setIsHeaderVisible(false);
//           }
//           // Scrolling up → Show header
//           else if (currentScrollY < lastScrollY - 5) {
//             setIsHeaderVisible(true);
//           }

//           lastScrollY = currentScrollY;
//           ticking = false;
//         });

//         ticking = true;
//       }
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       {/* <header
//         className={`sticky top-0 z-50 w-full px-9 sm:px-9 lg:px-9 transition-all duration-300 py-[20px] headdersectionmain testingheaderrrgit ${
//           isSticky ? "stickyheader" : ""
//         } ${sec}`}
//       > */}

//       {/* <header
//         className={`fixed top-0 left-0 z-50 w-full px-9 sm:px-9 lg:px-9 py-[20px] headdersectionmain testingheaderrrgit transition-transform duration-900 ease-in-out ${
//           isSticky ? "stickyheader" : ""
//         } ${sec} ${isHeaderVisible ? "translate-y-0" : "-translate-y-full"}`}
//       > */}

//       <header
//         className={`fixed top-0 left-0 z-50 w-full px-9 sm:px-9 lg:px-9 py-[20px] headdersectionmain testingheaderrrgit transition-transform duration-500 ease-in-out ${
//           isSticky ? "stickyheader" : ""
//         } ${sec} ${isHeaderVisible ? "translate-y-0" : "-translate-y-full"}`}
//       >
//         <div className="flex items-center justify-between headerrrrcontainer">
//           {/* LOGO */}
//           <Link href="/" className="flex items-center gap-2">
//             <div className="relative">
//               <img
//                 src={
//                   sec === "transperantBg" && isSticky === false
//                     ? "/images/mothermira-logo-color.svg"
//                     : sec === "nonetranpserant" && isSticky === false
//                       ? "/images/mothermira-logo.svg"
//                       : "/images/mothermira-logo-color.svg"
//                 }
//                 alt="Mother Mira"
//                 className="headerimageesection"
//               />
//             </div>
//           </Link>

//           {/* DESKTOP NAVIGATION */}
//           {shouldAnimate === true ? (
//             // 1st Time Visit: Play animation
//             // <TextFadeHorizontal direction="right" delay={0.8}>
//             <nav className="hidden md:flex items-center gap-5 lg:gap-5">
//               {navLinks.map((link) => {
//                 const isActive = pathname === link.href;

//                 return (
//                   <Link
//                     key={link.name}
//                     href={link.href}
//                     className={`paratext semibold headerbuttondiv ${
//                       isActive ? "active" : ""
//                     }`}
//                   >
//                     {link.name}
//                   </Link>
//                 );
//               })}
//             </nav>
//           ) : (
//             // </TextFadeHorizontal>
//             // Subsequent pages or initial state pending: Direct render without animation wrapper
//             <nav className="hidden md:flex items-center gap-5 lg:gap-5">
//               {navLinks.map((link) => {
//                 const isActive = pathname === link.href;

//                 return (
//                   <Link
//                     key={link.name}
//                     href={link.href}
//                     className={`paratext semibold headerbuttondiv ${
//                       isActive ? "active" : ""
//                     }`}
//                   >
//                     {link.name}
//                   </Link>
//                 );
//               })}
//             </nav>
//           )}

//           {/* ANIMATED HAMBURGER ICON */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
//             aria-label="Toggle Menu"
//           >
//             <motion.span
//               animate={
//                 isMenuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }
//               }
//               className={`w-6 h-0.5 block rounded-full transition-transform ${
//                 sec === "transperantBg" && isSticky === false
//                   ? "bg-[#fff]"
//                   : "bg-[#0c3835]"
//               }`}
//             />

//             <motion.span
//               animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
//               className={`w-6 h-0.5 bg-[#0c3835] block transition-opacity rounded-full ${
//                 sec === "transperantBg" && isSticky === false
//                   ? "bg-[#fff]"
//                   : "bg-[#0c3835]"
//               }`}
//             />

//             <motion.span
//               animate={
//                 isMenuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }
//               }
//               className={`w-6 h-0.5 bg-[#0c3835] block transition-transform rounded-full ${
//                 sec === "transperantBg" && isSticky === false
//                   ? "bg-[#fff]"
//                   : "bg-[#0c3835]"
//               }`}
//             />
//           </button>
//         </div>
//       </header>

//       {/* MOBILE SMOOTH SLIDE-DOWN DRAWER */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             initial="closed"
//             animate="open"
//             exit="closed"
//             variants={menuVariants}
//             className="md:hidden overflow-hidden bg-[#f4f3e8] border-t border-[#0c3835]/10 px-4 pb-6 menubarrrrrrrstyle"
//           >
//             <div className="flex items-center justify-between headerrrrcontainer newwwwww">
//               <Link href="/" className="flex items-center gap-2">
//                 <div className="relative">
//                   <img
//                     src="/images/mothermira-logo.svg"
//                     alt="Mother Mira"
//                     className="headerimageesection"
//                   />
//                 </div>
//               </Link>

//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
//                 aria-label="Toggle Menu"
//               >
//                 <motion.span
//                   animate={
//                     isMenuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }
//                   }
//                   className="w-6 h-0.5 block rounded-full transition-transform bg-[#0c3835]"
//                 />
//                 <motion.span
//                   animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
//                   className="w-6 h-0.5 block transition-opacity rounded-full bg-[#0c3835]"
//                 />
//                 <motion.span
//                   animate={
//                     isMenuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }
//                   }
//                   className="w-6 h-0.5 block transition-transform rounded-full bg-[#0c3835]"
//                 />
//               </button>
//             </div>
//             <div className="pt-4 space-y-4 menubaropennn">
//               {navLinks.map((link) => {
//                 const isActive = pathname === link.href;

//                 return (
//                   <motion.div
//                     key={link.name}
//                     variants={itemVariants}
//                     className="menuolddddnewww"
//                   >
//                     <Link
//                       href={link.href}
//                       onClick={() => setIsMenuOpen(false)}
//                       className={`block text-sm font-bold uppercase tracking-wider py-2 transition-transform ${
//                         isActive
//                           ? "text-[#0c3835]"
//                           : "text-[#0c3835] hover:translate-x-1"
//                       }`}
//                     >
//                       {link.name}
//                     </Link>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header({ sec }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const lastScrollY = useRef(0);
  const pathname = usePathname();

  const navLinks = [
    { name: "ABOUT US", href: "/aboutus" },
    { name: "ONGOING", href: "/ourprojects" },
    { name: "THE WIND", href: "/projectdetail-wind" },
    { name: "CONTACT US", href: "/contact-us" },
  ];
  const navLinksmobile = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/aboutus" },
    { name: "ONGOING", href: "/ourprojects" },
    { name: "THE WIND", href: "/projectdetail-wind" },
    { name: "CONTACT US", href: "/contact-us" },
  ];
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.4,
        ease: [0.04, 0.62, 0.23, 0.98],
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: [0.04, 0.62, 0.23, 0.98],
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: -15 },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  // 1. Animation check (First time visit only)
  useEffect(() => {
    const hasAnimatedBefore = sessionStorage.getItem("header_has_animated");
    if (!hasAnimatedBefore) {
      setShouldAnimate(true);
      sessionStorage.setItem("header_has_animated", "true");
    } else {
      setShouldAnimate(false);
    }
  }, []);

  // 2. Smooth Scroll Logic (Single clean listener)
  useEffect(() => {
    let ticking = false;
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Sticky state (20px scroll aanathum background maarum)
          setIsSticky(currentScrollY > 20);

          // Mobile menu open-la iruntha header-ai hide panna koodathu
          if (isMenuOpen) {
            setIsHeaderVisible(true);
            lastScrollY.current = currentScrollY;
            ticking = false;
            return;
          }

          // Top-la iruntha eppovume visible
          if (currentScrollY <= 50) {
            setIsHeaderVisible(true);
          }
          // Down scroll -> Hide (10px threshold prevents jitter)
          else if (currentScrollY > lastScrollY.current + 10) {
            setIsHeaderVisible(false);
          }
          // Up scroll -> Show
          else if (currentScrollY < lastScrollY.current - 5) {
            setIsHeaderVisible(true);
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`w-full px-9 sm:px-9 lg:px-9 py-[20px] headdersectionmain testingheaderrrgit ${
          isSticky ? "stickyheader" : ""
        } ${sec || ""} ${!isHeaderVisible ? "is-hidden" : ""}`}
      >
        <div className="flex items-center justify-between headerrrrcontainer">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative">
              <img
                src={
                  sec === "transperantBg" && !isSticky
                    ? "/images/mothermira-logo-color.svg"
                    : sec === "nonetranpserant" && !isSticky
                      ? "/images/mothermira-logo.svg"
                      : "/images/mothermira-logo-color.svg"
                }
                alt="Mother Mira"
                className="headerimageesection transition-opacity duration-300"
              />
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`paratext semibold headerbuttondiv transition-colors duration-300 ${
                    isActive ? "active" : ""
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* ANIMATED HAMBURGER ICON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <motion.span
              animate={
                isMenuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }
              }
              className={`w-6 h-0.5 block rounded-full transition-colors duration-300 ${
                sec === "transperantBg" && !isSticky
                  ? "bg-[#fff]"
                  : "bg-[#0c3835]"
              }`}
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className={`w-6 h-0.5 block rounded-full transition-colors duration-300 ${
                sec === "transperantBg" && !isSticky
                  ? "bg-[#fff]"
                  : "bg-[#0c3835]"
              }`}
            />
            <motion.span
              animate={
                isMenuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }
              }
              className={`w-6 h-0.5 block rounded-full transition-colors duration-300 ${
                sec === "transperantBg" && !isSticky
                  ? "bg-[#fff]"
                  : "bg-[#0c3835]"
              }`}
            />
          </button>
        </div>
      </header>

      {/* MOBILE SMOOTH SLIDE-DOWN DRAWER */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 left-0 w-full z-[10001] md:hidden overflow-hidden bg-[#f4f3e8] border-t border-[#0c3835]/10 px-4 pb-6 menubarrrrrrrstyle"
          >
            <div className="flex items-center justify-between headerrrrcontainer newwwwww py-[20px] px-5">
              <Link href="/" className="flex items-center gap-2">
                <div className="relative">
                  <img
                    src="/images/mothermira-logo.svg"
                    alt="Mother Mira"
                    className="headerimageesection"
                  />
                </div>
              </Link>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
                aria-label="Close Menu"
              >
                <motion.span
                  animate={{ rotate: 45, y: 7.5 }}
                  className="w-6 h-0.5 block rounded-full bg-[#0c3835]"
                />
                <motion.span
                  animate={{ opacity: 0 }}
                  className="w-6 h-0.5 block rounded-full bg-[#0c3835]"
                />
                <motion.span
                  animate={{ rotate: -45, y: -7.5 }}
                  className="w-6 h-0.5 block rounded-full bg-[#0c3835]"
                />
              </button>
            </div>
            <div className="pt-4 px-5 space-y-4 menubaropennn">
              {navLinksmobile.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    variants={itemVariants}
                    className="menuolddddnewww"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block text-sm font-bold uppercase tracking-wider py-2 transition-transform ${
                        isActive
                          ? "text-[#0c3835]"
                          : "text-[#0c3835] hover:translate-x-1"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
