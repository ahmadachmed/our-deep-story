import Navigation from "@/Components/Dashboard/Navigation";
import Drawer from "@/Layouts/Drawer";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { useState } from "react";

function User(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isAlert, setIsAlert] = useState(false);

    const handleSubmit = () => {
        const data = {
            name,
            email,
            password,
        };
        Inertia.post("/dashboard/user", data);
        if (!props.errors.name) {
            setIsAlert(false);
            setName("");
            setEmail("");
            setPassword("");
        } else {
            setIsAlert(true);
        }
    };

    console.log(props);

    return (
        <div>
            <Drawer>
                <Navigation auth={props.auth.user.name} />
                {isAlert && (
                    <div className="alert alert-info shadow-lg mt-5">
                        <div>
                            <span>
                                {props.errors.name ||
                                    props.errors.email ||
                                    props.errors.password ||
                                    "Success Add User"}
                            </span>
                        </div>
                    </div>
                )}
                <div className="flex h-full my-5 rounded-lg shadow-lg">
                    <div className="w-full bg-base-100 overflow-y-auto p-5">
                        <div className="flex py-3 flex-col">
                            <h2>Add New User</h2>

                            <div className="flex flex-col mt-2 md:flex-row md:space-x-3 md:space-y-0 space-y-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="input input-bordered w-full"
                                    value={name}
                                    onChange={(name) =>
                                        setName(name.target.value)
                                    }
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="input input-bordered w-full"
                                    value={email}
                                    onChange={(email) =>
                                        setEmail(email.target.value)
                                    }
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    className="input input-bordered w-full"
                                    onChange={(password) =>
                                        setPassword(password.target.value)
                                    }
                                />
                            </div>
                            <div className="flex pt-2 justify-end">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    onClick={() => handleSubmit()}
                                >
                                    Add User
                                </button>
                            </div>
                        </div>
                        <h2 className="m-2">List Users</h2>
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.users || props.users.length > 0 ? (
                                        props.users.map((list, i) => {
                                            return (
                                                <tr key={i}>
                                                    <th>{i + 1}</th>
                                                    <td>{list.name}</td>
                                                    <td>{list.email}</td>
                                                    <td className="space-x-2">
                                                        <Link
                                                            href={
                                                                "/dashboard/user/edit"
                                                            }
                                                            as={"button"}
                                                            data={{
                                                                id: list.id,
                                                            }}
                                                            className="btn btn-outline"
                                                        >
                                                            Edit
                                                        </Link>
                                                        <Link
                                                            href={route(
                                                                "destroy.user"
                                                            )}
                                                            as="button"
                                                            method="post"
                                                            data={{
                                                                id: list.id,
                                                            }}
                                                            className="btn btn-outline btn-error"
                                                        >
                                                            Delete
                                                        </Link>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    ) : (
                                        <p>Data tidak ditemukan</p>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Drawer>
        </div>
    );
}

export default User;
