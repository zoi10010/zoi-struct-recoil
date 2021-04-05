import { AccountDetailsState, LoginDetailsState, FormDetailsState } from './atoms'
import { selector } from 'recoil'

export const userDetailsState = selector({
    key: 'userDetailsState',
    get: ({ get }) => {
        debugger;
        const userDetails = get(LoginDetailsState)
        return userDetails
    },
})

export const accountDetailsState = selector({
    key: 'accountDetailsState',
    get: ({ get }) => {
        debugger;
        const user = get(AccountDetailsState)
        return user
    },
})
 
//form
export const formDetailsState = selector({
    key: 'formDetailsState',
    get: ({ get }) => {
        debugger;
        const user = get(FormDetailsState)
        console.log(user.name)

        return user
    },
})


// export const expenseStatsState = selector({
//     key: 'expenseStatsState',
//     get: ({ get }) => {
//         const transactionList = get(transactionListState)
//         const amounts = transactionList.map((transaction) => transaction.amount)
//         const income = amounts
//             .filter((num) => num >= 0)
//             .reduce((acc, num) => (acc += num), 0)
//             .toFixed(2)

//         const expense =
//             amounts
//                 .filter((num) => num < 0)
//                 .reduce((acc, num) => (acc += num), 0) * -(1).toFixed(2)

//         return {
//             income,
//             expense,
//         }
//     },
// })

// export const transactionListLocalStorage = selector({
//     key: 'transactionListLocalStorage',
//     get: ({ get }) => {
//         const transactionList = get(transactionListState)
//         localStorage.setItem(
//             'TRANSACTION_LIST',
//             JSON.stringify(transactionList)
//         )
//         return transactionList
//     },
// })
