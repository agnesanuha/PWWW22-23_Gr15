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
    let i =1;

    console.log(item,"item")

    for(i;i<=6;i++) {
        if(i != parseInt(item)) {
            console.log("sffd");
            moreDetails = document.getElementById(`item${i}`);
            moreDetails.style.display = 'none';
        } else {
            console.log("asdasd");
            moreDetails = document.getElementById(`item${i}`);
            console.log(moreDetails,"moreDetails")
            moreDetails.style.display = 'flex';
        }
    }

    localStorage.setItem('moreDetails',item);
}

window.onload = function () { 
    let moreDetails = localStorage.getItem("moreDetails");
    if(moreDetails) {
        viewMoreDetails(moreDetails);
    }
}