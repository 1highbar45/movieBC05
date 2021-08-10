import React from 'react'

export default function News(props) {
    return (
        <section className="py-6 bg-coolGray-100 text-coolGray-900">
            <div className="container mx-auto grid grid-cols-2 gap-4 p-4 md:grid-cols-4">
                <img src="https://source.unsplash.com/301x301/?random" alt className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1" />
                <img alt className="w-full h-full rounded shadow-sm min-h-48" src="https://source.unsplash.com/200x200/?random" />
                <img alt className="w-full h-full rounded shadow-sm min-h-48" src="https://source.unsplash.com/201x201/?random" />
                <img alt className="w-full h-full rounded shadow-sm min-h-48" src="https://source.unsplash.com/202x202/?random" />
                <img alt className="w-full h-full rounded shadow-sm min-h-48" src="https://source.unsplash.com/203x203/?random" />
                <img alt className="w-full h-full rounded shadow-sm min-h-48" src="https://source.unsplash.com/204x204/?random" />
                <img alt className="w-full h-full rounded shadow-sm min-h-48" src="https://source.unsplash.com/205x205/?random" />
                <img alt className="w-full h-full rounded shadow-sm min-h-48" src="https://source.unsplash.com/206x206/?random" />
                <img alt className="w-full h-full rounded shadow-sm min-h-48" src="https://source.unsplash.com/207x207/?random" />{/**/}
                <img src="https://source.unsplash.com/302x302/?random" alt className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3" />
            </div>
        </section>

    )
}
