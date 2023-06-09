import React from 'react';

const Footer = () => {
    return (
        <div className='max-w-7xl mx-auto px-[16px] border-t mt-32'>
            <div className='grid grid-cols-1 lg:grid-cols-3 py-10'>
                {/* left/start column */}
                <div>
                    <div>
                        <h2 className='text-4xl font-mono font-extrabold bg-primary text-white px-2 inline-block'>Triolingo</h2>
                        <p className='my-4'>Download Our Mobile App</p>
                        <div className='flex flex-wrap justify-center gap-4'>
                            <img src="https://10minuteschool.com/_next/image/?url=%2Fimages%2Ffooter%2Fgoogle-play-icon.png&w=256&q=75" alt="" />
                            <img src="https://10minuteschool.com/_next/image/?url=%2Fimages%2Ffooter%2Fios-store-icon.png&w=256&q=75" alt="" />
                        </div>
                    </div>
                </div>
                {/* center column */}
                <div className='mt-10 lg:mt-0'>
                    <div className='flex justify-between'>
                        <ul className='flex flex-col gap-y-4'>
                            <li className='font-bold text-xl'>Company</li>
                            <li><a>Career</a></li>
                            <li><a>Join as a instructor</a></li>
                            <li><a>Become a affiliate</a></li>
                            <li><a>Refund policy</a></li>
                            <li><a>Privacy policy</a></li>
                            <li><a>Terms & conditions</a></li>
                        </ul>
                        <ul className='flex flex-col gap-y-4'>
                            <li className='font-bold text-xl'>Others</li>
                            <li><a>Blog</a></li>
                            <li><a>Hand Notes</a></li>
                            <li><a>Offers</a></li>
                            <li><a>Verify Certificate</a></li>
                            <li><a>Free downloads</a></li>
                        </ul>
                    </div>
                </div>
                {/* right/end column */}
                <div className='mt-10 lg:mt-0'>
                    <div className='lg:ml-16'>
                        <h2 className='text-xl font-bold'>Keep up with us at</h2>
                        <p className='my-4'>Contact - 16910</p>
                        <p>SMS - 10MSHelp to 26969 (24X7)</p>
                        <p className='my-4'>Email - support@10minuteschool.com</p>
                        <div className='flex gap-4'>
                            <img src="https://10minuteschool.com/_next/image/?url=%2Fimages%2Ffooter%2Ffacebook.png&w=32&q=75" alt="" />
                            <img src="https://10minuteschool.com/_next/image/?url=%2Fimages%2Ffooter%2Finstagram.png&w=32&q=75" alt="" />
                            <img src="https://10minuteschool.com/_next/image/?url=%2Fimages%2Ffooter%2Flinkedin.png&w=32&q=75" alt="" />
                            <img src="https://10minuteschool.com/_next/image/?url=%2Fimages%2Ffooter%2Fyoutube.png&w=32&q=75" alt="" />
                            <img src="https://10minuteschool.com/_next/image/?url=%2Fimages%2Ffooter%2FTiktok.png&w=32&q=75" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;