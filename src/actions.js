export function addToDo(todo){
    console.log('ADD_TO_DO ',todo)
    return{
        type:'ADD_TO_DO',
        todo
    }
}
export function removeToDo(todo){
    console.log('REMOVE_TO_DO ',todo)
    return{
        type:'REMOVE_TO_DO',
        todo
    }
}
export function changeBoundary(boundary){
    console.log('CHANGE_BOUNDARY ',boundary)
    return{
        type:'CHANGE_BOUNDARY',
        boundary
    }    
}