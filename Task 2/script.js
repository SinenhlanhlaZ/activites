function handleSubmit() {
  const fName = document.getElementById('firstName').value;
  const lName = document.getElementById('lastName').value;

  if(fName.trim() === '' || lName.trim() === ''){
    alert("A field was left empty")
  }
  else{
    localStorage.setItem('first_name', JSON.stringify(fName));
    localStorage.setItem('last_name', JSON.stringify(lName));
    alert(`${fName} ${lName} has been saved!`);
  }
}

document.getElementById('saveBtn').addEventListener('click', handleSubmit);
