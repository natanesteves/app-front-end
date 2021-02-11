import React from 'react';
import whatsappicon from '../../assets/images/icons/whatsapp.svg';

interface TeacherItemProps{
    teacher: {
    avatar: string
    bio: string
    cost: number
    id: number
    name: string
    subject: string
    whatsapp: string
    }
}


const TeacherItem: React.FC<TeacherItemProps> = ({ teacher}) =>{
    return(
        <article className="teacher-item">
        <header>
         <img src="" alt="nada"></img>
         <div>
             <strong>{teacher.name}</strong>
             <span>{teacher.subject}</span>
         </div>
        </header>
        <p>
            {teacher.bio}
        </p>
        <footer>
       <p>
           {teacher.cost}
       </p>
       <button type="button">
           <img src={whatsappicon} alt="whats"/>
       </button>
   </footer>
       </article>
    );
}

export default TeacherItem;