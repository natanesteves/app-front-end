import React, {FormEvent, useState} from 'react';
import Input from '../../components/Inpput';
import {useHistory} from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';
import api from '../../Services/api';

function TeacherForm(){
    const history = useHistory();

    const [name,setName] = useState('');
    const [avatar,setAvatar] = useState('');
    const [whatsapp,setWhatsapp] = useState('');
    const [bio,setBio] = useState('');

    const [subject,setSubject] = useState('');
    const [cost,setCost] = useState('');

    const [scheduleItems, setscheduleItems] = useState([
        { week_day:2, from: '8:00', to:'10:00' }
    ]);

    function addNewScheduleItem(){
      
       setscheduleItems([
           ...scheduleItems,
           { week_day:0, from: '', to:''
           }
       ]);
    }

    function setscheduleItemValue(position: number, field: string, value: string){
        const newArray = scheduleItems.map((scheduleItem, index)=>{
            if(index === position){
                return {...scheduleItem, [field]: value};
            }
            return scheduleItem;
        });
        console.log(newArray);
    }

    function handleCreateClass(e: FormEvent){
        e.preventDefault();

        api.post('classes',{
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost:Number(cost),
            schedule:
            
             scheduleItems
        }).then(()=>{
            alert('cadastro feito')
        
        history.push('/');
        }).catch(()=>{
            alert('erro no cadastro')
        })
        console.log({
            name,
            avatar,
            whatsapp,
            bio,
            subject, 
            cost,
            scheduleItems
        }

        )
    }

    return(
        <div>
        <PageHeader title="q incrivel que voce quer dar aula kk"
        description="primeiro passo é preeencher o formulário">
            test
        </PageHeader>
        <main>
            <form onSubmit={handleCreateClass}>
        <fieldset>
            <legend>Seus dados</legend>
            <div className="input-block">
                <label htmlFor="name">Nome completo</label>
                <Input type="text" 
                name='name' 
                label='nome' 
                value={name}
                onChange={(e)=>{setName(e.target.value)}}/>


                <div className="input-block">
                <label htmlFor="avatar">Avatar</label>
                <Input type="text" 
                id="avatar" 
                name='avatar'
                label ='avatar'
                value={avatar}
                onChange={(e)=>{setAvatar(e.target.value)}}/>


            </div>
            <div className="input-block">
                <label htmlFor="whatsapp">Whatsapp</label>
                
                <Input type="text" 
                id="whatsapp"
                name='whatsapp' 
                label='whatsapp'
                value={whatsapp}
                onChange={(e)=>{setWhatsapp(e.target.value)}}/>

                <Textarea name='bio' 
                label='bota o q tu quiser'
                value={bio}
                onChange={(e)=>{setBio(e.target.value)}}/>

                
            </div>
            </div>
        </fieldset>
        <fieldset>
            <legend>Sobre a aula</legend>
            <Select name='subject' 
            label='materia'
            value={subject}
            onChange={(e)=>{setSubject(e.target.value)}}
            options={[
                {value: 'Artes', label:'Artes'},
                {value: 'fisica', label:'fisica'},
                {value: 'portugues', label:'portugues'},
            ]}
            ></Select>

            <Input name='cost' 
            label='custo da hora aula'
            value={cost}
            onChange={(e)=>{setCost(e.target.value)}}></Input>
        </fieldset>
        <fieldset>
            <legend>horarios disponiveis
                <button onClick={addNewScheduleItem}>novo horario</button>
            </legend>
         {scheduleItems.map((scheduleItem,index) =>{
             return(   
             <div key={scheduleItem.week_day} className="schedule-item">
             <Select name="week_day"
             label='dia da semana'
             value={scheduleItem.week_day}
             onChange={e => setscheduleItemValue(index,'week_day', e.target.value)}
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
             <Input 
             name="from" 
             label="das" 
             type="time"value={scheduleItem.from}
             onChange={e => setscheduleItemValue(index,'from', e.target.value)}
             ></Input>
             <Input 
             name="to" 
             label="até" 
             type="time"value={scheduleItem.to}
             onChange={e => setscheduleItemValue(index,'to', e.target.value)}
             ></Input>
             </div>);
         })}
        </fieldset>
        <footer>
            <button type="submit">Salvar os dados</button>
        </footer>
        </form>
        </main>
        </div>
    )
}

export default TeacherForm;