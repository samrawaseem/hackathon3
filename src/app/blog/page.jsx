import Card4 from '@/components/cards/Card4';
import PageBg from '@/components/PageBg';
import TrustComp from '@/components/TrustComp';
import { FaSearch } from 'react-icons/fa';
import React from 'react';
import Image from 'next/image';

const Blogs = [
    {
        title: 'Going all-in with millennial design',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
        date: '14 Oct 2022',
        cate: 'Wood',
        img: 'https://s3-alpha-sig.figma.com/img/56f7/6fe2/41417cd682c30a19eecaf20a549cee89?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UPFiE6xh3wqEOv-iqlwzi7WpmXECbXORpfTlswJ4ktf8XUfVVgBEFBBqSHrKwCpyNjgnxIkwo33VlTOTJJ69JuPJKoXXF1KLVqM7ULhHVUIzeNIVjbTqMi~otjmsvLHqymO-x74QSVN6OWnr-Kd0zfTs45GsES~3cih~iUTfCCWbevRTBHbwzH4jrCmeNhteHcv~gLvFy81Q8HfTAFCCeeqctPX21ccc1JMcflFBKf7vTyTmbKF4AHJtaXNowwkgtHWVKm3wNfBM4-TgWk27j5QGk8Tmol~y7HpPl3shrvh0dvUAmGWi1hYjyHnVxGWN90COwfbfmO9e2WbIGlz0BA__',
    },
    {
        title: 'Exploring new ways of decorating',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
        date: '14 Oct 2022',
        cate: 'Handmade',
        img: 'https://s3-alpha-sig.figma.com/img/d248/0301/96ed5dc3b3d01cf6cd369ef7aff2f296?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bamHYe1L50pZ2RVeVRJqt~hE6rqi7K~GDecFZK5N68oIiXUd5cjuf1I4MSZyE7LH6qnUf6o7foGK2OPtRjVgBBL1ZviTiIwmPxvJJ0zzXssEJ~WKMHFA0Wif1yktSkGcf~pbnPikhUP3R1Ir5y0Y~-5RD4EckoXuorkN6snZ8uy17LLjmNxnVyv-ggR7xBbVjiuaUNpryoDoB9aqfZis~vhQPg0yhgp~w2ZpBWOICb2pbW59FNh~OUQs-E-UmR-dU01BkkfWSFIUbK5q-U~2hbGyEBlPRSXeY4pbVYAuQFVMDuU~28iMreYO78Tjq6yL93ZfyrFj9m7vDABtMgBG2Q__',
    },
    {
        title: 'Handmade pieces that took time to make',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
        date: '14 Oct 2022',
        cate: 'Wood',
        img: 'https://s3-alpha-sig.figma.com/img/8dee/6dec/4190307dc6c7273c0bbf5086605997e4?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g6DEJtX~owKJQr2JHsmPq0AdOgMtgFJyHW10uoeaWrNfMyYxki3Wvabd2F89AhTr6NM6nIvrWsuSam6IEDnY4oZy5ruzMHU7EDUv~i4RNAy-ImXl3REaTnVMSG7oM1BpkOXvmLz-Gq8VQgtENsNdklBLNQAHgQG1SNzXB2GV2pqUziJJJDh3jOodJ3PXz30ci-4c5jAvH3~YniO52Z5t9R6F9ZS5SSbH1ZQ4gbDXGBkFNPKlSPz-lCW2pxAWXIDpu-wXp3wGezuhX4cdK4ayR1o4SKs~3GZx9tDWSpvxBFzASuLRombIwlJNAyMjVUTFXRBb13mJf0F5HBgjK0SfpA__',
    },
]

