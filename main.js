const button = document.querySelector('#push');
const nama = document.querySelector('#newtask .name');
const alamat = document.querySelector('#newtask .address');
const nim = document.querySelector('#newtask .nim');
const nilai = document.querySelector('#newtask .nilai');
const task = document.querySelector('#task');
const clear = document.querySelector('#clear');
const table = document.querySelector('.newtable');



let current_number = 1;
button.addEventListener('click', function(){
    if (nama.value.length == 0 && alamat.value.length == 0 && nim.value.length == 0 && nilai.value.length == 0){
        alert('Tolong Di isi dong Aktivitasnya ganteng😋😋😘')
    } else {
        
        table.innerHTML += 
            `<tr class="list-data">
            <td>${current_number}</td>
            <td>${nama.value}</td>
            <td>${alamat.value}</td>
            <td>${nim.value}</td>
            <td>${nilai.value}</td>
        </tr> 
            ` 
            ;
            nama.value = '';
            alamat.value = '';
            nim.value = '';
            nilai.value = '';

            current_number++;

            searchFunction();

            let current_task = document.querySelectorAll('.delete');

            for(let i = 0; i<current_task.length; i++){
                current_task[i].addEventListener('click', function(){
                    this.parentNode.remove();
                })
            }


    }
})

clear.addEventListener('click',function(){
    table.innerHTML = '';
    current_number = 1;
})



function searchFunction() {
    const search = document.querySelector('#search')

    search.addEventListener("input",function (){
        const filter =search.value.toLowerCase();
        const listItems = document.querySelectorAll('.list-data')

        listItems.forEach((item)=>{
            let text = item.textContent;
            if(text.toLowerCase().includes(filter.toLowerCase())){
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        })
    })

}