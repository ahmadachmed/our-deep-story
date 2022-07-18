import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import Drawer from '@/Layouts/Drawer';
import { Navbar } from 'react-bootstrap';
import Navigation from '@/Components/Dashboard/Navigation';

export default function Dashboard(props) {
    console.log(props)
    return (
        // <Authenticated
        //     auth={props.auth}
        //     errors={props.errors}
        //     header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        // >
        //     <Head title="Dashboard" />
        //     <div className="py-12">
        //         <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        //             <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        //                 <div className="p-6 bg-white border-b border-gray-200">You're logged in!</div>
        //             </div>
        //         </div>
        //     </div>
        // </Authenticated>
        <div>
            <Drawer>
                <Navigation auth={props.auth.user.name}/>
                <div className='flex h-full my-5 rounded-lg shadow-lg'>
                    <div className='flex w-full bg-base-100 h-full justify-center items-center'>
                        <div>
                            ODS.
                        </div>
                    </div>
                </div>
                
            </Drawer>
        </div>
    );
}
