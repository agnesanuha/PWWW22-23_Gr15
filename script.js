function search() {
    var input, filter, itemsForSearch, a, i, txtValue;
    input = document.getElementById("inputForSearch");
    filter = input.value.toUpperCase();
    itemsForSearch = document.getElementById("forSearch");
    itemForSearch = itemsForSearch.getElementsByClassName("item");
    for (i = 0; i < itemForSearch.length; i++) {
        a = itemForSearch[i].getElementsByTagName("h5")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            itemForSearch[i].style.display = "";
        } else {
            itemForSearch[i].style.display = "none";
        }
    }
}


function viewMoreDetails(item) {
    let moreDetails;
    moreDetails = document.getElementById(`item${item}`);
    console.log(moreDetails,"moreDetails");
    moreDetails.style.display = 'flex';
}