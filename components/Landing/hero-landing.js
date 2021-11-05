import Section from './section-landing'
import ImageAbout from '../../public/images/image-landing-about.png'
import ImageGallery from '../../public/images/image-landing-gallery.png'
import ImageShop from '../../public/images/image-landing-shop.png'
export default function LandingHero({}) {
    return (
        <>
            <div className="grid grid-cols-3 min-h-screen">
                <Section image={ImageAbout} link="/about" text="About" textColor="white"/>
                <Section image={ImageShop} link="/shop" text="Shop" textColor="black"/>
                <Section image={ImageGallery} link="/gallery" text="Gallery" textColor="white"/>
            </div>
            <div className="">

            </div>
        </>
    )
}