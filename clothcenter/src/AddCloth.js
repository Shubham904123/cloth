import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { storage } from './firebase';
import Anavbar from './Anavbar';
import { useNavigate } from 'react-router-dom';

export default function AddCloth() {

    var uri = 'http://localhost:1100/'
    var navi = useNavigate();
    var adm = localStorage.getItem("AdminEm")

    useEffect(()=>{
        if(!adm){
            alert("Login First");
            navi("/Adminhome")
        }
    },[])
    const menu = [{ Name: "addidas" },
    { Name: 'allen solly' },
    { Name: 'calvin klein' },
    { Name: 'fabindia' },
    { Name: 'biba' },
    { Name: 'levis' },
    { Name: 'nike' },
    { Name: 'zara' },]

    const [prog, setprog] = useState(0)
    function addf(e) {
        e.preventDefault();
        var d = new FormData(e.currentTarget);
        var fimg = d.get("fimg");
        var fname = d.get("fname").toLowerCase();
        var ftype = d.get("ftype").toLowerCase();
        var men = d.get("men").toLowerCase();
        var fprc = Number(d.get("fprc"));

        console.log(fname)
        console.log(fprc)
        console.log(ftype)
        console.log(fimg)
        console.log(men)

        setprog(1)
        var str = storage.ref("/images/" + fimg.name).put(fimg)
        str.then((succ) => {
            str.snapshot.ref.getDownloadURL().then((url) => {
                console.log(url)
                var obj1 = {
                    fname: fname,
                    ftype: ftype,
                    men: men,
                    fimg: url,
                    fprc: fprc,
                }
                axios.post(uri + "addpro", obj1).then((succ) => {
                    alert(succ.data)
                    setprog(0)
                    e.target.reset()
                })
            })
        })

    }
    return (
        <>
            <Anavbar/>
            <div className='container'>
                <div className='col-md-10 bg4'>
                    <div className='col-md-6 col-sm-8 col-xs-12'>
                        <br />
                        <form encType='multipart/form-data' onSubmit={addf}>
                            <div className="form-group">
                                <input type="text" className="form-control" name="fname" placeholder="Enter Cloth Name" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="fprc" placeholder="Enter Cloth Price" />
                            </div>
                            <div className='form-group'>
                                <select className='form-control' name="ftype">
                                    <option>Select Brand</option>
                                    {menu.map((v) => (
                                        <option value={v.Name} style={{textTransform:"capitalize"}}>{v.Name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="file" className="form-control" name="fimg" accept='image/*' />
                            </div>
                            <div className='form-group'>
                                <select className='form-control' name='men'>
                                    <option value={'men'}>men</option>
                                    <option value={'women'}>women</option>
                                    <option value={'kids'}>kids</option>
                                </select>
                            </div>

                            {prog == 0 ? (
                                <div className="form-group">
                                    <button type="submit" className="btn btn-default">Add Clothes</button>
                                </div>
                            ) : (
                                <>Adding Clothes</>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
