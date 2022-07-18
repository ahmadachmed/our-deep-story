import React from "react";

function TableUser({ lists }) {
    return (
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
                {lists.map((item, i) => {
                    return (
                        <tr key={i}>
                            <th>1</th>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td className="space-x-2">
                                <button className="btn btn-outline">
                                    Edit
                                </button>
                                <button className="btn btn-outline btn-error">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default TableUser;
