import React from "react";
import ResponsiveNavLink from "../ResponsiveNavLink";

function Navigation({ auth }) {
    return (
        <div className="navbar bg-base-100 rounded-lg shadow-lg">
            <div className="flex-none">
                <label
                    htmlFor="my-drawer-2"
                    className="btn btn-primary drawer-button lg:hidden"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block w-5 h-5 stroke-current"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </label>
            </div>
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Ods.</a>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className=" cursor-pointer">
                        <p className="btn bg-primary text-base-content hover:bg-base-content hover:text-primary border-none">
                            {" "}
                            {auth}
                        </p>
                    </label>
                    <ul
                        tabIndex="0"
                        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
               
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
                     
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
