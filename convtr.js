const calcutaleTemp = () => {
    const numberTemp=document.getElementById('temp').value;

    const tempSelected=document.getElementById ('temp_diff');
    const valueTemp=temp_diff.options[tempSelected.selectionIndex].value;
    const celsToFah=(cels) =>{
        let fahrenheit=Math.round((cels * 9/5)+32);
        return fahrenheit;
    }
    const fahToCels=(fah) =>{
        let celsius=Math.round((fah -32)*5/9);
        return celsius;
    }
     let result;
     if(valueTemp='cels'){
         result = celsToFah(numberTemp);
         document.getElementById('resultContaine').innerHTML = '  =  $ {result} °Fahrenheit';
     }    else{
        result = fahToCels (numberTemp);
        document.getElementById('resultContaine').innerHTML = '  =  $ {result} °Celsius';
     }

}