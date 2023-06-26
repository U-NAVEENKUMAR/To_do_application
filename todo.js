var ul = document.getElementById('list')
var li

var addButton = document.getElementById('add')
addButton.addEventListener('click',addItem)

var removeButton = document.getElementById('remove')
removeButton.addEventListener('click',removeItem)

var removeAllButton = document.getElementById('alltodo')
removeAllButton.addEventListener('click',removeAllItems)



function addItem(){
    var input = document.getElementById('input')
    var item = input.value
    ul = document.getElementById('list')
    var textnode = document.createTextNode(item)

    if (item == '') {
        //add a p tag assign a value of Enter Your Todo
        // var p = document.createElement('p')
        // var myValue = document.createTextNode('Enter Your ToDo')
        // p.appendChild(myValue)
        // document.querySelector('input').appendChild(p)
        // var test = document.createElement('p')
        // test.textContent = 'Enter Your Todo'
        // document.querySelector('#input').appendChild(test)
        var test = document.createElement('p')
        test.textContent = 'Enter Your Todo'
        input.parentNode.insertBefore(test,input.nextSibling)
    }else{
        //create  li
        li = document.createElement('li')

        //create checkbox
        var checkBox = document.createElement('input')
        checkBox.type = 'checkbox'
        checkBox.setAttribute('id','check')

        //create lable
        var label = document.createElement('label')
        label.setAttribute('for','item')//optional

        //Add this elements on webpage
        ul.appendChild(label)
        li.appendChild(checkBox)
        label.appendChild(textnode)
        li.appendChild(label)
        ul.insertBefore(li,ul.childNodes[0])
        setTimeout(()=>{
            li.className = 'visual'
        },2)

        input.value = ''

    }
}





function removeItem(){
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
    }
}

function removeAllItems(){
     ul.remove()
}