import Navigation from "@/Components/Dashboard/Navigation";
import Drawer from "@/Layouts/Drawer";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

function Edit(props) {
    console.log("props editUser: ", props);
    return (
        <div>
            <Drawer>
                <Navigation auth={props.auth.user.name} />
                <div className="flex h-full my-5 rounded-lg shadow-lg">
                    <div className="w-full bg-base-100 overflow-y-auto p-5">
                        <div className="flex flex-col md:gap-x-2 gap-y-2">
                            <label className="label">Name</label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="input input-bordered w-full max-w-xs"
                                defaultValue={props.myUser.name}
                            />
                            <label className="label">Email</label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full max-w-xs"
                                defaultValue={props.myUser.email}
                            />
                            <div>
                            <Link
                                href={"/dashboard/user/edit"}
                                as={"button"}
                                className="btn btn-primary mt-2"
                            >
                                Submit
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Drawer>
        </div>
    );
}

export default Edit;
