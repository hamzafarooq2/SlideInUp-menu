
document.getElementById('dropdown-icon').addEventListener('click', showDropdown);

let open = false;
function showDropdown(){
    if(!open){
        document.querySelector('.dropdown').style.display = 'block';
        setTimeout(function(){
            document.querySelector('.dropdown').style.height = '200px';
        });
        open = true;
    }else{
        document.querySelector('.dropdown').style.display='none';
        open = false;
    }
}