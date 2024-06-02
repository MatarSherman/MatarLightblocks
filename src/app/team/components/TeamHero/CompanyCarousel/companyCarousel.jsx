import './companyCarousel.css'

const companyImages = [
    'albert.png',
    'bloxroute.png',
    'chainstack.png',
    'chaos.png',
    'cosmos.png',
    'ethereum.png',
    'google.png',
    'meta.png',
    'osmosis.png',
]

export const CompanyCarousel = () => {
    return (
        <div className='company-carousel-wrapper'>
            <div className="company-carousel">
                <div className='company-carousel-content'>
                    {
                        [...companyImages, ...companyImages].map((filename, index) => (
                            <img key={index} src={`/images/companyCarousel/${filename}`} />
                        ))
                    }
                </div>
            </div>
            <div className="company-carousel__fade company-carousel__fade-left" />
            <div className="company-carousel__fade company-carousel__fade-right" />
        </div>
    )
}