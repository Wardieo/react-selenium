import React, { useEffect, useState } from 'react'
import bg from '../assets/bg.jpg'
import img from '../assets/image.jpg'
import arrow from '../assets/Right.png'
import { Link, useParams } from "react-router-dom";
import Axios from 'axios'
import cancel from '../assets/Cancel.png'

const Submit = () => {
    const [data, setData] = useState([])
    const {id} = useParams();

    useEffect(() => {
        Axios.get('http://localhost:3001/submit/'+id)
        .then(resp => setData(resp.data ))
        .catch(err => console.log(err));
    })

    
    

  return (
    <div className='w-full h-full'>
        <div style={{'background-image': `url(${bg})`}} className='bg-no-repeat bg-center bg-cover'>
            <div className='flex mx-48 py-20 justify-center '>
            <img src={img} alt="img" className='h-[600px] items-center rounded-tl-xl rounded-bl-xl' />
            <div className='h-full pt-10 px-10 pb-[132px] justify-between flex items-center w-full relative bg-[#242424] rounded-br-xl rounded-tr-xl '>
                <div className='mt-10 flex flex-col gap-20 text-white'>
                    <div className='flex items-center gap-52'>
                    <div className='flex gap-4 text-[#D0D0D0] text-[10px] items-center'>
                        <button className='bg-[#4A4A4A] px-3 py-1 rounded-sm'>Time in </button>
                        <p>|</p>
                        <button className='hover:border-b-[1px] border-[#DFD46F] items-center duration-100'><Link to="/timeout">Time out</Link></button>
                    </div> 
                    <div className='text-[10px]'>
                        <p>1/25/2024, 1:02 PM</p>
                    </div>
                    </div>
                    <div className='flex gap-20'>
                    <div className='w-[30%] flex flex-col gap-3'>
                        <p className='text-[10px] text-[#D0D0D0]'>Welcome</p>
                        <h1 className='font-bold text-4xl'>Fill the Form for Library Attendance</h1>
                    </div>
                    <div className='flex flex-col ml-14'>
                        <h1 className='text-[35px] font-bold'>Time In</h1>
                        <div className='flex flex-col gap-8 mt-8'>
                        <input type="number" placeholder='USN' className='bg-[#4A4A4A] remove-arrow text-[#929292] text-[11px] pr-36 pl-2 py-4 rounded-md border-[#929292] border-2' />
                        <input type="text" placeholder='Purpose' className='bg-[#4A4A4A] text-[#929292] text-[11px] pr-36 pl-2 py-4 rounded-md border-[#929292] border-2' />
                        <div className='w-24'>
                            <Link to="" className='text-left bg-[#DFD46F] pl-3 py-2 text-[11px] text-black font-bold pr-7 rounded-sm flex gap-3'>Submit <img src={arrow} alt="arrow" /></Link>
                        </div>
                        </div>
                    </div>  
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <div className='bg-white absolute top-16 w-[700px] h-[500px] rounded-md p-4 py-6'>
                <div className='flex justify-between items-center border-b-2 pb-3'>
                    <h1 className='text-xl font-bold'>Student Information</h1>
                    <button className='w-6'><Link to='/timein'><img src={cancel} alt="back" /></Link></button>
                </div>
                {data.map((each, index) => {
                    return(
                    <div className='flex flex-col gap-5 pt-10'>
                        <ul key={index} className='text-xl flex flex-col gap-6'>
                            <li>Name: <span className='font-bold px-3'>{each.name}</span></li>
                            <li>USN: <span className='font-bold px-3'>{each.student_info_id}</span></li>
                            <li>Course: <span className='font-bold px-3'>{each.course}</span></li>
                            <li>Year: <span className='font-bold px-3'>{each.year}</span></li>
                            <li>Department: <span className='font-bold px-3'>{each.department}</span></li>
                        </ul>
                    </div>
                    )
                })}
                <div className='flex flex-col gap-3 pt-14 text-center items-center justify-center'>
                    <Link to="/timein" className='bg-blue-600 px-5 py-1 rounded-md text-white'>Back</Link>
                    <div className='text-[10px]'>
                        <p>Do you have any concern? Please let us know.</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Submit