const input = document.getElementById('text');
const date = document.getElementById('date');
const listPlace = document.getElementById('list-place')

function add(){
    if (input.value === ''){
        alert('please put your Task')
    } else if (date.value === ''){
        alert('please put the date')
    } else {
        let h2 = document.createElement('h2')
        h2.innerHTML = input.value;

        let p = document.createElement('p')
        p.innerHTML = date.value;

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";

        let div = document.createElement('div');
        div.appendChild(h2)
        div.appendChild(p)
        div.appendChild(span)

        let list = document.createElement('div')
        list.classList.add('list')
        list.appendChild(div)

        listPlace.appendChild(list)


        div.addEventListener('click', function() {
            div.classList.toggle('checked')
            h2.classList.toggle('checked')
            p.classList.toggle('checked')   
            save()        
        });

        span.addEventListener('click', function(e){
            e.target.parentElement.parentElement.remove()

        });
    }
    input.value = '';
    date.value = '';
    save()
}

function save() {
    localStorage.setItem("datasave", listPlace.innerHTML);
}

function show() {
    listPlace.innerHTML = localStorage.getItem("datasave");
    let divs = document.querySelectorAll('.list > div');
    let spans = document.querySelectorAll('.list > div > span');

    divs.forEach((div) => {
        div.addEventListener('click', function() {
            div.classList.toggle('checked')
            div.querySelector('h2').classList.toggle('checked')
            div.querySelector('p').classList.toggle('checked')
            save()
        });
    });

    spans.forEach((span) => {
        span.addEventListener('click', function(e){
            e.target.parentElement.parentElement.remove()
            save()
        });
    });
}

show()



