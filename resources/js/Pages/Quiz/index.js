import React, { useState, useEffect } from 'react'
import { Form, Button, Col, Container, Row } from "react-bootstrap"

export default function Quiz() {
    const [selected, setSelected] = useState(1)
    const [checked1, setChecked1] = useState(false)
    const [hariult1, setHariult1] = useState(null)
    const [checked2, setChecked2] = useState(false)
    const [hariult2, setHariult2] = useState(null)
    const [checked3, setChecked3] = useState(false)
    const [hariult3, setHariult3] = useState(null)
    const [checked4, setChecked4] = useState(false)
    const [hariult4, setHariult4] = useState(null)
    const [checked5, setChecked5] = useState(false)
    const [hariult5, setHariult5] = useState(null)
    const [checked6, setChecked6] = useState(false)
    const [hariult6, setHariult6] = useState(null)
    const [checked7, setChecked7] = useState(false)
    const [hariult7, setHariult7] = useState(null)
    const [checked8, setChecked8] = useState(false)
    const [hariult8, setHariult8] = useState(null)
    const [checked9, setChecked9] = useState(false)
    const [hariult9, setHariult9] = useState(null)
    const [result, setResult] = useState(false)
    const [darkMode, setDarkMode] = useState(null)
    
    const first = [
        {
            title: 'A. Шигүү түнэр ой мод. Дээр бүүр түүрхэн тэнгэр харагдана.',
            hariult: 'Ойг сонгосон бол та гүнзгий, нам гүм. Хүмүүс таныг маш сонирхолтой хүн гэж үздэг. Та өөрийн жинхэнэ төрхийг тэр бүр харуулаад байдаггүй. Хүмүүс танд хайртай. Учир нь та сайн сонсогч.'
        },
        {
            title: 'B. Зах хязгааргүй эрдэнэшишийн талбай, цэлмэг тэнгэр',
            hariult: 'Хэрэв эрдэнэшишийн талбайг сонгосон бол та үнэнч, баяр хөөртэй. Хүмүүс танд татагддаг. Та хүнтэй амархан танилцдаг. Уйтгарлах нь ховор. Үргэлж анхаарлын төвд байдаг. Тоглож наадах дуртай.'
        },
        {
            title: 'C. Ногоон толгод зарим нэг модод, цаана нь уулс харагдана.',
            hariult: 'Та толгодыг сонгосон бол маш прагтик, таны тодорхой занд хүмүүс татагддаг. Асуудлыг шийдэх гайхалтай чадалтай. Үргэлж олон талаас нь юмыг олж харж боддог.'
        },
    ]

    const second = [
        {
            title: 'A. Толь',
            hariult: 'Толийг сонгосон бол та  амьдралын гадаад байдлын тухай хуваалцах хүнийг сонирхоно. Та ямар хүнийг хайж байгаагаа сайн мэдэж байдаг. Магадгүй таны нээх тоогоогүй тэр хүн танд аз жаргалыг авчирна.'
        },
        {
            title: 'B. Бөгж',
            hariult: 'Бөгж сонгосон бол та их романтик хүн. Романтик харилцаан дээр та бүхнийг зөөлхөн байлгах гэж хичээнэ. Та жинхэнэ хайр үүрдийнх гэж боддог ч гэсэн тэр амлалтандаа хүрдэггүй. Нөгөө хүнээрээ халамжлуулахыг хүсдэг.'
        },
        {
            title: 'C. Лонх',
            hariult: 'Хэрэв та лонхийг сонгосон бол та ухаалаг хүнийг хүсдэг. Амбицтай ажилсаг хүн таны сэтгэлийг хөдөлгөнө. Гялгар цалгар нөхдийг тоохгүй.'
        },
    ]

    const third = [
        {
            title: 'А. Тийм',
            hariult: 'Та тийм гэж нэг л хэлвэл үхтэлээ амлалтаа биелүүлнэ.'
        },
        {
            title: 'В. Үгүй',
            hariult: 'Хэрэв та үгүй гэж хэлвэл тоглож байна.'
        }
    ]

    const fourth = [
        {
            title: 'A. Тайван, тунгалаг, тогтуун нуур шиг',
            hariult: 'Та өнгөц харилцааг сонирходоггүй. Нэг л харилцаа үүсгэвэл тултал нь явдаг.'
        },
        {
            title: 'B. Хүрхрээ',
            hariult: 'Хүрхрээ, эсрэг хүйсийн  хүмүүс  таныг тачаангүй гэж хардаг.'
        },
        {
            title: 'C. Хоржигнон урссан',
            hariult: 'Та үргэлж шинэ учиралыг хайж байдаг. Маш туршлагатай.'
        },
    ]

    const fifth = [
        {
            title: 'A. Жирийн хаалганы түлхүүр',
            hariult: 'Боловсрол тийм ч чухал биш гэж үздэг.  Та шинэ ажил төлөвлөж байж болно.'
        },
        {
            title: 'B. Уран нарийн хээтэй түлхүүр',
            hariult: 'Боловсрол бол маш чухал гэж та үздэг. Үргэлж мэдлэгийг өөртөө шингээдэг.'
        },
        {
            title: 'C. Зүүдэг цоожны жижиг түлхүүр',
            hariult: 'Боловсролд нээх санаа тавихгүй ч олон зүйлийг сурсан. Зөн билгээрээ их өвөрмөц ажил сонгосон.'
        },
    ]

    const sixth = [
        {
            title: 'A. Холливүүд маягийн харш',
            hariult: 'Та  маш их амбицтай.  Сонгосон ажилаа сайн хийдэг. Таны эрч хүчийг гаргах тийм ажилд татагддаг. Амжилттай байх нь таныг тайвшируулдаг.'
        },
        {
            title: 'B. Ногоон зүлгэн дээрх байшин',
            hariult: 'Та ирээдүйн мэрэгжилдээ бодитой ханддаг. Та хөл дээрээ бат зогсож сонгосон ажил бүртээ гялалздаг.'
        },
        {
            title: 'C. Толгод дээрх цайз',
            hariult: 'Та ажил төрөлдөө  бага зэрэг хийсвэр хандаж байна. Мега од байх нь гайхалтай ч та гэртээ ойрхон сэтгэх хэрэгтэй. Тэгэхгүй бол сэтгэлээр унаж магад.'
        },
    ]

    const seven = [
        {
            title: 'A. Цонхоор нь харна.',
            hariult: 'Та бүтэлгүйтэх бий гэж  айж байна. Анхны алхам хийх нь танд их хэцүү байдаг. Хийж үзээгүй байж бүү орхиорой.'
        },
        {
            title: 'B. Дотор нь орно',
            hariult: 'Та амжилтанд хүрэхдээ итгэлтэй байна. Таныг юуг саатуулж чадахгүй.'
        },
        {
            title: 'С. Цаашаа явна.',
            hariult: 'Амжилт танд тийм ч чухал зүйл биш. Та өдөр тутамын амьдралын жижиг зүйлээс ч таашаал авдаг. Том зүйлд хүрэхээс илүүтэй хүмүүсийг хайрладаг.'
        },
    ]

    const eigth = [
        {
            title: 'A. Баавгай',
            hariult: 'Та өөрийн хөл дээрээ бат зогсож чадах эсэхдээ их санаа зовдог. Тусгаар тогтнол биеээ даасан байдал танд их чухал.'
        },
        {
            title: 'B. Шидтэн',
            hariult: 'Та бүх зүйлийг хяналтандаа байлгаж чадахгүй байх бий гэж айдаг. Тиймээс заримдаа ачаалал авдаг.'
        },
        {
            title: 'C. Анаахай',
            hariult: 'Та бусдад хэрхэн харагдах бол хэмээн санаа зовдог. Бусдад таалагдах гэж хичээхийн оронд өөрөөрөө байх нь чухал.'
        },
    ]

    const ys = [
        {
            title: 'A. Ногоон цэцэрлэгтэй гайхалтай байшин',
            hariult: 'Та үнэнч, нас биед хүрсэн хүн. Та бодсон санасанаа хэлдэг. Хүмүүс таны зөвлөгөөг авдаг. Гэхдээ та ирээдүйд зөвхөн толгойгоороо бус зүрхээрээ шийдэх асуудалтай таарна.'
        },
        {
            title: 'B. Цөлийн дундах нуур',
            hariult: 'Танд өөрийнхөөрөө байх орон зай хэрэгтэй байна. Та үргэлж бодол санаагаа цэгнэж байдаг. Асуудалаас зугтах хандлагатай. Та өөрийн сэтгэл санаагаа бусадтай хуваалцаж байвал нөхцөл байдал дээрдэнэ.'
        },
        {
            title: 'C. Хүчирхэг давалгаатай далайн элсэн эрэг',
            hariult: 'Та амьдралд хайртай. Өөрийн үзэл бодолдоо үнэнч. Бодсоноо хэлэхээс айдаггүй. Гэхдээ та таамаглашгүй. Үзэл бодолоо амархан өөрчилдөг. Яг л далайн давалгаа шиг тайван харагдах ч удаан үргэлжилдэггүй.'
        },
    ]
    
    useEffect(() => {
        if(JSON.parse(localStorage.getItem('mode'))){
            setDarkMode(true)
        }else{
            setDarkMode(false)
        }
    }, [JSON.parse(localStorage.getItem('mode'))])

    return !result ? (
        <div>
            {
                selected === 1
                ?
                <Container className="mx-10 my-10">
                    <Form>
                    <Row>
                        <Form.Group as={Col} controlId="formFirstName">
                        <Form.Label className="label">
                            <h1 className={`text-[32px] font-bold ${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}>Асуулт 1.</h1>
                            <p className={`my-5 text-[18px] ${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}>
                            Та замд явж байна. Таны эргэн тойронд юу байна вэ?
                            </p>
                        </Form.Label>
                        </Form.Group>
                        {
                            first.map((data, index) => {
                                return(
                                    <Form.Group key={index} className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check
                                            type="checkbox"
                                            label={data.title}
                                            checked={checked1 === index ? true : false}
                                            onChange={()=> {
                                                setChecked1(index)
                                                setHariult1(data.hariult)
                                            }}
                                            className={`${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}
                                        />
                                    </Form.Group>
                                )
                            })
                        }
                    </Row>

                    <Row>
                        <Form.Group as={Col} controlId="formFirstName">
                        <Form.Label className="label">
                            <h2 className={`text-[32px] font-bold ${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}>Асуулт 2.</h2>
                            <p className={`my-5 text-[18px] ${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}>
                            Таны хөлийн хажууд нэг зүйл харцанд тусав? Юу харагдав.
                            </p>
                        </Form.Label>
                        </Form.Group>

                        {
                            second.map((data, index) => {
                                return(
                                    <Form.Group key={index} className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check
                                            type="checkbox"
                                            label={data.title}
                                            checked={checked2 === index ? true : false}
                                            onChange={()=> {
                                                setChecked2(index)
                                                setHariult2(data.hariult)
                                            }}
                                            className={`${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}
                                        />
                                    </Form.Group>
                                )
                            })
                        }
                    </Row>

                    <Row>
                        <Form.Group as={Col} controlId="formFirstName">
                        <Form.Label className="label">
                            <h2 className={`text-[32px] font-bold ${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}>Асуулт 3.</h2>
                            <p className={`my-5 text-[18px] ${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}>Та түүнийг авах уу?</p>
                        </Form.Label>
                        </Form.Group>

                        {
                            third.map((data, index) => {
                                return(
                                    <Form.Group key={index} className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check
                                            type="checkbox"
                                            label={data.title}
                                            checked={checked3 === index ? true : false}
                                            onChange={()=> {
                                                setChecked3(index)
                                                setHariult3(data.hariult)
                                            }}
                                            className={`${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}
                                        />
                                    </Form.Group>
                                )
                            })
                        }
                    </Row>
                    </Form>
                </Container>
                :
                selected === 2 
                ?
                <Container className="mx-10 my-10">
                <Form>
                <Row>
                    <Form.Group as={Col} controlId="formFirstName">
                    <Form.Label className="label">
                        <h2 className={`text-[32px] font-bold ${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}>Асуулт 4.</h2>
                        <p className={`my-5 text-[18px] ${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}>
                        Та явах замдаа устай дайралдав. Ус ямар төлөвтэй байна вэ?
                        </p>
                    </Form.Label>
                    </Form.Group>

                    {
                            fourth.map((data, index) => {
                                return(
                                    <Form.Group key={index} className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check
                                            type="checkbox"
                                            label={data.title}
                                            checked={checked4 === index ? true : false}
                                            onChange={()=> {
                                                setChecked4(index)
                                                setHariult4(data.hariult)
                                            }}
                                            className={`${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}
                                        />
                                    </Form.Group>
                                )
                            })
                        }
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="formFirstName">
                    <Form.Label className="label">
                        <h2 className={`text-[32px] font-bold ${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}>Асуулт 5.</h2>
                        <p className={`my-5 text-[18px] ${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}>
                        Та усан дотор нэг түлхүүр олж харлаа. Тонгойн авав. Түлхүүр
                        ямар хэлбэртэй байна вэ?
                        </p>
                    </Form.Label>
                    </Form.Group>

                    {
                            fifth.map((data, index) => {
                                return(
                                    <Form.Group key={index} className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check
                                            type="checkbox"
                                            label={data.title}
                                            checked={checked5 === index ? true : false}
                                            onChange={()=> {
                                                setChecked5(index)
                                                setHariult5(data.hariult)
                                            }}
                                            className={`${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}
                                        />
                                    </Form.Group>
                                )
                            })
                        }
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="formFirstName">
                    <Form.Label className="label">
                        <h2 className={`text-[32px] font-bold ${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}>Асуулт 6.</h2>
                        <p className={`my-5 text-[18px] ${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}>
                        Та цааш явсаар нэгэн байшинд хүрэв. Ямар байшин байна вэ?
                        </p>
                    </Form.Label>
                    </Form.Group>

                    {
                            sixth.map((data, index) => {
                                return(
                                    <Form.Group key={index} className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check
                                            type="checkbox"
                                            label={data.title}
                                            checked={checked6 === index ? true : false}
                                            onChange={()=> {
                                                setChecked6(index)
                                                setHariult6(data.hariult)
                                            }}
                                            className={`${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}
                                        />
                                    </Form.Group>
                                )
                            })
                        }
                </Row>
                </Form>
            </Container>
            :
                selected === 3
                ?
                <Container className="mx-10 my-10">
                <Form>
                    <Row>
                    <Form.Group as={Col} controlId="formFirstName">
                        <Form.Label className="label">
                        <h2 className={`text-[32px] font-bold ${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}>Асуулт 7.</h2>
                        <p className={`my-5 text-[18px] ${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}>Та юу хийх вэ?</p>
                        </Form.Label>
                    </Form.Group>

                    {
                            seven.map((data, index) => {
                                return(
                                    <Form.Group key={index} className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check
                                            type="checkbox"
                                            label={data.title}
                                            checked={checked7 === index ? true : false}
                                            onChange={()=> {
                                                setChecked7(index)
                                                setHariult7(data.hariult)
                                            }}
                                            className={`${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}
                                        />
                                    </Form.Group>
                                )
                            })
                        }
                    </Row>
                    <Row>
                    <Form.Group as={Col} controlId="formFirstName">
                        <Form.Label className="label">
                        <h2 className={`text-[32px] font-bold ${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}>Асуулт 8.</h2>
                        <p className={`my-5 text-[18px] ${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}>
                            Гэнэт нэгэн зүйл танруу үсрөөд гараад ирэв. Юу вэ?
                        </p>
                        </Form.Label>
                    </Form.Group>

                    {
                            eigth.map((data, index) => {
                                return(
                                    <Form.Group key={index} className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check
                                            type="checkbox"
                                            label={data.title}
                                            checked={checked8 === index ? true : false}
                                            onChange={()=> {
                                                setChecked8(index)
                                                setHariult8(data.hariult)
                                            }}
                                            className={`${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}
                                        />
                                    </Form.Group>
                                )
                            })
                        }
                    </Row>
                    <Row>
                    <Form.Group as={Col} controlId="formFirstName">
                        <Form.Label className="label">
                        <h2 className={`text-[32px] font-bold ${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}>Асуулт 9.</h2>
                        <p className={`my-5 text-[18px] ${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}>
                            Та цааш явсаар нэгэн ханад хүрэв. Нэг хаалга байна. Та
                            хаалганы нүхээр харлаа. Цаана нь юу харагдаж байна вэ?
                        </p>
                        </Form.Label>
                    </Form.Group>

                    {
                            ys.map((data, index) => {
                                return(
                                    <Form.Group key={index} className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check
                                            type="checkbox"
                                            label={data.title}
                                            checked={checked9 === index ? true : false}
                                            onChange={()=> {
                                                setChecked9(index)
                                                setHariult9(data.hariult)
                                            }}
                                            className={`${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}
                                        />
                                    </Form.Group>
                                )
                            })
                        }
                    </Row>
                </Form>
                </Container>
                :
                null
            }
            <Container>
            {
                selected === 1 
                ?
                <Button variant="primary" onClick={() => setSelected(2)}>
                    Next
                </Button>
                :
                selected === 2
                ?
                <div>
                    <Button variant="secondary" onClick={() => setSelected(1)}>
                        Back
                    </Button>{" "}
                    <Button variant="primary" onClick={() => setSelected(3)}>
                        Next
                    </Button>
                </div>
                :
                selected === 3 
                ?
                <div>
                    <Button variant="secondary" onClick={() => setSelected(2)}>
                    Back
                    </Button>{" "}
                    <Button onClick={() => setResult(true)} variant="primary">Confirm</Button>
                </div>
                :
                null
            }
            </Container>
        </div>
    )
    :
    <div className='p-[50px]'>
        <p className={`text-[18px] font-medium ${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}>Асуулт 1: Таны амьдралд хандах хандлагыг илэрхийлнэ.</p>
        <p className={`text-[14px] ${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}>Хариулт: {hariult1}</p>
        <p className={`text-[18px] font-medium ${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}>Асуулт 2: Та ямар төрлийн хамтрагчид дуртайг илэрхийлнэ.</p>
        <p className={`text-[14px] ${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}>Хариулт: {hariult2}</p>
        <p className={`text-[18px] font-medium ${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}>Асуулт 3: Таныг хир амлалтандаа хүрдэгийг илэрхийлнэ.</p>
        <p className={`text-[14px] ${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}>Хариулт: {hariult3}</p>
        <p className={`text-[18px] font-medium ${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}>Асуулт 4: Таны потенцеал болон тэвчээр.</p>
        <p className={`text-[14px] ${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}>Хариулт: {hariult4}</p>
        <p className={`text-[18px] font-medium ${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}>Асуулт 5: Таны сурах хандлага.</p>
        <p className={`text-[14px] ${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}>Хариулт: {hariult5}</p>
        <p className={`text-[18px] font-medium ${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}>Асуулт 6: Таны амбицын тухай</p>
        <p className={`text-[14px] ${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}>Хариулт: {hariult6}</p>
        <p className={`text-[18px] font-medium ${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}>Асуулт 7: Амжилт таны хувьд</p>
        <p className={`text-[14px] ${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}>Хариулт: {hariult7}</p>
        <p className={`text-[18px] font-medium ${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}>Асуулт 8: Таны айдасын тухай</p>
        <p className={`text-[14px] ${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}>Хариулт: {hariult8}</p>
        <p className={`text-[18px] font-medium ${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}>Асуулт 9: Таны жинхэнэ чанар</p>
        <p className={`text-[14px] ${darkMode ? 'text-[#fff]' : 'text-brand-night'}`}>Хариулт: {hariult9}</p>
    </div>
}
