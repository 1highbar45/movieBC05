import React from 'react'
import { useSelector } from 'react-redux';

export default function Dashboard() {
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);

    console.log('userLogin', userLogin);

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto">
                    <div className="flex flex-wrap w-full flex-col items-center text-center">
                        <h1 className="sm:text-4xl text-4xl font-medium title-font mb-2 text-gray-900">User Profile</h1>
                    </div>
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/2 text-center sm:pr-8 sm:py-8">
                            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                    <circle cx={12} cy={7} r={4} />
                                </svg>
                            </div>
                            <div className="flex flex-col items-center text-center justify-center">
                                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">{userLogin.taiKhoan}</h2>
                                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
                            </div>
                        </div>
                        <div className="sm:w-1/2 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <p className="leading-relaxed text-lg mb-4">Account: {userLogin.taiKhoan}</p>
                            <hr/>
                            <p className="leading-relaxed text-lg mb-4">Fullname: {userLogin.hoTen}</p>
                            <hr/>
                            <p className="leading-relaxed text-lg mb-4">Email: {userLogin.email}</p>
                            <hr/>
                            <p className="leading-relaxed text-lg mb-4">Phone Number: {userLogin.soDT}</p>
                            <hr/>
                            <p className="leading-relaxed text-lg mb-4">Group ID: {userLogin.maNhom}</p>
                            <hr/>
                            <p className="leading-relaxed text-lg mb-4">User Type: {userLogin.maLoaiNguoiDung}</p>
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
