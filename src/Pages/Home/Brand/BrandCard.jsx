
import { Link } from 'react-router-dom';
import { RiMotorbikeFill } from "react-icons/ri";
import './styles.css'
const BrandCard = ({brandCard}) => {

    const { brand , image} = brandCard;

    return (
        <section> 
          
          <div className="card">
  <div className="card-header"> 
    
    

    
    <Link to={`/product/${brand}`}>
           <h1 className=' flex gap-2 justify-center items-center text-2xl mt-3' > <RiMotorbikeFill className='animate-bounce text-4xl' /> <span className=' font-bold text-3xl' > {brand} </span> </h1>
    </Link>
    
    </div>
  
  
  <div className="card-body "> <img  className=' w-96  h-60 rounded-lg shadow-2xl shadow-emerald-500 hover:animate-ping ' src={image} alt="" />  </div>
</div>
          
        </section>
    );
};

export default BrandCard;