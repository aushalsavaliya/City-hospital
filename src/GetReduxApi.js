function GetReduxApi(){
    
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(json => console.log(json))

}

export {
    GetReduxApi
}