import Navbar from '@/components/Global/navbar';
import BlurLayout from '@/components/Global/blur-background'
export default function Shop({children}) {
    return (
        <>
            <Navbar variant='light_sub'/>
            <BlurLayout />
        </>
    )
}