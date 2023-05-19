import data from '../data/data.json'

export default async function getList(url) {
    // const request = fetch(url, {
    //     method: 'GET',
    //     headers: {
    //         'Access-Control-Allow-Origin': '*',
    //         'Content-Type': 'application/json',
    //     }
    // });

    // const result = await request;

    // if (!result.ok) {
    //     console.error('Ошибка!');

    //     return
    // }

    // return await result.json()

    return data
}