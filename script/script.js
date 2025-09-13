// document.querySelectorAll('.love').addEventListener('click', function () {
//     const heart = document.getElementsByClassName('nav-heart').innerText;
//     console.log(heart)
//     const heartValueConvert = parseInt(heart);
//     const heartText = heartValueConvert + 1;
//     document.getElementsByClassName('nav-heart').innerText = heartText;

// })


const getClass = document.querySelectorAll('.love');
getClass.forEach(function (getClass) {
    getClass.addEventListener('click', function () {
        const heartElement = document.getElementsByClassName('nav-heart')[0];
        const heart = heartElement.innerText;
        const heartValueConvert = parseInt(heart);
        const heartText = heartValueConvert + 1;
        heartElement.innerText = heartText;
    });
});


// call button and point functionality

const callBtn = document.querySelectorAll('.call-btn');
callBtn.forEach(function (callBtn) {
    callBtn.addEventListener('click', function () {
        // console.log('calling');
        // date and time management
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const realTime = (`${hours}:${minutes}:${seconds}`);

        // console.log(realTime);
        const Cardinfo = callBtn.closest('.card-container-info')
        const cardTitle = Cardinfo.querySelector('.card-title');
        const cardNumber = Cardinfo.querySelector('.card-number');
        const cardTitleValue = cardTitle.innerText;
        const cardNumberValue = cardNumber.innerText;

        alert(`${cardTitleValue}
${cardNumberValue}`)
        const parentdiv = document.createElement('parentdiv')
        const div = document.createElement('div');
        const newPera1 = document.createElement('p');
        const newPera2 = document.createElement('p');
        const newPera3 = document.createElement('p');

        newPera1.innerText = cardTitleValue;
        newPera2.innerText = cardNumberValue;
        newPera3.innerText = realTime;

        parentdiv.append(div);
        div.append(newPera1);
        div.append(newPera2);
        parentdiv.append(newPera3);

        parentdiv.style.display = 'flex'
        parentdiv.style.justifyContent = 'space-between'
        parentdiv.style.marginTop = '10px'
        parentdiv.style.backgroundColor = 'lightgrey'
        parentdiv.style.padding = '10px'
        const callInfo = document.getElementById('call-info');
        callInfo.appendChild(parentdiv);

        const callPoint = document.getElementById('call-point');
        const callPointResult = parseInt(callPoint.innerText) - 20;
        if (callPointResult < 0) {
            alert('Balance are not available')
            breaks;
        }

        callPoint.innerText = callPointResult;

    })
})

// copy and count functionality

const copyBtn = document.querySelectorAll('.copy-btn');
copyBtn.forEach(function (copyBtn) {
    copyBtn.addEventListener('click', function () {
        // console.log('clicked copy')
        const countCopy = document.getElementById('cnt-copy');
        const countCopyValue = parseInt(countCopy.innerText) + 1;
        countCopy.innerText = countCopyValue;

        const card = copyBtn.closest('.card-container');

        // Get the number inside the card
        const number = card.querySelector('.cd-no').innerText;
        console.log(number)
        alert(`copied : ${number}`);

        // Copy to clipboard
        navigator.clipboard.writeText(number)
    })
})

// Call Clear History

document.getElementById('clear-btn').addEventListener('click', function () {
    const callHistory = document.getElementById('call-info');
    callHistory.innerHTML = '';

})

