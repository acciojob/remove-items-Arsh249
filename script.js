//your JS code here. If required.
document.getElementById('removeButton').addEventListener('click', function() {
    var select = document.getElementById('colorSelect');
    select.remove(select.selectedIndex);
});
