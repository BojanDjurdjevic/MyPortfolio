let auto = document.querySelector("#auto")
let todo = document.querySelector("#todo")
let phone = document.querySelector("#phone")
let autoBtn = document.querySelector("#desc1")
let todoBtn = document.querySelector("#desc2")
let phoneBtn = document.querySelector("#desc3")
let autoDiv = document.querySelector("#auto_desc")
let todoDiv = document.querySelector("#todo_desc")
let phoneDiv = document.querySelector("#phone_desc")
let closeAuto = document.querySelector("#close_auto")
let closeTodo = document.querySelector("#close_todo")
let closePhone = document.querySelector("#close_phone")

autoBtn.addEventListener("click", () => {
    if(todo.classList.contains("visible")) {
        todo.classList.remove("visible")
    }
    todo.classList.add("invisible")
    if(phone.classList.contains("visible")) {
        phone.classList.remove("visible")
    }
    phone.classList.add("invisible")

    setTimeout(() => {
        todo.style.display = 'none'
        phone.style.display = 'none'
        if(autoDiv.classList.contains("invisible")) {
            autoDiv.classList.remove("invisible")
        }
        autoDiv.style.display = 'flex'
        autoDiv.classList.add("visible")
    }, 600)
})
closeAuto.addEventListener("click", () => {
    if(autoDiv.classList.contains("visible")) {
        autoDiv.classList.remove("visible")
    }
    autoDiv.classList.add("invisible")
    setTimeout(() => {
        autoDiv.style.display = 'none'
        todo.style.display = 'flex'
        phone.style.display = 'flex'
        if(phone.classList.contains("invisible")) {
            phone.classList.remove("invisible")
        }
        phone.classList.add("visible")
        if(todo.classList.contains("invisible")) {
            todo.classList.remove("invisible")
        }
        todo.classList.add("visible")
    }, 600)
})

todoBtn.addEventListener("click", () => {
    if(auto.classList.contains("visible")) {
        auto.classList.remove("visible")
    }
    auto.classList.add("invisible")
    if(phone.classList.contains("visible")) {
        phone.classList.remove("visible")
    }
    phone.classList.add("invisible")

    setTimeout(() => {
        auto.style.display = 'none'
        phone.style.display = 'none'
        if(todoDiv.classList.contains("invisible")) {
            todoDiv.classList.remove("invisible")
        }
        todoDiv.style.display = 'flex'
        todoDiv.classList.add("visible")
    }, 600)
})
closeTodo.addEventListener("click", () => {
    if(todoDiv.classList.contains("visible")) {
        todoDiv.classList.remove("visible")
    }
    todoDiv.classList.add("invisible")
    setTimeout(() => {
        todoDiv.style.display = 'none'
        auto.style.display = 'flex'
        phone.style.display = 'flex'
        if(phone.classList.contains("invisible")) {
            phone.classList.remove("invisible")
        }
        phone.classList.add("visible")
        if(auto.classList.contains("invisible")) {
            auto.classList.remove("invisible")
        }
        auto.classList.add("visible")
    }, 600)
})

phoneBtn.addEventListener("click", () => {
    if(auto.classList.contains("visible")) {
        auto.classList.remove("visible")
    }
    auto.classList.add("invisible")
    if(todo.classList.contains("visible")) {
        todo.classList.remove("visible")
    }
    todo.classList.add("invisible")

    setTimeout(() => {
        auto.style.display = 'none'
        todo.style.display = 'none'
        if(phoneDiv.classList.contains("invisible")) {
            phoneDiv.classList.remove("invisible")
        }
        phoneDiv.style.display = 'flex'
        phoneDiv.classList.add("visible")
    }, 600)
})
closePhone.addEventListener("click", () => {
    if(phoneDiv.classList.contains("visible")) {
        phoneDiv.classList.remove("visible")
    }
    phoneDiv.classList.add("invisible")
    setTimeout(() => {
        phoneDiv.style.display = 'none'
        auto.style.display = 'flex'
        todo.style.display = 'flex'
        if(todo.classList.contains("invisible")) {
            todo.classList.remove("invisible")
        }
        todo.classList.add("visible")
        if(auto.classList.contains("invisible")) {
            auto.classList.remove("invisible")
        }
        auto.classList.add("visible")
    }, 600)
})