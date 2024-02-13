const toggle = document.getElementById("toggle");
const monthly = document.querySelectorAll(".monthly");
const annually = document.querySelectorAll(".annually");

document.addEventListener('keydown', (event) => {
    if(event.key === ' ' || event.key === 'Enter'){
        toggle.checked = !toggle.checked;
        selectPlan(); 
    }
});
    
function selectPlan(){
    if(toggle.checked){
        monthly.forEach(element => {
            element.style.display = 'none';
        });
        annually.forEach(element => {
            element.style.display = 'flex';
        });
    }else{
        monthly.forEach(element => {
            element.style.display = 'flex';
        });
        annually.forEach(element => {
            element.style.display = 'none';
        });
    }
}