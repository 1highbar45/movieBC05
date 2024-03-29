import React from 'react'
import HomeMenu from './HomeMenu/HomeMenu'
// kết nối redux
import { useSelector, useDispatch } from 'react-redux'
import Film from '../../components/Film/Film';
import MultipleRowSlick from '../../components/RSlick/MultipleRowSlick';
import { useEffect } from 'react';
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimAction';
import { layDanhSachHeThongRapAction } from '../../redux/actions/QuanLyRapAction';
import HomeCarousel from '../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel';

export default function Home(props) {

    const { arrFilm } = useSelector(state => state.QuanLyPhimReducer);
    const { heThongRapChieu } = useSelector(state => state.QuanLyRapReducer);
    const dispatch = useDispatch()
    console.log('propsHome', props);
    // props.match.params

    // const renderFilms = () => {
    //     return arrFilm.map((phim, index) => {
    //         return <Film key={index} />
    //     })
    // }

    useEffect(() => {
        const action = layDanhSachPhimAction();
        dispatch(action); // dispatch function từ redux thunk

        dispatch(layDanhSachHeThongRapAction())
    }, [])
    return (
        <div className="container">
            <HomeCarousel />
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <MultipleRowSlick arrFilm={arrFilm} />
                    {/* <div className="flex flex-wrap -m-4">
                        {renderFilms()}
                    </div> */}
                </div>
            </section>

            <div className="mx-36">
                <HomeMenu heThongRapChieu={heThongRapChieu} />
            </div>
        </div>
    )
}
