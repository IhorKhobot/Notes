const list = document.getElementById('list')
const create = document.getElementById('create')
const Title = document.getElementById('title')

list.addEventListener('click', e => {

    if (e.target.className.includes('cancel')) {
        e.target.parentElement.parentElement.remove()
    }
    if (e.target.className.includes('approve')) {
        e.target.parentElement.parentElement.classList.toggle('red')
        console.log(e.target.parentElement.parentElement.firstElementChild.textContent)
    }


})


create.onclick = function () {

    if (Title.value.length === 0) {
        return undefined
    } else {
        list.insertAdjacentHTML('beforeend',
            List(Title.value)
        )

    }
    Title.value = ''

}

function List(element) {
    return `<li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${element}</span>
                <span id="buttons">
                    <span class="btn btn-small btn-success approve" >&#128504;</span>
                    <span class="btn btn-small btn-danger cancel" >&#10007;</span>
                </span>
            </li>`
}

// const notes = [
//
// ]
//
//
// create.onclick = function () {
//
//     if (Title.value.length === 0) {
//         return undefined
//     }
//     const newNote = {
//         title: Title.value,
//         completed: false,
//     }
//     notes.push(newNote)
//     render()
//     Title.value = ''
//
// }
//
// list.onclick = function (event) {
//     if(event.target.dataset.index) {
//         const index = parseInt(event.target.dataset.index)
//         const type = event.target.dataset.type
//
//         if(type === 'toggle') {
//            notes[index].completed = !notes[index].completed
//         } else if(type === 'remove') {
//             notes.splice(index, 1)
//         }
//         render()
//     }
// }
//
// function List1(element, index) {
//
//     return `<li class="list-group-item d-flex justify-content-between align-items-center">
//                 <span class="${element.completed ? "text-decoration-line-through" : ''}">${element.title}</span>
//                 <span id="buttons">
//                     <span class="btn btn-small btn-${element.completed ? 'warning' : 'success'} approve" data-index="${index}" data-type="toggle">&#128504;</span>
//                     <span class="btn btn-small btn-danger cancel" data-index="${index}" data-type="remove">&#10007;</span>
//                 </span>
//             </li>`
// }
//
//
// function render() {
//     list.innerHTML = ''
//     if(notes.length === 0) {
//         list.innerHTML = '<p> No elements found</p>'
//     }
//     for (let i = 0; i < notes.length; i++) {
//         list.insertAdjacentHTML('beforeend',
//             List1(notes[i], i)
//         )
//     }
//
// }
//
// render()
