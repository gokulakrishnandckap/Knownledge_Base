import React from 'react'
import mainLogo from "../../assets/images/mainlogo.png"


export default function SideNavLarge(props) {


    
    return (
        <div className='bg-primary h-screen w-[220px]'>

            <div>
                <img src={mainLogo} alt="" srcset="" className='max-w-md m-auto mt-4' />
            </div>


            <div className='bg-slate-300 h-6 w-6 rounded-full absolute mt-2 left-[175px]'>
                <span class="material-symbols-outlined cursor-pointer" onClick={props.buttonClicked}>
                    chevron_left
                </span>
            </div>
            <div className='mt-8 flex items-center ml-3'>
                <span class="material-symbols-outlined text-white">
                    group
                </span>
                <p className='text-xl font-bold p-2 text-white'>Dckap Te...</p>
                <span class="material-symbols-outlined text-white">
                    expand_more
                </span>
            </div>
            <div className=' ml-4 space-y-3 mt-64'>
                <div className='box-border border-2 h-8 w-36'>
                    <div className='bg-white h-5 w-5 rounded-full flex items-center mt-1 space-x-4 ml-5'  >
                        <span class="material-symbols-outlined font-bold text-textPrimary "  >
                            add
                        </span>
                        <span className='text-white text-lg font-bold'>Add</span>
                    </div>
                </div>
                <div className='box-border border-2 h-8 w-36'>
                    <span class="material-symbols-outlined font-bold text-white ">
                        notifications
                    </span>
                    <span className='text-white text-lg font-bold'>notifications</span>

                </div>
                <div className='box-border border-2 h-8 w-36'>
                    <span class="material-symbols-outlined font-bold text-white ">
                        delete
                    </span>
                    <span className='text-white text-lg font-bold'>delete</span>
                </div>
                <div className='box-border border-2 h-8 w-36'>
                    <span class="material-symbols-outlined font-bold text-white ">
                        Settings
                    </span>
                    <span className='text-white text-lg font-bold'>Settings</span>
                </div>

            </div>
        </div>
    )
}
