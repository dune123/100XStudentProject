import { studentData } from './array.js';

const tableBody=document.querySelector('tbody');

function renderStudent(arr){
    tableBody.innerHTML = '';

    arr.forEach((item,index)=>{
        const eachRow=document.createElement('tr');

        eachRow.innerHTML=`<tr>
                        <td>${index+1}</td>
                        <td>
                            <span><img src=${item.img_src}/></span>
                            ${item.first_name} ${item.last_name}
                        </td>
                        <td>
                            ${item.class}
                        </td>
                        <td>
                            ${item.marks}
                        </td>
                        <td>
                            ${item.passing?"Passed":"Failed"}
                        </td>
                        <td>
                            ${item.email}
                        </td>
        </tr>`
        tableBody.appendChild(eachRow);
    })
}

renderStudent(studentData);

//search feature
function handleSearch(){
    const name=document.getElementById('searchInput').value.toLowerCase();
    const filterData=studentData.filter((item)=>{
        return (
            item.first_name.toLowerCase().includes(name)||
            item.last_name.toLowerCase().includes(name)||
            item.email.toLowerCase().includes(name)
        )
    });
    renderStudent(filterData);
}

document.getElementById('searchInput').addEventListener('input', handleSearch);
document.getElementById('searchButton').addEventListener('click', handleSearch);


//sorting on the basis of full name A to Z
function sortingAtoZ(){
    const arr=[...studentData].sort((a,b)=>{
        const fullNameA=(a.first_name+" "+a.last_name).toLowerCase();
        const fullNameB=(b.first_name+" "+b.last_name).toLowerCase();
        return fullNameA.localeCompare(fullNameB);
    });
    console.log("Here");
    renderStudent(arr);
}

document.getElementById("sortAtoZ").addEventListener("click",sortingAtoZ);

//sorting on the basis of full name Z to A;
function sortingZtoA(){
    const arr=[...studentData].sort((a,b)=>{
        const fullNameA=(a.first_name+" "+a.last_name).toLowerCase();
        const fullNameB=(b.first_name+" "+b.last_name).toLowerCase();
        return fullNameB.localeCompare(fullNameA);
    })
    renderStudent(arr);
}

document.getElementById("sortZtoA").addEventListener("click",sortingZtoA);


//The sorting functionality should only show students who are passing.
function sortStudentPassing(){
    const arr=[...studentData].filter((item)=>{
        return item.passing===true;
    })

    renderStudent(arr);
}

document.getElementById("SortByPassing").addEventListener("click",sortStudentPassing);

//sort by marks 
function sortByMarks(){
    const sortedArray = [...studentData].sort((a, b) => a.marks - b.marks);

    renderStudent(sortedArray);
}

document.getElementById("sortByMarks").addEventListener("click",sortByMarks);


//The sorting functionality should include sorting by class in ascending order.
function ascendingSortClass(){
    const sortedArray = [...studentData].sort((a, b) => a.class - b.class);
    //console.log("here")
    renderStudent(sortedArray);
}

document.getElementById("SortByClass").addEventListener("click",ascendingSortClass);


