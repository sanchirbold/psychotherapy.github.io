import React from 'react'

export default function RapistDetail({isShown, setIsShown}) {
    const doClose  = () => {
        setIsShown(false)
    }
    return isShown && (
        <div className='popup_modal'>
            <div className='popup_modal-content py-[30px] flex flex-col items-center w-[500px]'>
                <img alt='' className='w-[400px]' src={require(`../../../../public/images/${isShown?.profile}`).default}/>
                <div className='flex flex-row items-center w-[400px]'>
                    <div>Нэр: {isShown?.firstname}</div>
                    <div className='ml-[8px]'>Овог: {isShown?.lastname}</div>
                </div>
                <div className=' w-[400px]'>Тухай: {isShown?.description}</div>
                <div className=' w-[400px]'>Нас: {isShown?.age}</div>
                <div className=' w-[400px]'>Утас: {isShown?.phone}</div>
                <div className=' w-[400px]'>Хаяг: {isShown?.address}</div>
                <div className='w-[400px] flex justify-end' onClick={() => doClose()}>хаах</div>
            </div>
        </div>
    )
}
