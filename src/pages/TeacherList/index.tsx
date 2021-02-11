import React, { FormEvent, useState } from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Inpput';
import Select from '../../components/Select';
import api from '../../Services/api';






function TeacherList(){

    const [teachers, setTeachers] = useState([]);
    const [subject, setSubject] = useState('');
    const [week_day, setWeek_day] = useState('');
    const [time, setTime] = useState('');
    
    async function searchTeachers(e: FormEvent){
        e.preventDefault();

        const response = await api.get('classes',{
            params:{
                subject,
                week_day,
                time
            }
        })

      setTeachers(response.data);
    }
    
    
    return(
        <div id="page-teacher-list" className="container">
        <PageHeader title="Profs disponiveis">
        <form id="search-teachers" onSubmit={searchTeachers}>
        <Select name='subject' 
            label='materia'
            value={subject}
            onChange={(e) => {setSubject(e.target.value)}}
            options={[
                {value: 'Artes', label:'Artes'},
                {value: 'fisica', label:'fisica'},
                {value: 'portugues', label:'portugues'},
            ]}
            ></Select>
           
           <Select name="week_day"
            label='dia da semana'
            value={week_day}
            onChange={(e) => {setWeek_day(e.target.value)}}
            options={[
                {value: '0', label:'domingo'},
                {value: '1', label:'segunda'},
                {value: '2', label:'terça'},
                {value: '3', label:'quarta'},
                {value: '4', label:'quinta'},
                {value: '5', label:'sexta'},
                {value: '6', label:'sabado'},
            ]}
            ></Select>
          
           <Input type="time" 
           name="time" 
           label="hora"
           value={time}
           onChange={(e) => {setTime(e.target.value)}}
           />
           
           <button type="submit">procurar</button>
        </form>
        </PageHeader>

        <main>
           {teachers.map(teacher=>{
               return <TeacherItem teacher={teacher}/>;
           })}
          
           
        </main>
        
    </div>
        );
}

export default TeacherList;