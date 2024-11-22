
import Image from "next/image";
import Link from "next/link";

const Header = () => {

    return (
        <>
            <header className="hidden lg:flex h-[54px] bg-[#F7F7F7] pl-[64px] pr-[62px]
             items-center border-b border-[#000000]">
                <div className="h-[30px] w-full text-[14px] text-[#000000] 
                flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <span>Phone Number: 956742455678</span>
                        <span className="border border-[#676767] h-4"></span>
                        <span>Email: info@ddsgnr.com</span>
                    </div>
                    
                        <Image
                            src={"/image/Social.png"} alt="" width={132} height={24}
                        />
                </div>
            </header>

            <div className="h-[72px] bg-[#F7F7F7] px-[20px] lg:px-[64px] border-b border-[#000000] flex items-center justify-between">
                <Image
                    src={"/image/Column.png"} alt="" width={130.6} height={30.38} />

                <div className="hidden lg:flex items-center justify-between w-full">
                    <ul className="flex items-center justify-around text-[16px] w-[910px]">
  <li><Link href={"#home"}>Home</Link></li>
 <li><Link href={"#courses"}>Courses</Link></li>
 <li><Link href={"#services"}>Services</Link></li>
  <li><Link href={"#achievement"}>Achievement</Link></li>
  <li><Link href={"#team"}>About Us</Link></li>
 <li><Link href={"#testimonial"}>Testimonial</Link></li> <li>
                            <button className="px-[20px] py-[10px] border border-black rounded">
                                Login </button>
                        </li><li> <button className="px-[26px] py-[10px] bg-black text-[#FFFFFF] rounded">
                                Sign Up
                            </button></li></ul></div> </div> </>
    );
};

export default Header;