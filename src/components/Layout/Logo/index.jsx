import { Link } from 'react-router-dom';
import { FcProcess } from "react-icons/fc";

const Logo = () => {
    return (
      <div className='flex items-center'>
          <Link to="/" className='flex items-center'>
              <FcProcess size={40} />
              <h1 className='ms-2 text-2xl hover:font-semibold'>ReBuy</h1>
          </Link>
      </div>
    )
}

export default Logo;
