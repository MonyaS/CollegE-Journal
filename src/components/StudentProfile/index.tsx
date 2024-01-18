import { Modal } from 'antd';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { DiagonalArrowSvg } from '../../assets/svgs/diagonalArrowSvg';
import { EditProfileSvg } from '../../assets/svgs/editProfileSvg';
import axiosConfig from '../../axiosConfig';
import { defaultAvatar } from '../../consts/defaultAvatar';
import { endpoints } from '../../consts/endpoints';
import { routes } from '../../consts/routes';
import { securityLevels } from '../../consts/securityLevels';
import { getToken } from '../../helpers/auth';
import { useThemeStore } from '../../store/themeStore';
import { useUserStore } from '../../store/userStore';
import { EditProfile } from '../EditProfile';
import { TeacherSchedule } from './LessonsSchedule';
import { LessonsScheduleStudents } from './LessonsSchedule/studentSchedule';
import './studentProfile.scss';

enum tabsNames  {
    lessonsSchedule = 'lessonsSchedule',
    lessonsSchedule2 = 'lessonsSchedule2',
    lessonsSchedule3 = 'lessonsSchedule3',
};
type tabsNamesType = keyof typeof tabsNames;

const useTryEditProfile = () => {
    const navigate = useNavigate();
    const initEdit = useSearchParams()[0].get('edit');
    const [onTryEditing,setOnTryEditing] = useState(!!initEdit || false);
    const user = useUserStore().user;
    const localCookie = user.token;
    const cookie = getToken();
    const [status,setStatus] = useState<number>();

    const onTryEdit = () => {
        setOnTryEditing(true);
    }
    const onTryEditClose = () => {
        setOnTryEditing(false);
    }
    const onRealEdittingOpen = async () => {
        Cookies.set('comfirmedPassword','true',{expires:new Date(new Date().getTime() + 10 * 1000)});
        navigate(routes.editProfile);
    }
    const onSubmitTryEditing = async (data:{user_password:string}) => {
        try{
            try{
                const res = await axiosConfig.post(endpoints.login,{user_password:data.user_password,mailbox_address:user.mailbox_address},{headers:{Authorization:localCookie || cookie}});
                onTryEditClose();
                onRealEdittingOpen();
            }catch(err){
                setStatus(0);
                console.error(err);
            }
        }catch(err){
            console.error(err);
        }
    }
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState:{errors}
    } = useForm<{user_password:string,}>();

    return {onTryEditing,onTryEdit,onSubmitTryEditing,register,handleSubmit,onTryEditClose,errors,status}
}
const tabs:Record<tabsNamesType,{component:React.ReactNode,title:string} > = {
    lessonsSchedule:{
        component:<TeacherSchedule/>,
        title:'Розклад вчитель'
    },
    lessonsSchedule2:{
        component:<LessonsScheduleStudents/>,
        title:'Розклад студент'
    },
    lessonsSchedule3:{
        component:<TeacherSchedule/>,
        title:'Розклад пар3'
    }
};
export const MyProfile = () => {
    const theme = useThemeStore().theme;
    const user = useUserStore().user;
    const [tabIndex,setTabIndex] = useState<tabsNamesType>(tabsNames.lessonsSchedule);
    const {onTryEditing,onTryEdit,onSubmitTryEditing,register,handleSubmit,onTryEditClose,errors,status} = useTryEditProfile();
    useEffect(() => {
        document.title = 'Мій профіль';
    },[]);
    const scheduleTimings = [
        {
            id:1,
            start:'8:00',
            end:'9:20'
        },
        {
            id:2,
            start:'8:00',
            end:'9:20'
        },
        {
            id:3,
            start:'8:00',
            end:'9:20'
        },
        {
            id:4,
            start:'8:00',
            end:'9:20'
        },
        {
            id:5,
            start:'8:00',
            end:'9:20'
        },
        {
            id:6,
            start:'8:00',
            end:'9:20'
        },
    ]

    
    return <div className={`studentProfile__container ${theme}`}>
        <section className='studentProfileMain__container'>
            <div className='studentProfileLeft__container'>
                <div className='studentProfileInfo__container'>
                    <img className='studentProfile_img' src={user.avatar || defaultAvatar}/>
                    <div className='studentProfileTextInfo__container'>
                        <p className='studentProfile__name'>
                            {user.full_name}
                            {/* {user.security_level !== securityLevels.admin &&  */}
                            <button className='editUserProfile_button' onClick={onTryEdit}><EditProfileSvg/></button>
                        </p>
                        <p className='studentProfile__email'>{user.mailbox_address || `mail@gmail.com`}</p>
                        <p className='studentProfile__group'>{user.group_fullname || `Група-00`}</p>
                    </div>
                </div>
                <div className='studentProfileTabs__container'>
                    {Object.keys(tabs).map((key) =>
                     <button key={key} className={`studentProfileTab__button ${tabIndex === key ? 'picked' : ''}`}
                             onClick={() => setTabIndex(key as tabsNamesType)}>
                            {tabs[key as tabsNamesType].title} {DiagonalArrowSvg()}
                    </button>)}
                </div>
            </div>
            {user.security_level === securityLevels.student ? <div className='studentProfileStatistic__container'>
                    <h3 className='studentProfileStatistic__header'>
                        Середня Оцінка
                    </h3>
                    <p className='studentProfileStatistic__value na'>45 н/а</p>
                    <h3 className='studentProfileStatistic__header'>
                        Пропущено годин
                    </h3>
                    <p className='studentProfileStatistic__value good'>6</p>
                    <h3 className='studentProfileStatistic__header'>
                        Рейтинг
                    </h3>
                    <p className='studentProfileStatistic__value medium'>143/316</p>
                </div> 
                :   <div className='lessonsScheduleDayLessons__container'>
                        <div className="lessonsScheduleDayLessonItem__container">
                            <p className="lessonsScheduleLessonNumber"></p>
                            <p className="lessonsScheduleLessonStart">Початок</p>
                            <p className="lessonsScheduleLessonEnd">Кінець</p>
                        </div>
                        {scheduleTimings.map((timing,i) => 
                            <div key={timing.id} className="lessonsScheduleDayLessonItem__container">
                                <p className="lessonsScheduleLessonNumber">{i + 1}</p>
                                <p className="lessonsScheduleLessonStart" style={{width:'100px'}}>{timing.start}</p>
                                <p className="lessonsScheduleLessonEnd">{timing.end}</p>
                            </div>
                        )}
                    </div>
                }
        </section>
        {tabs[tabIndex].component}
        {onTryEditing && <Modal open={onTryEditing} onCancel={onTryEditClose} footer={false} className={'editProfileModal'}>
            <div className="editProfileModal_container">
                <h1 className="editProfileModal_header">Для редагування профілю треба ввести пароль</h1>
                <form autoComplete={"off"} onSubmit={handleSubmit(onSubmitTryEditing)} className="editProfileModal_form">
                    <input {...register('user_password',{required:{value:true,message:'Ви не ввели пароль!'}})} placeholder="Введіть теперішній пароль" className="input"/>
                    <div className="editFormButtons_container">
                        <input autoComplete={"off"} type={'submit'} value={'Далі'} className="primary_button"/>
                        <span className="forgotPassword">Забули пароль?</span>
                    </div>
                    {!!errors.user_password?.message && <p className="signIn_errorMessage">{errors.user_password?.message}</p>}
                    {status === 0 && <p className="signIn_errorMessage">Невірний пароль</p>}
                </form>
                <button className="primary_button" onClick={onTryEditClose}>Повернутися</button>
            </div>
        </Modal>}
    </div>
}