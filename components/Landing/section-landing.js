import Link from 'next/link'
import Image from 'next/image'
export default function Section({image, link, text, textColor}){
    return (
        // <Link className="w-max h-max" href={link} onMouseEnter={console.log(link)}>
            <>
                <div className="grid grid-cols-1 grid-rows-1 relative">
                    <Image 
                        src={image}
                        className="object-cover z-3 absolute"
                    />
                    <div href={link} className="absolute z-2 justify-self-center place-self-center text-7xl font-bold tracking-widest">
                        <Link href={link} >
                            <h1 className={`cursor-default uppercase text-${textColor}`}>{text}</h1> 
                        </Link>
                    </div>
                </div>
            </>
    )
}