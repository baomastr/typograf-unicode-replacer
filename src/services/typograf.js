const apiUrl = 'http://www.typograf.ru/webservice/';

// export const getTypografedText = () => (async input => {
//     console.log(input);
//     return await fetch(apiUrl, {
//         method: 'post',
//         headers: {
//             // Accept: 'text/html',
//             'Content-Type': 'text/plain; charset=windows-1251',
//         },
//         body:JSON.stringify({text: 'test'}),
//     })
//         // .then((data) =>  console.log(data))
//         .then((response) => {
//             return response.text();
//         }).then((data) => {
//             console.log(data);
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// })();

export const getTypografedText = input => {
    return fetch(`${apiUrl}`, {
        mode: 'no-cors',
        method: 'post',
        headers: {
            Accept: 'text/plain',
            'Content-Type': 'text/plain',
        },
        body: JSON.stringify({
            text: input,
        }),
    })
        .then(res => {
            console.log(res);});
};