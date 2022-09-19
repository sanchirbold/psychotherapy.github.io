import React, { useState, useEffect, useRef } from 'react'
import {BiNews, BiPencil} from 'react-icons/bi'
import {GiThink} from 'react-icons/gi'
import {FaDiscourse} from 'react-icons/fa'
import {AiFillDelete} from 'react-icons/ai'
import {IoMdAddCircleOutline} from 'react-icons/io'
import {GrUserAdd} from 'react-icons/gr'
import {MdOutlineLibraryAdd} from 'react-icons/md'
import {BsFillImageFill} from 'react-icons/bs'
import axios from 'axios'
import {Editor} from '@tinymce/tinymce-react'

const menu =  [
    {
        title: 'Мэдээ',
        icon: <BiNews/>
    },
    {
        title: 'Слайдэр',
        icon: <BsFillImageFill/>
    },
    {
        title: 'Сэтгэл судлаачид',
        icon: <GiThink/>
    },
    {
        title: 'Сургалт',
        icon: <FaDiscourse/>
    }
]

export default function Dashboard() {
    const [ selectedMenu, setSelectedMenu] = useState(0)
    const [news, setNews] = useState([])
    const [rapist, setRapist] = useState([]) 
    const [courseNews, setCourseNews] = useState([])
    const [sliders, setSliders] = useState([])
    const [addNews, setAddNews] = useState(false)
    const [editingNewsId, setEditingNewsId] = useState(null)
    const [darkMode, setDarkMode] = useState(null)
    const [deletePostId, setDeletePostId] = useState(null)
    const [editingNews, setEditingNews] = useState(null)
    const [editingSlider, setEditingSlider] = useState(null)
    const [title, setTitle] = useState()
    const [content, setContent] = useState()
    const [link, setLink] = useState()
    const [selectedFile, setSelectedFile] = useState()
    const [selectSlider, setSelectSlider] = useState()
    const [preview, setPreview] = useState()
    const [previewSlider, setPreviewSlider] = useState()
    
    const editorRef = useRef(null);

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }

    const onSelectSlider = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectSlider(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectSlider(e.target.files[0])
    }
    
    const catName = (e) => {
        if(e === 1){
            return(
                <p>Өсвөр нас</p>
            )
        }
        else if(e === 2){
            return(
                <p>Харилцаа</p>
            )
        }
        else if(e === 3){
            return(
                <p>Гэр бүл</p>
            )
        }
    }

    const onFileUploadSlider = () => { 
        // Create an object of formData 
        const formDataSlider = new FormData(); 

        // Update the formData object 
        formDataSlider.append('file', selectSlider);
        formDataSlider.append('filename', selectSlider.name );
        formDataSlider.append('link', link );

        // Request made to the backend api 
        // Send formData object 
        axios.post(`api/post/slider/${editingSlider}`, {formDataSlider})
            .then(function (response) {
                    
                }
            )
            .catch(function (err) {
                console.log(err)
            })
    };

    const onFileUpload = () => { 
        // Create an object of formData 
        const formData = new FormData(); 

        // Update the formData object 
        formData.append('file', selectedFile);
        formData.append('filename', selectedFile.name );
        formData.append('title', title );
        formData.append('content', content );

        // Request made to the backend api 
        // Send formData object 
        if(editingNewsId){
            axios.post(`api/post/newsupdate/${editingNewsId}`, {formData})
            .then(function (response) {
                    
                }
            )
            .catch(function (err) {
                console.log(err)
            })
        }else{
            axios.post('api/post/news', {formData})
            .then(function (response) {
                    
                }
            )
            .catch(function (err) {
                console.log(err)
            })
        }
    };

    function handleChange(event) {
        setTitle(event.target.value)
    }

    function handleChangeContent(event) {
        setContent(event.target.value)
    }

    function handleChangeLink(event) {
        setLink(event.target.value)
    }
  
    useEffect(() => {
      axios.get(`/api/get/courses`).then(res => {
        setCourseNews(res.data)
      })
    },[])

    useEffect(() => {
        axios.get('/api/get/therapist').then(res => {
            setRapist(res.data)
        })
    },[])
  
    useEffect(() => {
      axios.get('/api/get/news').then(res => {
        setNews(res.data)
      })
    }, [])

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    useEffect(() => {
        if (!selectSlider) {
            setPreviewSlider(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectSlider)
        setPreviewSlider(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectSlider])

    useEffect(() => {
        if(editingNewsId){
            const fetchNews = async () => {
                await axios.get(`/api/get/news/${editingNewsId}`).then(res => {
                    setEditingNews(res.data[0])
                })
              }
              fetchNews()
        }
    },[editingNewsId])
      
    useEffect(() => {
        if(JSON.parse(localStorage.getItem('mode'))){
        setDarkMode(true)
        }else{
        setDarkMode(false)
        }
    }, [JSON.parse(localStorage.getItem('mode'))])

    useEffect(() => {
        axios.get('/api/get/sliders').then(res => {
          setSliders(res.data)
        })
    }, [])

    const deleteNews = () => {
        if(deletePostId){
            axios.post(`/api/delete/news/${deletePostId}`)
            .then(res => {
                
            })
            .catch(error => {
                console.log(error)
            })
        }
    }

    return JSON.parse(localStorage.getItem('loggedUser'))?.Role === 'Admin' ? (
        <div className='flex flex-row'>
            <div className='max-w-[250px] w-full h-screen'>
                <div className='text-[#3D5170] text-[16px] h-[60px] border-b border-[#335DFF] flex items-center justify-center font-medium'>Админ Дашбоард</div>
                {
                    menu.map((data, index) => {
                        return(
                            <div onClick={() => setSelectedMenu(index)} key={index} className={`h-[50px] flex pl-[25px] flex-row z-0 items-center cursor-pointer relative ${selectedMenu === index ? 'text-[#007BFF]' : 'text-[#3D5170]'}`}>
                                {data.icon}<div className='ml-[15px]'>{data.title}</div>
                                {selectedMenu === index && <span className='w-[2px] h-full absolute z-10 top-0 left-0 bg-[#335DFF]'/>}
                            </div>
                        )
                    })
                }
            </div>
            <div className='w-full bg-white'>
                <div className='h-[60px] shadow-md w-full'>
                    <p className='text-[20px] font-medium pt-[15px] ml-[15px]'>{JSON.parse(localStorage.getItem('loggedUser'))?.name}</p>
                </div>
                <div className='bg-[#F5F7F9] shadow-inner h-full p-[25px]'>
                    {
                        selectedMenu === 0
                        ?
                        <div>
                            <div className='flex flex-row w-full justify-between'>
                                <div className='text-[15px] font-medium'>Бүх постууд : {news.length === 0 ? null : news.length}</div>
                                <IoMdAddCircleOutline onClick={() => setAddNews(true)} className='cursor-pointer' size={30}/>
                                {
                                    addNews &&
                                    <div className='popup_modal'>
                                        <form method="post" action="api/post/news" encType="multipart/form-data" className='popup_modal-content flex flex-col p-[30px] rounded-[10px]'>
                                            <input maxLength={100} value={title} onChange={handleChange} name="title" type={'text'} placeholder='Энд дарж бичнэ үү.' className='w-full mb-[20px] h-[42px] border border-[#00121E1F] rounded-[4px] bg-white px-[16px]'/>
                                            {/* <input value={content} onChange={handleChangeContent} name="content" type={'text'} placeholder='Энд дарж бичнэ үү.' className='w-full h-[42px] border border-[#00121E1F] rounded-[4px] bg-white px-[16px] mt-[8px]'/> */}
                                            <Editor
                                                tagName='content'
                                                textareaName='content'
                                                apiKey={"d8002ouvvak8ealdsmv07avyednf4ab12unnpjf1o2fjshj7"}
                                                onInit={(evt, editor) => (editorRef.current = editor)}
                                                onEditorChange={(e) => {
                                                    setContent(e);
                                                }}
                                                value={content}
                                                init={{
                                                    convert_urls: false,
                                                    valid_elements:
                                                    "a[href|target=_blank],strong/b,em/i,br,li,ol,ul,span,br",
                                                    extended_valid_elements: [  
                                                    "p[style|class=tinymce-p]",
                                                    "li[style|class=tinymce-p]",
                                                    "ol[style|class=tinymce-ol]",
                                                    "ul[style|class=tinymce-ul]",
                                                    "span[style|class=tinymce-span]",
                                                    ],
                                                    height: 200,
                                                    menubar: false,
                                                    plugins: ["link"],
                                                    forced_root_block: 'div',
                                                    force_p_newlines : false,
                                                    force_br_newlines : true,
                                                    convert_newlines_to_brs : false,
                                                    remove_linebreaks : true, 
                                                    toolbar:
                                                    "bold italic | bullist numlist link | alignleft aligncenter " +
                                                    "alignright alignjustify | outdent indent | " +
                                                    "undo redo",
                                                }}
                                            />
                                            <div className='mt-[20px]'>
                                                <label htmlFor="file-upload"  className="custom-file-upload">
                                                    {
                                                        selectedFile
                                                        ?
                                                        <div className="text-[#00121E66] text-[15px] font-bold h-[24px]">Дахин сонгох</div>
                                                        :
                                                        <div style={{backgroundColor: 'rgba(0, 0, 0, 0.08)', border: '1.5px dashed rgba(0, 18, 30, 0.12)'}} className="w-full h-[130px] cursor-pointer rounded-[4px] mt-[8px] flex justify-center items-center">
                                                            
                                                            <div>
                                                                <div className="text-[#00121E66] text-[15px] font-bold h-[24px]">Файл оруулах</div>
                                                                <div className="text-[#9A9FB4] text-[12px] font-inter">SVG, PNG, PDF, JPEG</div>
                                                            </div>
                                                        </div>
                                                    }
                                                </label>
                                                <input hidden id='file-upload' type='file' name="file" onChange={onSelectFile} />
                                                {selectedFile &&  <img className='w-[300px]' src={preview} /> }
                                            </div>
                                            <div className='w-full mt-[32px]'>
                                                <button type="submit" onClick={onFileUpload} style={{boxShadow: '4px 12px 32px rgba(0, 114, 188, 0.4), 0px 2px 16px rgba(0, 114, 188, 0.3), 0px 6px 8px rgba(0, 114, 188, 0.2)'}} className='w-[97px] h-[44px] bg-[#0072BC] rounded-[6px] text-white'>Нийтлэх</button>
                                            </div>
                                            <p className=' mt-[20px] cursor-pointer w-[50px] p-[6px] rounded-[4px] border text-center' onClick={() => setAddNews(false)}>хаах</p>
                                        </form>
                                    </div>
                                }
                                {
                                    editingNewsId &&
                                    <div className='popup_modal'>
                                        <form method="post" action={`api/post/newsupdate/${editingNewsId}`} encType="multipart/form-data" className='popup_modal-content flex flex-col p-[30px] rounded-[10px]'>
                                            <input defaultValue={editingNews?.title} onChange={handleChange} name="title" type={'text'} placeholder='Энд дарж бичнэ үү.' className='w-full h-[42px] border border-[#00121E1F] rounded-[4px] bg-white px-[16px]'/>
                                            <input defaultValue={editingNews?.content} onChange={handleChangeContent} name="content" type={'text'} placeholder='Энд дарж бичнэ үү.' className='w-full h-[42px] border border-[#00121E1F] rounded-[4px] bg-white px-[16px] mt-[8px]'/>
                                            {/* <Editor
                                                tagName='content'
                                                textareaName='content'
                                                apiKey={"d8002ouvvak8ealdsmv07avyednf4ab12unnpjf1o2fjshj7"}
                                                onInit={(evt, editor) => (editorRef.current = editor)}
                                                onEditorChange={(e) => {
                                                    setContent(e);
                                                }}
                                                value={editingNews?.content}
                                                init={{
                                                    convert_urls: false,
                                                    valid_elements:
                                                    "a[href|target=_blank],strong/b,em/i,br,li,ol,ul,span,br",
                                                    extended_valid_elements: [  
                                                    "p[style|class=tinymce-p]",
                                                    "li[style|class=tinymce-p]",
                                                    "ol[style|class=tinymce-ol]",
                                                    "ul[style|class=tinymce-ul]",
                                                    "span[style|class=tinymce-span]",
                                                    ],
                                                    height: 200,
                                                    menubar: false,
                                                    plugins: ["link"],
                                                    toolbar:
                                                    "bold italic | bullist numlist link | alignleft aligncenter " +
                                                    "alignright alignjustify | outdent indent | " +
                                                    "undo redo",
                                                }}
                                            /> */}
                                            <div>
                                                <label htmlFor="file-upload"  className="custom-file-upload">
                                                    {
                                                        selectedFile
                                                        ?
                                                        <div className="text-[#00121E66] text-[15px] font-bold h-[24px]">Файл оруулах</div>
                                                        :
                                                        <div style={{backgroundColor: 'rgba(0, 0, 0, 0.08)', border: '1.5px dashed rgba(0, 18, 30, 0.12)'}} className="w-full h-[130px] cursor-pointer rounded-[4px] mt-[8px] flex justify-center items-center">
                                                            
                                                            <div>
                                                                <div className="text-[#00121E66] text-[15px] font-bold h-[24px]">Файл оруулах</div>
                                                                <div className="text-[#9A9FB4] text-[12px] font-inter">SVG, PNG, PDF, JPEG</div>
                                                            </div>
                                                        </div>
                                                    }
                                                </label>
                                                <input hidden id='file-upload' type='file' name="file" onChange={onSelectFile} />
                                                {selectedFile &&  <img src={preview} /> }
                                            </div>
                                            <div className='w-full mt-[32px]'>
                                                <button type="submit" onClick={onFileUpload} style={{boxShadow: '4px 12px 32px rgba(0, 114, 188, 0.4), 0px 2px 16px rgba(0, 114, 188, 0.3), 0px 6px 8px rgba(0, 114, 188, 0.2)'}} className='w-[97px] h-[44px] bg-[#0072BC] rounded-[6px] text-white'>Нийтлэх</button>
                                            </div>
                                            <p className=' mt-[20px] cursor-pointer w-[50px] p-[6px] rounded-[4px] border text-center' onClick={() => setEditingNewsId(null)}>хаах</p>
                                        </form>
                                    </div>
                                }
                            </div>
                            <div className='w-full mt-[30px] bg-white rounded-[10px] shadow-md'>
                                <table className="table-auto w-full">
                                    <thead>
                                        <tr className='h-[40px]'>
                                            <th className='w-2/3 text-center'>Гарчиг</th>
                                            <th className='w-1/9 text-center'>Нийтлэгдсэн өдөр</th>
                                            <th className='pr-[10px] text-center'>Үйлдэл</th>
                                        </tr>
                                    </thead>
                                    <tbody className='w-full'>
                                        {
                                            news.map((data, index) => {
                                                return(
                                                    <tr className='w-full h-[36px] border-t border-[#808080]' key={index}>
                                                        <td className='w-2/3 px-[20px]'>{data.title}</td>
                                                        <td className='w-1/3 text-center'>{data.created_at}</td>
                                                        <td className='text-center flex flex-row py-[10px] justify-evenly'>
                                                            <BiPencil onClick={() => setEditingNewsId(data.id)} className='cursor-pointer' color='black'/>
                                                            <AiFillDelete onClick={() => setDeletePostId(data.id)} className='cursor-pointer' color='red'/>
                                                        </td>
                                                        {
                                                            deletePostId &&
                                                            <div className='popup_modal'>
                                                                <div className='popup_modal-content flex flex-row justify-evenly p-[30px] rounded-[10px]'>
                                                                    <div className='rounded-[6px] hover:bg-brand hover:text-white text-[16px] cursor-pointer p-[10px] border' onClick={() => setDeletePostId(null)}>Болих</div>
                                                                    <div className='rounded-[6px] hover:bg-brand hover:text-white text-[16px] cursor-pointer p-[10px] border' onClick={() => {
                                                                        deleteNews()
                                                                        window.location.reload(false)
                                                                    }}>Устгах</div>
                                                                </div>
                                                            </div>
                                                        }
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        :
                        selectedMenu === 2
                        ?
                        <div>
                            <div className='flex flex-row w-full justify-between'>
                                <div className='text-[15px] font-medium'>Сэтгэл судлаачид : {rapist.length === 0 ? null : rapist.length}</div>
                                <GrUserAdd className='cursor-pointer' size={25}/>
                            </div>
                            <div className='w-full mt-[30px] bg-white rounded-[10px] shadow-md'>
                                <table className="table-auto w-full">
                                    <thead>
                                        <tr className='h-[40px]'>
                                            <th className='text-center'>Нэр</th>
                                            <th className='text-center'>Овог</th>
                                            <th className='text-center'>Утасны дугаар</th>
                                            <th className='text-center'>Нас</th>
                                            <th className='text-center'>Хаяг</th>
                                            <th className='text-center'>Үйлдэл</th>
                                        </tr>
                                    </thead>
                                    <tbody className='w-full'>
                                        {
                                            rapist.map((data, index) => {
                                                return(
                                                    <tr className='w-full h-[36px] border-t border-[#808080]' key={index}>
                                                        <td className='text-center'>{data.firstname}</td>
                                                        <td className='text-center'>{data.lastname}</td>
                                                        <td className='text-center'>{data.phone}</td>
                                                        <td className='text-center'>{data.age}</td>
                                                        <td className='text-center'>{data.address}</td>
                                                        <td className='text-center flex flex-row py-[10px] justify-evenly'>
                                                            <BiPencil className='cursor-pointer' color='black'/>
                                                            <AiFillDelete className='cursor-pointer' color='red'/>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        :
                        selectedMenu === 3
                        ?
                        <div>
                            <div className='flex flex-row w-full justify-between'>
                                <div className='text-[15px] font-medium'>Сургалтууд : {courseNews.length === 0 ? null : courseNews.length}</div>
                                <MdOutlineLibraryAdd className='cursor-pointer' size={30}/>
                            </div>
                            <div className='w-full mt-[30px] bg-white rounded-[10px] shadow-md'>
                                <table className="table-auto w-full">
                                    <thead>
                                        <tr className='h-[40px]'>
                                            <th className='text-center'>Гарчиг</th>
                                            <th className='text-center'>Төрөл</th>
                                            <th className='text-center'>Нийтлэгдсэн өдөр</th>
                                            <th className='text-center'>Үйлдэл</th>
                                        </tr>
                                    </thead>
                                    <tbody className='w-full'>
                                        {
                                            courseNews.map((data, index) => {
                                                return(
                                                    <tr className='w-full h-[36px] border-t border-[#808080]' key={index}>
                                                        <td className='text-center'>{data.title}</td>
                                                        <td className='text-center'>{catName(data.category_id)}</td>
                                                        <td className='text-center'>{data.created_at}</td>
                                                        <td className='text-center flex flex-row py-[10px] justify-evenly'>
                                                            <BiPencil className='cursor-pointer' color='black'/>
                                                            <AiFillDelete className='cursor-pointer' color='red'/>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        :
                        selectedMenu === 1
                        ?
                        <div>
                            <div className='flex flex-row w-full justify-between'>
                                <div className='text-[15px] font-medium'>Бүх слайдэр : {sliders.length === 0 ? null : sliders.length}</div>
                                {/* <MdOutlineLibraryAdd className='cursor-pointer' size={30}/> */}
                            </div>
                            <div className='mt-[30px] bg-white flex p-[30px] flex-row gap-4 rounded-[10px] shadow-md'>
                                {
                                    sliders.map((data, index) => {
                                        return(
                                            <div key={index}>
                                                <img onClick={() => setEditingSlider(data.id)} className='w-[200px] h-[140px] object-cover cursor-pointer border rounded-[8px]' alt='' src={require(`../../../../public/images/sliders/${data.image}`).default}/>
                                            </div>
                                        )
                                    })
                                }
                                {
                                    editingSlider &&
                                    <div className='popup_modal'>
                                        <form method="post" action={`api/post/slider/${editingSlider}`} encType="multipart/form-data" className='popup_modal-content flex flex-col p-[30px] rounded-[10px]'>  
                                            <input value={link} onChange={handleChangeLink} name="link" type={'text'} placeholder='Энд линк оруулна уу.' className='w-full h-[42px] border border-[#00121E1F] rounded-[4px] bg-white px-[16px]'/>
                                            <div className='mt-[20px]'>
                                                <label htmlFor="file-upload"  className="custom-file-upload">
                                                    {
                                                        selectSlider
                                                        ?
                                                        <div className="text-[#00121E66] text-[15px] font-bold h-[24px]">Дахин сонгох</div>
                                                        :
                                                        <div style={{backgroundColor: 'rgba(0, 0, 0, 0.08)', border: '1.5px dashed rgba(0, 18, 30, 0.12)'}} className="w-full h-[130px] cursor-pointer rounded-[4px] mt-[8px] flex justify-center items-center">
                                                            
                                                            <div>
                                                                <div className="text-[#00121E66] text-[15px] font-bold h-[24px]">Файл оруулах</div>
                                                                <div className="text-[#9A9FB4] text-[12px] font-inter">SVG, PNG, PDF, JPEG</div>
                                                            </div>
                                                        </div>
                                                    }
                                                </label>
                                                <input hidden id='file-upload' type='file' name="file" onChange={onSelectSlider} />
                                                {selectSlider &&  <img className='w-[300px]' src={previewSlider} /> }
                                            </div>
                                            <div className='w-full mt-[32px]'>
                                                <button type="submit" onClick={onFileUploadSlider} style={{boxShadow: '4px 12px 32px rgba(0, 114, 188, 0.4), 0px 2px 16px rgba(0, 114, 188, 0.3), 0px 6px 8px rgba(0, 114, 188, 0.2)'}} className='w-[97px] h-[44px] bg-[#0072BC] rounded-[6px] text-white'>Шинэчлэх</button>
                                            </div>
                                            <p className=' mt-[20px] cursor-pointer w-[50px] p-[6px] rounded-[4px] border text-center' onClick={() => setEditingSlider(false)}>хаах</p>
                                        </form>
                                    </div>
                                }
                            </div>
                        </div>
                        :
                        null
                    }
                </div>
            </div>
        </div>
    )
    :
    <div className={`${darkMode && 'text-[#fff]'}`}>
        Нэвтэрч орно уу
    </div>
}
