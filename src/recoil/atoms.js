import { atom } from 'recoil'

const localStorageEffect = key => ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
        setSelf(JSON.parse(savedValue))
    }
    onSet(newValue => {
        localStorage.setItem(key, JSON.stringify(newValue))
    })
}

//Camel Case Only Use in atom - Denis - 14-mar-2021
export const LoginDetailsState = atom({
    key: 'LoginDetailsState',
    default: [],
    // add these lines to your state atom, 
    // with the localStorage key you want to use
    effects_UNSTABLE: [
        localStorageEffect('logindetails'),
    ],
})

//Camel Case Only Use in atom - Denis - 14-mar-2021
export const AccountDetailsState = atom({
    key: 'AccountDetailsState',
    default: [],
    // add these lines to your state atom, 
    // with the localStorage key you want to use
    effects_UNSTABLE: [
        localStorageEffect('accountdetails'),
    ],
})

//Camel Case Only Use in atom - Denis - 14-mar-2021
export const FormDetailsState = atom({
    key: 'FormDetailsState',
    default: [],
    // add these lines to your state atom, 
    // with the localStorage key you want to use
    effects_UNSTABLE: [
        localStorageEffect('formdetails'),
    ],
})