const Products = [
    {
        img: 'https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U6hmqsbvVEI8Z8S5c9vDXSMeN~pKf8syqmMXdB0Ez5B0IE8g0bVZ58skFViuQ~2GbXhhpsCAWodO8e6e~DJvMQiiy8l7DrsVNCr6EceFIjUSoYTQZ6Ktvqdzb~qsg1oDInOXSA8d~3tk2-G~55Dvpirfyp5HRBPdwAET~Dy-HQIs3FcST95jc8r1LO33ZWa4MYC73eGfb29UQtfDGmzE~hK3Da10ZvpT-0SD3Ud2~kfxOCYzRIcXrYE9Gy4~FFpZW1J7Fcsag6SpgwX6G8VVZULi~x0YGKJYuMFNQhpcHlfDIMu05A1s~oRm9FpRodsX473wh1TMJKo12ol63TVUJA__',
        name: 'Syltherine',
        short: 'Stylish cafe chair',
        salePrice: 'Rp 2.500.000',
        orignalPrice: 'Rp 3.500.000'
    },
    {
        img: 'https://s3-alpha-sig.figma.com/img/3ed3/53ed/bdb0310fb379a6b1828809d2c0652533?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SzwKalzzirBCd72uGdhTNzb~G7Id~vJEmUf2ZXQoLrtm8uhQFlr~qYoyM6S5v3HJwVy1KhdcOrnS5KEyF-7yCzU8g-v~vvx1ToXQDSWZGlui0iu5tWMn6PonUIdzUpESiKzB4T81CrN7yVbtAt~iK~IfA6-VHk1sEGjTJhzgUe0vIpCV8yLJ4yDbbct3kcdl4BDSU8OKxLC8KojmhrciDq-7DrNH5HL1R6xfe5bgZdCbPFHLR5eGC6JXyYHM2W3VA5X615saPH4iTt8URJq4w4aTDEUyrc7ewadxJ68OFna71gyEE2-QPbfaVl7yWkx80UqtoY-coyxT8KYxe4bI7g__',
        name: 'Leviosa',
        short: 'Stylish cafe chair',
        salePrice: 'Rp 2.500.000',
        orignalPrice: 'Rp 3.500.000'
    },
    {
        img: 'https://s3-alpha-sig.figma.com/img/2084/99f3/7c62fb49f7d4a1a6a5dc5959b40150ed?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AEJgoQBR9gTOruqtfxmgJ~fW6FnIGkb2ChD6ye8e5n9IQxZHEG-ohmhsUnK5u8sH8wo~t0yWLJb73hduQpTX3nB8PXPKVnUchACIUXzFMi5IH5AmxSZQ0ywSZnIRjAhQM8lVyHsXamZlaPI6vFDW9Jh3YVtGHJ7jC6GQhXyl75zZFLpnDCSrGHx3Q7cZzpK5D56am6CQWWYL3zl4evEzeDPtUD3oqpjVS1z63cRHzfh31fJKDugS-d6quLOCzACzCT7GSpuIEOBg3atXsEJcri~KQU0EvR8azVTXd9Mp-kVwxUeoRFTMcuGzAfplNZt0lxbV5Lu52sJ5jIfK-QoZ1Q__',
        name: 'Lolito',
        short: 'Luxury big sofa',
        salePrice: 'Rp 7.000.000',
        orignalPrice: 'Rp 14.000.000'
    },
    {
        img: 'https://s3-alpha-sig.figma.com/img/1f73/e563/4a5dbc0c29efbae1beca6ab40dd9b598?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KCEADWUgD2ToK0mLYTZZXAFaPWpnPTanDVBZvh2Zz2y3gHHE~icTKo0yJ0j0u7pBxmt-SiiC9QdsW4MVrPVcyWsVLL-fwKtVZ7wfv5jMFN7ITjx0HeRQCRRGlJ8786zGgv0lSgpSvmvaqXCui40fImAnGfUH4ScZyIUY2jb3f2YfTvHYl3iRyA65Qzt2BUy1cK7odl7Rr8BiG7GzPh2yFadXJunhnovQXfJYN-aGOMTDUx0w0aSuCWWcE3ds-~EabDThk9VhmiHAy11wfVQRATkTjWf0HgjTY3xStpv2YlPgAj07idHDTWmWIlgujOfY7XzZtJzmuStl44JIvLxYkg__',
        name: 'Respira',
        short: 'Outdoor bar table and stool',
        salePrice: 'Rp 500.000',
        orignalPrice: ''
    },
    {
        img: 'https://s3-alpha-sig.figma.com/img/50f3/12dc/a7c05024ab4e27374edb12195b6559e2?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aSRHWEF5fPKG-yTYTzEvuijWOqoATFPR0kNTbgw1DsE5slqc1RZ2Npd3LRXKaf4ZnrXmCyYn9acCqLQu3tHY1of7MBV~JWuxGFnSLQDUtacepj0WIIZrh299yt53utZJQU-KqBq-iin~pSLBVt61MKRj4XFEIWCePrI3M33TPCCOB92sjXJ6tnrmY8ePLbJk2uk-TQpKxDaHoe7UAiFg4G6WGLqgZQ6qLBoKfwf5G4R9p2B8OlRkpZJY5joGsTJ6J3L~~nQN8fL6I8i5PedaWQ3jhR6tUhU2xWD7xs2SQckXbX78pZQCoP0CGQHlolPvjWQui2-aGhIna14A1FZ66Q__',
        name: 'Grifo',
        short: 'Night lamp',
        salePrice: 'Rp 1.500.000',
        orignalPrice: ''
    },
    {
        img: 'https://s3-alpha-sig.figma.com/img/b609/6926/ea43a4c55f9e28aa3592f17ff47a4303?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ml8eOtEbhSk17uR6AD0RD3u6YT0zpXAFFKEcAZTdhJQcbQs30F1Kw1ZXSfEoo34xOET5U79YLHwz3DkEQLCow2~G2CPcrcP~Y9CDzSSaJkKtr78-MXAXnfhURucnDcyEAkwQJaptIqEW-XtAicM1z6qJsl11yW~5BVbuQioi9V0eGHdqk00h06oH~DZmddu5O5lf5ee1gv1OuK6AgWts647UImKOuDJfeZGS6FDe9P1DgmbwdjNAiNMOneQainbL95rkRd5JjghLmspXe-nDBy~zeAHofxZEpmrEYD5BB-SHuLlHgrqGuUZqwFrGkhl7SC1OczYlpHRN-Q3Ru50t6Q__',
        name: 'Muggo',
        short: 'Small mug',
        salePrice: 'Rp 150.000',
        orignalPrice: ''
    },
    {
        img: 'https://s3-alpha-sig.figma.com/img/8d34/199d/e77ede2f478b2f26210bd264978981f6?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P1AgBBvxPaOVkoFq-GMK1bu8J-dE9X7CZBt~54uB-cF-hntz7ft~94C8jn0--XVR7cN7ZJgpXS~Rq-oSqiFop1DwMFAVr-ZlMRwVOcRme9iTx9Ex7WHOzADvpEM7GBSX1bvO3JUKABb4H0rV6dibRsq3h7iRz55iNQXktuKv6F-Ch1ezkt8S5SZ5ljtHJpGM4-rYgNieZAIX5zphrGt6mFPYxyfgVahWMturCfQmtU8QRFKjsgtZKlh1vSN1IA-UWrOMs-8SgPlcxv1R29YeahqRth4wb3G~F63khrPnmjMQy8Y-FbaI4Q8MMV9~-gLxCRxrsXtVDTxhWGScHyHEaA__',
        name: 'Pingky',
        short: 'Cute bed set',
        salePrice: 'Rp 7.000.000',
        orignalPrice: 'Rp 14.000.000'
    },
    {
        img: 'https://s3-alpha-sig.figma.com/img/6028/dfe0/3d98b27fb98ee49958d7089f10d39dfe?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k-uhHNULcpQ~g48l10cmHKwL9Jz4QOqlZCZveOdOoxyGvydV4Q6BoLIwC4YMnauiNunGVh7yNLjRT226sQqZObB3NYKNFEKsTrEIrzS82YDdbhZEcGbGvBNmvSjfoi8rsrzJPlnhwnnNyGxryLAr~EBJrZ8OXVvQLX8MYgUb1lW-vV1KMHCq4Kmltt9TGlSDTefL~oBUU7kMrtt7nZeXdpSfiNDSE0ehhbtpTeqFO1K2T2QS4ND6zb16fY28bjX1lF~m6B5nyDtheHJu78Ylb7ftmnzp3ohNAYEIxxql5PjLOi1UNRc1VBdIdh50IjAH7~z9FbJ2ZOylNzl8PQn~WA__',
        name: 'Potty',
        short: 'Minimalist flower pot',
        salePrice: 'Rp 500.000',
        orignalPrice: ''
    },
]


