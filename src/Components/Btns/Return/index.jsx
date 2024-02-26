import { Link } from 'react-router-dom';
import './style.css'
import { FaArrowLeft } from "react-icons/fa";

export default function BtnReturn () {
  return(
    <div className="bnt-return">
      <Link className='link-btn' to={'/'} >
      <FaArrowLeft/>
      </Link>
    </div>
  )
}