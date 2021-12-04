import Link from 'next/link';

const Navbar = () => {
    return (  
        <nav className=" bg-indigo-700 p-4 w-full" >
            <div className="container m-auto flex justify-between">
                <h1 className="text-2xl lg:text-4xl text-gray-50">FutWorld!</h1>
                <div className="lg:w-1/6">
                    <ul className="flex justify-between lg:text-2xl text-white align-center">
                        <Link href="/"><li className="cursor-pointer mr-4">Home</li></Link>
                        <Link href="/fixtures"><li className="cursor-pointer">Fixtures</li></Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;