const Blog = () => {
    return (
        <div>
            <PageBg name={'Blog'} />
            <div className="BlogPage w-[90vw] md:w-[80vw] m-auto my-6 flex flex-col lg:flex-row gap-[2vw]">
                <div className="leftBlog w-full lg:w-[70%]">
                    <div className="Cards w-full flex flex-col gap-6">
                        {Blogs.map((me, index) => (
                            <Card4 key={index} img={me.img} title={me.title} desc={me.desc} date={me.date} cate={me.cate} />
                        ))}
                    </div>
                    <div className="ShopPageNums flex gap-3 m-auto w-full justify-center items-center mt-6">
                        {[1, 2, 3, 'Next'].map((num, index) => (
                            <div key={index} className={`numBox p-3 flex cursor-pointer justify-center items-center w-12 h-12 rounded-md ${num === 1 ? 'bg-[#B88E2F] text-white' : 'bg-[#F9F1E7]'}`}>
                                <p className='text-lg'>{num}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rightBlog w-full lg:w-[30%] flex flex-col items-center gap-6">
                    <div className="searchBox flex justify-between border border-gray-400 p-4 items-center rounded-2xl w-full">
                        <input type="text" className='w-full outline-none' placeholder='Search...' />
                        <FaSearch className='cursor-pointer text-xl' />
                    </div>
                    
                    <div className="flex flex-col gap-4 w-full p-4 bg-white shadow-md rounded-lg">
                        <h2 className='text-2xl font-semibold'>Categories</h2>
                        {[
                            { name: 'Crafts', count: 8 },
                            { name: 'Handmade', count: 7 },
                            { name: 'Interior', count: 1 },
                            { name: 'Wood', count: 6 }
                        ].map((category, index) => (
                            <div key={index} className='flex justify-between border-b pb-2'>
                                <p>{category.name}</p><p>{category.count}</p>
                            </div>
                        ))}
                    </div>
                    
                    <div className="flex flex-col gap-4 w-full p-4 bg-white shadow-md rounded-lg">
                        <h2 className='text-2xl font-semibold'>Recent Posts</h2>
                        <div className="recentPosts flex flex-col gap-4">
                            {Products.slice(0, 4).map((me, index) => (
                                <div key={index} className='flex items-center gap-4'>
                                    <Image src={me.img} width={100} height={100} className='h-[100px] rounded-2xl' alt='recentposts' />
                                    <div className="recData">
                                        <p className='text-sm'>{me.short}</p>
                                        <p className='text-xs text-gray-500'>03 Aug 2022</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <TrustComp />
        </div>
    );
};

export default Blog;
