import axios from 'axios';
import { quanLyPhimService } from '../../services/QuanLyPhimService';
import { DOMAIN } from '../../util/settings/config';
import { SET_CAROUSEL } from './types/CarouselType';

export const getCarouselAction = () => {
    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyPhimService.layDanhSachBanner();
            // // Đưa lên reducer
            // console.log('result', result);

            dispatch({
                type: SET_CAROUSEL,
                arrImg: result.data.content
            })
        } catch (errors) {
            console.log('errors', errors);
        }
    }
}