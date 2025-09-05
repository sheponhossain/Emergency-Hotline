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
        const cardTitle = document.querySelectorAll('.card-title')[0];
        const cardNumber = document.querySelectorAll('.card-number')[0];
        const cardTitleValue = cardTitle.innerText;
        const cardNumberValue = cardNumber.innerText;
        alert(`${cardTitleValue}
${cardNumberValue}`)
        const newPera = document.createElement('p');
        const newPera1 = document.createElement('p');
        const newPera2 = document.createElement('p');
        newPera2.style.alignContent = 'right';
        newPera.classList.add('call-data')
        newPera.style.marginTop = "14px";
        newPera.style.paddingTop = "10px";
        newPera1.style.paddingBottom = "10px";
        newPera.style.paddingLeft = "10px";
        newPera1.style.paddingLeft = "10px";
        newPera.style.backgroundColor = "#DEDEDE";
        newPera1.style.backgroundColor = "#DEDEDE";
        // newPera1.classList.add('call-info-style')
        newPera.innerText = cardTitleValue;
        newPera1.innerText = cardNumberValue;
        newPera2.innerText = realTime;
        // console.log(newPera2)


        const callInfo = document.getElementById('call-info');
        // callInfo.appendChild(newPera);


        callInfo.appendChild(newPera);
        callInfo.appendChild(newPera1);
        callInfo.appendChild(newPera2);
        const callPoint = document.getElementById('call-point');
        const callPointResult = parseInt(callPoint.innerText) - 20;
        // console.log(callPointResult);
        if (callPointResult < 0) {
            alert('Your Balance not available')
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


    })
})


