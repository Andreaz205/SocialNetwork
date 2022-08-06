import React from 'react';
import myPhoto from "../assets/images/myphoto.jpg"
import {homeActions} from "../redux/home-reducer";
import {selectFrameworkValue} from "../redux/home-selector";
import {selectOccupationValue} from "../redux/home-selector";
import {useDispatch, useSelector} from "react-redux";




const Homepage = () =>
{
    let occupation = useSelector(selectOccupationValue)
    let framework = useSelector(selectFrameworkValue)
    let dispatch = useDispatch()

    let homePageSubmitCallback = (e) => {
        e.preventDefault();

    }

    let setInputFrameworkValue = (framework) => {
        dispatch(homeActions.setFramework(framework))
     }

    let setInputOccupationValue = (occupation) => {
        dispatch(homeActions.setOccupation(occupation))
    }

    return(
        <div>
           <img src={myPhoto} height="400px" alt='Здесь должно быть изображение'/>
            <br />
            Junior frontend-разработчик


            <br />
            <form onSubmit={homePageSubmitCallback}>
                <label id="framework">Введи свой фреймворк</label>
                <br />
                <input value={framework} name="framework" type="text" onChange={(e)=> setInputFrameworkValue(e.target.value)} />
                <br />
                <label id="occupation">Введи свою профессию(Дизайнер/Разработчик)</label>
                <br />
                <input value={occupation} name="occupation" type="text"  onChange={(e)=> setInputOccupationValue(e.target.value)}/>
                <br />
                <input type="submit" value="Отправить данные"/>
            </form>



        </div>
    )
}

export  {Homepage};