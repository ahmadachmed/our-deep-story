import React from 'react';
import Drawer from '@/Layouts/Drawer';
import Navigation from '@/Components/Dashboard/Navigation';

export default function Dashboard(props) {
    console.log(props)
    return (
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
