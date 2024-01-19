import { Carousel, Spin } from "antd";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams, useSearchParams } from "react-router-dom";
import { LeftArrowSvg } from "../../assets/svgs/leftArrowSvg";
import { defaultAvatar } from "../../consts/defaultAvatar";
import { routes } from "../../consts/routes";
import { setFromSubjects } from "../../helpers/setFromObjects";
import { useGroupsByTeacher } from "../../hooks/groupsByTeacher";
import { useTeachersGroupsStore } from "../../store/teachersGroupsStore"
import { NoMatch } from "../NoMatch";
import './subjectsStyles.scss';

export const Subjects = () => {
    const {loading} = useGroupsByTeacher();
    const pickedGroupId = useSearchParams()[0].get('group_id');
    // const [searchParams,setSearchParams] = useSearchParams();
    const group = useTeachersGroupsStore().groups.find(group => group._id === pickedGroupId);
    // const subjects = [{name:'АПСК',isActive:true},{name:'РКСЗ',isActive:true},{name:'WEB-технології',isActive:true},{name:'ОБЗД',isActive:true},{name:'АПСК',isActive:true},{name:'РКСЗ',isActive:true},{name:'WEB-технології',isActive:true},{name:'ОБЗД',isActive:true},{name:'АПСК',isActive:true},{name:'РКСЗ',isActive:true},{name:'WEB-технології',isActive:true},{name:'ОБЗД',isActive:false},];
    const lastMonth = new Date().getMonth();
    useEffect(() => {
        document.title = `Предмети групи - ${group?.journal_group_full_name}`;
    },[]);
    
    if(loading) return <Spin/>
    if(!group) return <NoMatch is404={false} title={"Предметів за групою не знайдено"}/>

    return <section className="subjectsMainContainer">
        <h2 className="subjectsMainTitle"><Link to={routes.groups} className={'leftArrowButton'}><LeftArrowSvg/></Link>Предмети</h2>
        <div className="subjectsContainer">
            {setFromSubjects([...group.can_edit,...group.can_view]).map((subject,i) => 
                <Link  to={routes.journal + `?group_id=${pickedGroupId}&subject_id=${subject._id}&month=${lastMonth + 1}`} className={`homeTasks_subject`}>
                    {subject.subject_full_name}
                </Link>
            )}
        {/* {subjects.map((subject,i) => <Link to={routes.journal + `?group_id=${pickedGroupId}&subject_id=${subject}&month=${lastMonth}`} className={`homeTasks_subject ${!subject.isActive && 'inactive'}`}>{subject.name}{i === 2 && <div className="newTask"/>}</Link>)} */}
        </div>
        <Carousel className='subjects_carousel' dots slidesToShow={1}>
            {setFromSubjects([...group.can_edit,...group.can_view]).map((subject,i) => 
                <Link  to={routes.journal + `?group_id=${pickedGroupId}&subject_id=${subject._id}&month=${lastMonth + 1}`} className={`homeTasks_subject`}>
                    {subject.subject_full_name}
                </Link>
            )}
        </Carousel>
        <section className="studentList__container">
            <h2 className="subjectsMainTitle">Список студентів</h2>
            <div className="studentItems__container">
                {group.group_students.map(student => 
                    <div className="student__container" key={student.user_id}>
                        <div className="student__info">
                            <img className="studentList__avatar" src={student.avatar || defaultAvatar} alt=""/>
                            <p className="studentName">{student.full_name}</p>
                        </div>
                        <Link className="studentButton" to="#">Перейти</Link>
                    </div>
                )}
            </div>
            <Carousel slidesPerRow={10} className={'students_carousel'}>
                    {group.group_students.map(student => 
                        <div className="student__container" key={student.user_id}>
                            <div className="student__info">
                                <img className="studentList__avatar" src={student.avatar || defaultAvatar} alt=""/>
                                <p className="studentName">{student.full_name}</p>
                            </div>
                            <Link className="studentButton" to="#">Перейти</Link>
                        </div>
                    )}
            </Carousel>
        </section>
    </section>
}