import axios from 'axios'
import React, { cloneElement } from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Unavbar from './Unavbar'

export default function Home() {

    var navi = useNavigate()

    const menu = [{ Img: 'https://pngimg.com/uploads/adidas/small/adidas_PNG14.png', Name: "addidas" },
    { Img: 'https://imagescdn.allensolly.com/img/app/brands/Allensolly/as_logo.png', Name: 'allen solly' },
    { Img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/CK_Calvin_Klein_logo.svg/722px-CK_Calvin_Klein_logo.svg.png?20111216011954', Name: 'calvin klein' },
    { Img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Fabindia_logo.svg/330px-Fabindia_logo.svg.png', Name: 'fabindia' },
    { Img: 'https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/logo.png', Name: 'biba' },
    { Img: 'https://blog.logomyway.com/wp-content/uploads/2021/01/levi-logo-PNG.jpg', Name: 'levis' },
    { Img: 'https://i.pinimg.com/474x/08/80/53/08805343f5270857359688d7212d2850.jpg', Name: 'nike' },
    { Img: 'https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-new/subhome-xmedia-42-2//w/1921/IMAGE-landscape-default-fill-fabdba98-8ae6-42cf-922e-8a700458d96d-default_0.jpg?ts=1666258245911', Name: 'zara' },]


    function getcat(x) {
        console.log(x.Name)
        localStorage.setItem('FType', x.Name)
        navi("/clothes")
    }
    return (
        <>
            <Unavbar />
            <div className="bg1">
                <div className='container' style={{ marginBottom: 30 }}>
                    <div className="d-flex-center f-fmly">
                        <h3 className='white'>Welcome To Our Cloth Store</h3>
                        <a link = "" >Explore Out Beautiful Cothes</a>
                    </div>
                </div>

                <div className='bg3'>
                    <div className='container-fluid'>
                        <div className='col-xs-12'>
                            <h2 className='f-fmly text-center' style={{ margin: '40px 0' }}>Choose What You Want To Wear...</h2>
                            <h4 className='f-fmly text-center' style={{ margin: '40px 0' }}>Look Attrractive by Wearing Our Branded Clothes</h4>
                            {menu.map((v) => (
                                <div className='col-md-3 col-sm-4 col-xs-12 f-fmly bg6' style={{ marginBottom: 30, cursor: 'pointer' }} onClick={() => getcat(v)}>
                                    <div className='' style={{ boxShadow: '0 0 3px rgba(0,0,0,.5', borderRadius: '5px', height: 220, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 30 }}>
                                        <img src={v.Img} className='img-responsive' style={{ height: 100, width: 180}} />
                                        <h3>{v.Name}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}