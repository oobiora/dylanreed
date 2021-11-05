import BlurBackground from "../../public/images/background-red-blur.svg"
export default function BlurLayout({children}) {
    return (
        <div className='w-screen h-screen bg-black opacity-100 absolute top-0 z-20  mix-blend-exclusion' >
            {/* <SvgBackground/> */}
        </div>
    )
}

const SvgBackground = ({children}) => {
    return (
        <svg className="relative top-0 z-10" width="100%"  height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="f1" x="-100%" y="-100%" width="300%" height="300%">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feGaussianBlur in="SourceGraphic" in2="Background" stdDeviation="2" />
                </filter>
            </defs>
            <g>
                <path
                d="M 40,0 S 30,30 50,50 C 50,50 68,70 80,100 L 150, 150 L 150, -50"
                fill="#00FFF0"
                filter="url(#f1)"
                />
                 <path 
                d="M 30,0 S 70,10 50,50 C 50,50 48,50 30,100 L -50, 150 L -50, -50"
                fill="#00FFF0"
                filter="url(#f1)"
                 
                />
            </g>
            <defs />
        </svg>
    )
}

           