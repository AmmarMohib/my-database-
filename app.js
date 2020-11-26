function getdata() {
var name = document.getElementById('name')
var roll = document.getElementById('roll')
var student = {
 name : name.value,
 roll : roll.value
}
firebase.database().ref('student').set(student) 
}

