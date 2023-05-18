import logo from '../../../assets/carLogo.png'


const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-gray-800 text-white mx-auto">

       <div>
       <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-8 justify-center items-center mx-auto md:p-8 ms:p-0 '>
       <div>
          <img width="150" height="150" src={logo} alt="" />
          <p>Toy-cars Hub<br />Providing reliable Toy-Cars since 2016</p>
        </div>

        <div className='flex flex-col '>
          <span className="footer-title">Contact </span>
          <a className="link link-hover">Facbook : www.facebook/Toy-CarsHub.com</a>
          <a className="link link-hover">Email :toy-cars-hub@gmail.com</a>
          <a className="link link-hover">Phone : 017xxxxx01</a> 
        </div>

        <div>
        <span className=" footer-title">About Us </span>
         <p className='link link-hover'> Welcome to Toy-Cars-Hub, a leading destination for all things fun and imaginative! Since 2016, we have been delighting children and families in the heart of Barisal with our wide selection of toys, games, and playtime essentials.</p>
        </div>

       </div>
      <div className='border-t mx-auto border-gray-400 mt-8 pt-8 sm:w-full md:w-11/12'>
      <div className='flex justify-center items-center'>
      <p className='text-start'>Copyright ©2023 All rights reserved | This website is developed by Asif</p>
      </div>
      </div>
       
       </div>
      </footer>
    </div>
  );
};

export default Footer;