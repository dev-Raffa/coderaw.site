import localFont from "next/font/local";

export const camCode = localFont({
  src: [
    {
      path: "../../../public/fonts/canCode/Camcode-large.ttf",
      style: "normal",
      weight: "700",
    },
    {
      path: "../../../public/fonts/canCode/Camcode-medium.ttf",
      style: "normal",
      weight: "400",
    },
  ],
  variable:"--font-canCode",
  preload: true, 

});
