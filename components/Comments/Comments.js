import styles from './Comments.module.css'
import comment1 from '../../public/Images/c1.png'
import comment2 from '../../public/Images/c2.png'
import comment3 from '../../public/Images/c3.png'
import Image from 'next/image';

function Comments() {
    return (
        <div className='p-4 lg:p-10  text-gray-800 bg-sky-100'>
            <h2 className='mb-10 text-4xl font-bold my-4'>User Feedback </h2>
            <hr className='h-1 mb-8' />

            <div className=' grid grid-cols-1 lg:grid-cols-3 place-items-center'>
                <div className=''>
                    <div className='relative max-w-xs'>
                        <div className='bg-white  rounded-md p-8'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde odio eum illum. Quos at vitae illo ducimus esse excepturi inventore nobis quia aliquid, atque quod mollitia amet quibusdam nesciunt ab.
                        </div>
                        <div className={`absolute -bottom-6 left-24 ${styles.triangle}`}>
                        </div>
                    </div>

                    <div className='mt-8 flex justify-start items-center gap-4'>
                        <Image src={comment1}></Image>
                        <div >
                            <p>From Dhaka</p>
                            <h4 className=' font-bold text-lg'>Asraf Khan</h4>
                        </div>
                    </div>
                </div>

                <div className='mt-16'>
                    <div className='relative max-w-xs'>
                        <div className='bg-white  rounded-md p-8'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde odio eum illum. Quos at vitae illo ducimus esse excepturi inventore nobis quia aliquid, atque quod mollitia amet quibusdam nesciunt ab.
                        </div>
                        <div className={`absolute -bottom-6 left-24 ${styles.triangle}`}>
                        </div>
                    </div>

                    <div className='mt-8 flex justify-start items-center gap-4'>
                        <Image src={comment2}></Image>
                        <div >
                            <p>From Khulna</p>
                            <h4 className=' font-bold text-lg'>Tanvir Rahman</h4>
                        </div>
                    </div>
                </div>

                <div className='mt-16 lg:mt-0'>
                    <div className='relative max-w-xs'>
                        <div className='bg-white  rounded-md p-8'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde odio eum illum. Quos at vitae illo ducimus esse excepturi inventore nobis quia aliquid, atque quod mollitia amet quibusdam nesciunt ab.
                        </div>
                        <div className={`absolute -bottom-6 left-24 ${styles.triangle}`}>
                        </div>
                    </div>

                    <div className='mt-8 flex justify-start items-center gap-4'>
                        <Image src={comment3}></Image>
                        <div >
                            <p>From Feni</p>
                            <h4 className=' font-bold text-lg'>Arafat Rahman</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comments;