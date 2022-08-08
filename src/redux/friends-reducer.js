import man1 from "../assets/images/man1.jpeg"
import man2 from "../assets/images/man2.jpg"
import man3 from "../assets/images/man3.jpg"
import man4 from "../assets/images/man4.jpg"
import man5 from "../assets/images/man5.png"
import man6 from "../assets/images/man6.jpg"
import {friendsApi} from "../api/friends-api";



let initialState = {
    friends: [],
        // {"_id":"62ee9ce5f9894da3924ca93d","email":"user@mail.ru","password":"$2b$04$JWM/4l5Rbs0h/hdGX3SZpuZ0VIApyZtiJreqB7/ETm8tqcK.2UC/G","isActivated":false,"__v":0},
        // {"_id":"62ef426864c99332051fca1d","email":"andrei.baz1337@gmail.ru","password":"$2b$04$7XFkzVab2w1GGl9xaSAEMunRicjTkK6zRj1wj69Jqs1EtMwwsLOF2","isActivated":false,"__v":0},
        // {"_id":"62ef6457f801081713f43bbb","email":"andrei-bazunov@mail.ru","password":"$2b$04$0DQyYjjaizHoAkT2DT6nkO6i.3nT8wODchRUeXr0Swdw9MTn5WYa2","isActivated":false,"__v":0},
        // {"_id":"62ef80926f076b41a9f5b644","email":"andrei@mail.ru","password":"$2b$04$dZjuUsYIsfmCu5HQngRkAeI56VRhv1X8f2B2yxhAcoaz.ItnEUKtW","isActivated":false,"__v":0},
        // {"_id":"62eff867ea72dd7e49a2d801","email":"email@mail.ru","password":"$2b$04$rZMSGwpIfgA9TbqkHhBV6eav/LT9MUXosFFinlxm2sqBPNm.1ALZK","isActivated":false,"__v":0},
        // {"_id":"62f5baf460c9fe632ab47e4b","email":"email1@mail.ru","password":"$2b$04$G/1FactLqIQ3mUKsj6mV7.YLUC6JZBDLrjdSA9kZxlfY5/RDqc/kq","isActivated":false,"__v":0},
        // {"_id":"62f5baf960c9fe632ab47e51","email":"email2@mail.ru","password":"$2b$04$i88OYdvf95sKRcAY.GBdseRldz76C7a3tDbBtYBiMs9HpTW3cjyTy","isActivated":false,"__v":0},
        // {"_id":"62f5bb0460c9fe632ab47e57","email":"email3@mail.ru","password":"$2b$04$/ER/zt8I8sfFeNQmHF6hhObf543eL6SkR2pLMUmzowCsvRH733gRW","isActivated":false,"__v":0},
        // {"_id":"62f5bb0960c9fe632ab47e5d","email":"email4@mail.ru","password":"$2b$04$/fffw2Br7Juo0ijY3lm.ye1nWFD4/uOx4HAQf20A/RUqOlVF/0LKG","isActivated":false,"__v":0},
        // {"_id":"62f5bb0d60c9fe632ab47e63","email":"email5@mail.ru","password":"$2b$04$muVMlEQXjr6UC2SAWtXimu4spvvnVq2.ALd8wUR3wa09.K0bdNM3i","isActivated":false,"__v":0},
        // {"_id":"62f5bb1160c9fe632ab47e69","email":"email6@mail.ru","password":"$2b$04$G3gNgB5xkXdg04.KkOHkzeU9TqDOR/D9ehqw6k1ijzlZQ3iWJD9FK","isActivated":false,"__v":0},
        // {"_id":"62f5bb1460c9fe632ab47e6f","email":"email7@mail.ru","password":"$2b$04$2aCw.tFis5AVGeEumMm9teR1abGwsEW68o7CfXpBrzmzLFuCtWhmK","isActivated":false,"__v":0},
        // {"_id":"62f5bb1760c9fe632ab47e75","email":"email8@mail.ru","password":"$2b$04$sziLo0HMRwsl93iQv53iT.gYiZmz.s6n.lpt7wUrcBKfaa7SZvS1m","isActivated":false,"__v":0},
        // {"_id":"62f5bb1a60c9fe632ab47e7b","email":"email9@mail.ru","password":"$2b$04$L8TfdsOO2AtMeMwN4w16wOcTn8q5DDAUv6dJzDk7yr75cp5cYMV5q","isActivated":false,"__v":0},
        // {"_id":"62f5bb1d60c9fe632ab47e81","email":"email10@mail.ru","password":"$2b$04$DTIk6b874nEMHNoIlWqtd./LziNkkNfVvs5agKaJ/Ztopz8yBclju","isActivated":false,"__v":0},
        // {"_id":"62f5bb2d60c9fe632ab47e88","email":"email11@mail.ru","password":"$2b$04$mnjiGj0mY24E9Z2M7qbf5..xgpmffTb8oT8/BK1kSjh6fS/l9fXKS","isActivated":false,"__v":0}

    currentPage: 1,
    totalItemsCount: 25 ,
    pageSize: 5
}

const friendsReducer =(state=initialState, action)=>{
    switch(action.type) {
        case "SET_USERS":
            return {
                ...state,
                friends: action.users,
                totalItemsCount: action.totalItemsCount,
                currentPage: action.currentPage

            }
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.payload
            }
        case "SET_TOTAL_USERS_COUNT":
            return {
                ...state,
                totalItemsCount: action.payload
            }
        default:
            return state;
    }
}

export default friendsReducer

export const friendsActions = {
    setUsers: (users, totalItemsCount, currentPage) => ({
        type: 'SET_USERS',
        users, totalItemsCount, currentPage
    }),
    setCurrentPage: (currentPage) => ({
        type: 'SET_CURRENT_PAGE',
        currentPage
    }),
    setTotalItemsCount: (totalItemsCount) => ({
        type: 'SET_CURRENT_PAGE',
        count: totalItemsCount
    })
}


export const requestUsers = (pageSize, currentPage) => async (dispatch) => {
    // console.log(" thunk  " + pageSize, currentPage)
    let response = await friendsApi.getUsersByQuery(pageSize, currentPage)
    dispatch(friendsActions.setUsers(response.requestedUsers, response.totalItemsCount, response.currentPageNumber))
}