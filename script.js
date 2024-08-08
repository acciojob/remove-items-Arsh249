document.getElementById('removeButton').addEventListener('click', function() {
    var select = document.getElementById('colorSelect');
    var selectedOption = select.options[select.selectedIndex];

    if (selectedOption) {
        select.removeChild(selectedOption);
    } else {
        alert("Please select a color to remove.");
    }
});
