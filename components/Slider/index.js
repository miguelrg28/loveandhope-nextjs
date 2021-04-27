import Carousel from 'react-elastic-carousel'
import Arrows from './Arrows'
import Dot from './Dot'

const Slider = ({ items, arrows, autoPlay }) => (
    <>
        <Carousel
            enableAutoPlay={autoPlay}
            autoPlaySpeed={1000}
            showArrows={arrows || false}
            pagination={true}
            renderArrow={Arrows}
            renderPagination={({ pages, activePage, onClick }) => {
                return (
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        {pages.map((page) => {
                            const isActivePage = activePage === page
                            return (
                                <Dot
                                    key={page}
                                    onClick={() => onClick(page)}
                                    active={isActivePage}
                                />
                            )
                        })}
                    </div>
                )
            }}
        >
            {items.map((item, index) => (
                <div key={index} className="item">
                    <img src={item.img} title={item.title} />
                    {/*item.description && <div className="text">{item.description}</div>*/}
                </div>
            ))}
        </Carousel>

        <style jsx>{`
            .item {
                transition: transform 200ms ease;
                box-sizing: border-box;
                padding-bottom: 3px;
                position: relative;
                text-align: center;
                outline: none;
                color: #fff;
                /*background-image: url('/background1.jpg');
                background-color: #673ab7;
                background-position-x: center;
                background-position-y: center;
                background-repeat: no-repeat;
                background-size: cover;*/
            }

            .item > img {
                width: 100%;
            }

            .item > .text {
                position: absolute;
                top: 90%;
                left: 50%;
                display: flex;
                width: 100%;
                align-items: center;
                justify-content: center;
                transform: translate(-50%, -50%);
            }

            @media only screen and (max-width: 768px) {
                .item > .text {
                    font-size: 0.85em;
                    top: 85%;
                }
            }
        `}</style>
    </>
)

export default Slider
