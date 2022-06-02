import Image from 'next/image'
import Head from 'next/head'
import Brand from '../../../assets/brand.svg'
import avatar from '../../../assets/avatar.png'


function HeaderComponent() {
    return (
        <div className='header'>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Krona+One&display=optional"
                    rel="stylesheet"
                />
            </Head>
            <div className='brandtxt'>
                <div className='brand'>
                    <Brand />
                </div>
            </div>
            <div className='brandtxt'>
                <div className='brandname'>
                    <div className='brandname-img'>
                        <Image
                            src={avatar}
                            alt="image of avatar"
                            width={32}
                            height={32}

                        />
                    </div>
                    <div>
                        <div className='avatarName'>
                            Luiz Zlochevsky
                        </div>
                        <div className='avatarDados'>
                            meus dados
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default HeaderComponent

