import { Link } from "@inertiajs/inertia-react";
import React from "react";

function Drawer({ children }) {
    return (
        <div className="drawer drawer-mobile bg-base-200 rounded shadow-lg">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col m-5">
                {/* <!-- Page content here --> */}
                {children}
            </div>

            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}

                    <div className="flex justify-end lg:hidden">
                        <label htmlFor="my-drawer-2"  className="btn btn-square btn-outline">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </label>
                    </div>
                    <li>
                        <Link href="/dashboard/user"> User Management</Link>
                    </li>
                    <li>
                    <Link href="/dashboard"> Banner Management</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Drawer;
