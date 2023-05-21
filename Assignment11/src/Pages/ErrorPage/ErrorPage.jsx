import useTitlt from '../../Hook/useHook';
import img from '../../assets/not.webp'

const ErrorPage = () => {
    useTitlt('404 Not Found')
    return (
        <div className='h-full w-1/2 flex justify-center items-center mx-auto mt-20 flex-col'>
      
       <div className="text-5xl font-bold">Opps!</div>
       <div className="text-5xl">404 not found</div>
       <img src={img} alt="" />
    </div>
        
    );
};

export default ErrorPage;