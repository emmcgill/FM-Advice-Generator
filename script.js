const button = document.getElementById('selector');
const adviceId = document.getElementById('advice-id');
const advice = document.getElementById('advice');

button.addEventListener('click', () => {
    fetch(`https://api.adviceslip.com/advice/${numberRandomizer()}`)
        .then((response) => {
            if(response.status !== 200)
            {
                alert(`Error: ${response.status}`);
            }else{
                return response.json();
            }
        })
        .then((data) => {
            adviceId.innerText = data.slip.id;
            advice.innerText = data.slip.advice;
        })

});


function numberRandomizer() {
    min = Math.ceil(1);
    max = Math.floor(224);
    
    return String(Math.floor(Math.random() * (max - min + 1) + min));
}