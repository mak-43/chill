import React, { Children } from 'react';
import { NavLink } from "react-router-dom"

const Navbar = ({children}) => {
    return (
        <div>
            <div class="drawer">
                <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col">
                    {/* <!-- Navbar --> */}
                    <div class="w-full navbar bg-base-300">
                        <div class="flex-none lg:hidden">
                            <label for="my-drawer-3" class="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div class="flex-1 px-2 mx-2 text-primary">CHILL</div>
                        <div class="flex-none hidden lg:block">
                            <ul class="menu menu-horizontal">
                                {/* <!-- Navbar menu content here --> */}

                                <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                                <li><NavLink to='/analytic'>Analytic</NavLink></li>

                            </ul>
                        </div>
                    </div>
                    {/* <!-- Page content here --> */}
                   {children}
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-3" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                        {/* <!-- Sidebar content here --> */}
                        <div className='flex justify-around items-center my-5'>
                       
                            <p className='text-violet-600 font-bold text-primary'>CHILL</p>
                            <label for="my-drawer-3" class="btn btn-sm btn-circle  ">✕</label>
                        </div>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                        <li><NavLink to='/signin'>Sign In</NavLink></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Navbar;