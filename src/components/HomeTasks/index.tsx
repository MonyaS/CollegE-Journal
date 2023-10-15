import { useThemeStore } from "../../store/themeStore";
import './homeTaskStyles.scss';
import {MoreOutlined} from "@ant-design/icons";
import { defaultAvatar } from "../../consts/defaultAvatar";
import { FilterIconSvg } from "../../assets/svgs/filterIconSvg";

export const HomeTasks = () => {
  const theme = useThemeStore().theme;

  return <div className={`homeTaskMain__container ${theme}`}>
    <div className="homeTaskTop__container">
      <h1 className="homeTaskTitle">Домашнє завдання</h1>
      <div className="homeTaskFilters__container">
        <div className="homeTaskFilter__container">
          <p className="homeTaskFilter__name">Группа</p>
          <FilterIconSvg/>
        </div>
        <div className="homeTaskFilter__container">
          <p className="homeTaskFilter__name">Предмет</p>
          <FilterIconSvg/>
        </div>
        <div className="homeTaskFilter__container">
          <p className="homeTaskFilter__name">Завдання</p>
          <FilterIconSvg/>
        </div>
        <div className="homeTaskFilter__container">
          <p className="homeTaskFilter__name">Місяць</p>
          <FilterIconSvg/>
        </div>
        <div className="homeTaskFilter__container">
          <p className="homeTaskFilter__name">Сдача</p>
          <FilterIconSvg/>
        </div>
      </div>
    </div>
    <div className="homeTaskTasks__container">
        <div className="homeTaskItem__container">
          <div className="homeTaskItem">
            <img className="homeTaskItem__avatar" src={defaultAvatar}/>
            <div className="homeTaskItemText__container">
              <p className="homeTaskItem__text">Технологія токен рінг ч1Технологія токен рінг ч1</p>
              <p className="homeTaskItem__date">15 травня</p>
            </div>
            <MoreOutlined />
          </div>
          <div className="homeTaskDeadline__container">
            <p className="homeTaskDeadline__title">
              Срок сдачі
            </p>
            <p className="homeTaskDeadline__date">30 травня</p>
          </div>
          <div className="homeTaskCommentsItem__container">
            <p className="homeTaskCommentsItemNoComment">Комментар для викладача</p>
            <p className="homeTaskCommentsItemComment__container">
              <img className="homeTaskCommentItem__avatar" src={defaultAvatar}/>
              <p className="homeTaskCommentItem__text">Там треба зробити це, це і це. Приклад ось так, так і так</p>
            </p>
          </div>
        </div>
        <div className="homeTaskItem__container">
          <div className="homeTaskItem">
            <img className="homeTaskItem__avatar" src={defaultAvatar}/>
            <div className="homeTaskItemText__container">
              <p className="homeTaskItem__text">Технологія токен рінг ч1Технологія токен рінг ч1</p>
              <p className="homeTaskItem__date">15 травня</p>
            </div>
            <MoreOutlined />
          </div>
          <div className="homeTaskDeadline__container">
            <p className="homeTaskDeadline__title">
              Срок сдачі
            </p>
            <p className="homeTaskDeadline__date">30 травня</p>
          </div>
          <div className="homeTaskCommentsItem__container">
            <p className="homeTaskCommentsItemNoComment">Комментар для викладача</p>
            <p className="homeTaskCommentsItemComment__container">
              <img className="homeTaskCommentItem__avatar" src={defaultAvatar}/>
              <p className="homeTaskCommentItem__text">Там треба зробити це, це і це. Приклад ось так, так і так</p>
            </p>
          </div>
        </div>
        <div className="homeTaskItem__container">
          <div className="homeTaskItem">
            <img className="homeTaskItem__avatar" src={defaultAvatar}/>
            <div className="homeTaskItemText__container">
              <p className="homeTaskItem__text">Технологія токен рінг ч1Технологія токен рінг ч1</p>
              <p className="homeTaskItem__date">15 травня</p>
            </div>
            <MoreOutlined />
          </div>
          <div className="homeTaskDeadline__container">
            <p className="homeTaskDeadline__title">
              Срок сдачі
            </p>
            <p className="homeTaskDeadline__date">30 травня</p>
          </div>
          <div className="homeTaskCommentsItem__container">
            <p className="homeTaskCommentsItemNoComment">Комментар для викладача</p>
            <p className="homeTaskCommentsItemComment__container">
              <img className="homeTaskCommentItem__avatar" src={defaultAvatar}/>
              <p className="homeTaskCommentItem__text">Там треба зробити це, це і це. Приклад ось так, так і так</p>
            </p>
          </div>
        </div>
        <div className="homeTaskItem__container">
          <div className="homeTaskItem">
            <img className="homeTaskItem__avatar" src={defaultAvatar}/>
            <div className="homeTaskItemText__container">
              <p className="homeTaskItem__text">Технологія токен рінг ч1Технологія токен рінг ч1</p>
              <p className="homeTaskItem__date">15 травня</p>
            </div>
            <MoreOutlined />
          </div>
          <div className="homeTaskDeadline__container">
            <p className="homeTaskDeadline__title">
              Срок сдачі
            </p>
            <p className="homeTaskDeadline__date">30 травня</p>
          </div>
          <div className="homeTaskCommentsItem__container">
            <p className="homeTaskCommentsItemNoComment">Комментар для викладача</p>
            <p className="homeTaskCommentsItemComment__container">
              <img className="homeTaskCommentItem__avatar" src={defaultAvatar}/>
              <p className="homeTaskCommentItem__text">Там треба зробити це, це і це. Приклад ось так, так і так</p>
            </p>
          </div>
        </div>
        <div className="homeTaskItem__container">
          <div className="homeTaskItem">
            <img className="homeTaskItem__avatar" src={defaultAvatar}/>
            <div className="homeTaskItemText__container">
              <p className="homeTaskItem__text">Технологія токен рінг ч1Технологія токен рінг ч1</p>
              <p className="homeTaskItem__date">15 травня</p>
            </div>
            <MoreOutlined />
          </div>
          <div className="homeTaskDeadline__container">
            <p className="homeTaskDeadline__title">
              Срок сдачі
            </p>
            <p className="homeTaskDeadline__date">30 травня</p>
          </div>
          <div className="homeTaskCommentsItem__container">
            <p className="homeTaskCommentsItemNoComment">Комментар для викладача</p>
            <p className="homeTaskCommentsItemComment__container">
              <img className="homeTaskCommentItem__avatar" src={defaultAvatar}/>
              <p className="homeTaskCommentItem__text">Там треба зробити це, це і це. Приклад ось так, так і так</p>
            </p>
          </div>
        </div>
        <div className="homeTaskItem__container">
          <div className="homeTaskItem">
            <img className="homeTaskItem__avatar" src={defaultAvatar}/>
            <div className="homeTaskItemText__container">
              <p className="homeTaskItem__text">Технологія токен рінг ч1Технологія токен рінг ч1</p>
              <p className="homeTaskItem__date">15 травня</p>
            </div>
            <MoreOutlined />
          </div>
          <div className="homeTaskDeadline__container">
            <p className="homeTaskDeadline__title">
              Срок сдачі
            </p>
            <p className="homeTaskDeadline__date">30 травня</p>
          </div>
          <div className="homeTaskCommentsItem__container">
            <p className="homeTaskCommentsItemNoComment">Комментар для викладача</p>
            <p className="homeTaskCommentsItemComment__container">
              <img className="homeTaskCommentItem__avatar" src={defaultAvatar}/>
              <p className="homeTaskCommentItem__text">Там треба зробити це, це і це. Приклад ось так, так і так</p>
            </p>
          </div>
        </div>
        <div className="homeTaskItem__container">
          <div className="homeTaskItem">
            <img className="homeTaskItem__avatar" src={defaultAvatar}/>
            <div className="homeTaskItemText__container">
              <p className="homeTaskItem__text">Технологія токен рінг ч1Технологія токен рінг ч1</p>
              <p className="homeTaskItem__date">15 травня</p>
            </div>
            <MoreOutlined />
          </div>
          <div className="homeTaskDeadline__container">
            <p className="homeTaskDeadline__title">
              Срок сдачі
            </p>
            <p className="homeTaskDeadline__date">30 травня</p>
          </div>
          <div className="homeTaskCommentsItem__container">
            <p className="homeTaskCommentsItemNoComment">Комментар для викладача</p>
            <p className="homeTaskCommentsItemComment__container">
              <img className="homeTaskCommentItem__avatar" src={defaultAvatar}/>
              <p className="homeTaskCommentItem__text">Там треба зробити це, це і це. Приклад ось так, так і так</p>
            </p>
          </div>
        </div>
        <div className="homeTaskItem__container">
          <div className="homeTaskItem">
            <img className="homeTaskItem__avatar" src={defaultAvatar}/>
            <div className="homeTaskItemText__container">
              <p className="homeTaskItem__text">Технологія токен рінг ч1Технологія токен рінг ч1</p>
              <p className="homeTaskItem__date">15 травня</p>
            </div>
            <MoreOutlined />
          </div>
          <div className="homeTaskDeadline__container">
            <p className="homeTaskDeadline__title">
              Срок сдачі
            </p>
            <p className="homeTaskDeadline__date">30 травня</p>
          </div>
          <div className="homeTaskCommentsItem__container">
            <p className="homeTaskCommentsItemNoComment">Комментар для викладача</p>
            <p className="homeTaskCommentsItemComment__container">
              <img className="homeTaskCommentItem__avatar" src={defaultAvatar}/>
              <p className="homeTaskCommentItem__text">Там треба зробити це, це і це. Приклад ось так, так і так</p>
            </p>
          </div>
        </div>
        <div className="homeTaskItem__container">
          <div className="homeTaskItem">
            <img className="homeTaskItem__avatar" src={defaultAvatar}/>
            <div className="homeTaskItemText__container">
              <p className="homeTaskItem__text">Технологія токен рінг ч1Технологія токен рінг ч1</p>
              <p className="homeTaskItem__date">15 травня</p>
            </div>
            <MoreOutlined />
          </div>
          <div className="homeTaskDeadline__container">
            <p className="homeTaskDeadline__title">
              Срок сдачі
            </p>
            <p className="homeTaskDeadline__date">30 травня</p>
          </div>
          <div className="homeTaskCommentsItem__container">
            <p className="homeTaskCommentsItemNoComment">Комментар для викладача</p>
            <p className="homeTaskCommentsItemComment__container">
              <img className="homeTaskCommentItem__avatar" src={defaultAvatar}/>
              <p className="homeTaskCommentItem__text">Там треба зробити це, це і це. Приклад ось так, так і так</p>
            </p>
          </div>
        </div>
    </div>
  </div>
}
