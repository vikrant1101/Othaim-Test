import localFont from 'next/font/local';


export const inter = localFont({
src:[
    {
        path:'./fonts/inter/Inter-Regular.woff2',
        weight:"400",
        style:'normal'
    },
    {
        path:'./fonts/inter/Inter-Bold.woff2',
        weight:"700",
        style:'normal'
    },
    {
        path:'./fonts/inter/Inter-SemiBold.woff2',
        weight:"600",
        style:'normal'
    },
    {
        path:'./fonts/inter/Inter-Medium.woff2',
        weight:"500",
        style:'normal'
    }
],
variable: '--font-primary',
display: 'swap'
});

export const fontello = localFont({
    src: [
      {
        path: '../fontello/font/fontello.woff2',
        weight: 'normal',
        style: 'normal',
      },
    ],
    variable: '--font-fontello',
    display: 'swap',
  });