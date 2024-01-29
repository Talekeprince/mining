var searchTrackInput = document.querySelector('#search-track');
var trackButton = document.querySelector('#track-btn');

searchTrackInput.value = '';
trackButton.addEventListener('click', (e) => {
    e.preventDefault()
    if (searchTrackInput.value === '') {
        alert('Please enter tracking number');
    } else if (searchTrackInput.value === 'stephen200') {
        alert('Your tracking data was discovered, please wait for some fear minute!')
        console.log(searchTrackInput.value);
    } else {
        alert('please enter a valid tracking number');
    }
})