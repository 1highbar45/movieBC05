import React, { useEffect } from 'react'
import { Carousel } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getCarouselAction } from '../../../../redux/actions/CarouselAction';

const contentStyle = {
    height: '500px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundPosition: 'center',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat'
};

export default function HomeCarousel() {
    const { arrImg } = useSelector(state => state.CarouselReducer)

    // console.log('arrImg', arrImg);

    const dispatch = useDispatch();
    // sẽ tự kích hoạt khi component load ra
    useEffect(async () => {

        //1 action = {type:'',data}
        //2 (phải cài middleware): callBackFunction (dispatch)

        // const action = getCarouselAction(1);
        dispatch(getCarouselAction());

    }, [])

    const renderImg = () => {
        return arrImg.map((item, index) => {
            return <div key={index}>
                <div style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}>
                    <img src={item.hinhAnh} className="w-full opacity-0" alt={item.hinhAnh} />
                </div>
            </div>
        })
    }

    return (
        <Carousel effect="fade">
            {renderImg()}
        </Carousel>
    )
}
