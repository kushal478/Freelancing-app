const API_END_POINT = 'http://68.183.84.245:5001/api/'
import { getToken } from './Storage.Service';

export const POST_DATA = async (API, params) => {
    // var fdata = params;
    // console.log(params, 123)
    // var fdata = new FormData();
    // for (var key in params) {
    //     fdata.append(key, params[key]);
    // }
    return fetch(API_END_POINT + API, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params),
        // redirect: 'follow',
    })
        .then(
            (response) => response.json(),
            (error) => console.log('POST ERROR :: ', error)
        )
        .then(async (responseJson) => {
            return responseJson;
        })
        .catch((error) => {
            console.log('POST ERROR :: ', error);
            return 'Something went wrong1';
        });
};

export const GET_DATA = async (API) => {
    return new Promise((resolve, reject) => {
        fetch(API_END_POINT + API, {
            method: 'GET',
            cache: "no-cache",
            mode: "cors",
            withCredentials: true,
            credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
            // headers: {
            //     'Content-Type': 'multipart/form-data',
            // },
            // body: formdata
        })
            .then((response) => response.json())
            .then((responseData) => {
                resolve(responseData)
            })
            .catch((err) => {
                console.log('GET ' + API + ' ERROR :: ', err)
                resolve({ status: 0 });
            })
    });
    // return fetch(API_END_POINT + API, {
    //     method: 'GET',
    //     // redirect: 'follow',
    //     // headers: {
    //     //     Accept: 'application/json',
    //     //     'Content-Type': 'application/json'
    //     // },
    // })
    //     .then(
    //         (response) => response.json(),
    //         (error) => console.log('GET ' + API + ' ERROR1 :: ', error)
    //     )
    //     .then(async (responseJson) => {
    //         // console.log(123, responseJson);
    //         return responseJson;
    //     })
    //     .catch((error) => {
    //         console.log('GET ' + API + ' ERROR :: ', error);
    //         return { status: 0, message: 'Something went wrong' };
    //     });
};

export const POST_DATA_HEADER = async (API, params) => {
    let token = await getToken();
    return new Promise((resolve, reject) => {
        var fdata = params;
        // console.log('token', token)
        // var fdata = new FormData();
        // for (var key in params) {
        //     fdata.append(key, params[key]);
        // }

        return fetch(API_END_POINT + API, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'token': token
            },
            cache: "no-cache",
            mode: "cors",
            redirect: 'follow',
            // mode: "cors",
            // withCredentials: true,
            // credentials: "include",
            body: JSON.stringify(params), //JSON.stringify(params),
            // redirect: 'follow',
        })
            .then(
                (response) => response.json(),
                (error) => console.log('POST ERROR :: ', error)
            )
            .then(async (responseJson) => {
                if (responseJson.status == 0 || responseJson.status == 2) {
                    console.log(responseJson.message);
                }
                resolve(responseJson);
            })
            .catch((error) => {
                console.log('POST ' + API + ' ERROR:: ', error);
                resolve({ status: 0, message: 'Something went wrong' });
            });
    });
};

