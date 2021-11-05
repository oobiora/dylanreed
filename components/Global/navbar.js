
import Image from 'next/image'
import LogoWhite from '../../public/favicon/dreed_logo_white.png'
import LogoBlack from '../../public/favicon/dreed_logo_black.png'
import ShoppingCartWhite from '../../public/favicon/shopping_cart_white.png'
import ShoppingCartBlack from '../../public/favicon/shopping_cart_black.png'
import CaretLeftBlack from '../../public/favicon/caret_left_black.png'
import CaretLeftWhite from '../../public/favicon/caret_left_white.png'
export default function Navbar({ variant }) {
   return ( 
     <>
            {
            variant == 'dark_main' && <div className="w-screen h-max bg-black sticky top-0 z-0">
                <div className="container mx-auto w-screen flex flex-row justify-between items-center">
                    <br className="hidden md:block"/>
                    <Image
                        src={LogoWhite}
                        height={70}
                        width={120}
                        />
                    <Image
                        src={ShoppingCartWhite}
                        width={34.78}
                        height={30.71}
                        className="object-contain"
                        />
                </div>
            </div>
            }
            {
            variant == 'dark_sub' && <div className="w-screen h-max bg-black sticky top-0 z-0 isolate">
                <div className="container mx-auto w-screen flex flex-row justify-between items-center">
                <span className="hidden md:flex">
                        <Image
                            src={CaretLeftWhite}
                            width={12.78}
                            height={12.71}
                            className="object-contain isolate"
                        />
                        <h1 className="float-right font-bold text-2xl text-white">Return</h1>
                    </span>
                    <Image
                        src={LogoWhite}
                        height={70}
                        width={120}
                        className="isolate"
                        />
                    <Image
                        src={ShoppingCartWhite}
                        width={34.78}
                        height={30.71}
                        className="object-contain isolate"
                        />
                </div>
            </div>
            }
            {
            variant == 'light_main' && <div className="w-screen h-max bg-none sticky top-0 z-0">
                <div className="container mx-auto w-screen flex flex-row justify-between items-center">
                    <br className="hidden md:block"/>
                    <Image
                        src={LogoBlack}
                        // className="my-10"
                        />
                    <Image
                        src={ShoppingCartBlack}
                        width={38.78}
                        height={38.71}
                        className="object-contain"
                        />
                </div>
            </div>
            }
            {
            variant == 'light_sub' && <div className="w-screen h-max bg-none sticky top-0 z-50 isolate">
                <div className="container mx-auto w-screen flex flex-row justify-between items-center isolate">
                    <span className="hidden md:flex">
                        <Image
                            src={CaretLeftBlack}
                            width={12.78}
                            height={12.71}
                            className="object-contain"
                        />
                        <h1 className="float-right font-bold text-2xl">Return</h1>
                    </span>
                    <Image
                        src={LogoBlack}
                        className=""
                        />
                    <Image
                        src={ShoppingCartBlack}
                        width={38.78}
                        height={38.71}
                        className="object-contain"
                        />
                </div>
            </div>
            }  
        </>
    )
}

Navbar.defaultProps = {
    variant: 'dark_main'
}