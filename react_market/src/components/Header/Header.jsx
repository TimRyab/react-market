import LogUser from './LogUser/LogUser';
import NavLinks from './NavLinks/NavLinks';

const Header = () => {
  return (
    <header className='bg-orange-400'>
      <div className='h-[80px] flex justify-between items-center max-w-[1280px] mx-auto px-10'>
      <div className='text-white text-[20px] cursor-default flex'>
            Market
          </div>
        <div className='text-white text-[20px] cursor-default hidden md:block'></div>
        <div className='flex items-center'>
          <NavLinks />
          <LogUser />
        </div>
      </div>
    </header>
  );
};

export default Header;
