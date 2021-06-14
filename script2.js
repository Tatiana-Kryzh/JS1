let formText = document.createElement('form');
document.body.append(formText);
let txtFocus = document.createElement('textarea');
let txtRead = document.createElement('textarea');
txtRead.readOnly = true;
formText.append(txtFocus, txtRead);
txtFocus.addEventListener('change', function(){
    txtRead.value = txtFocus.value;
});
