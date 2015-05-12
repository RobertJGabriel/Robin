window.onload = localStorage();




function localStorage() {
    // Check browser support
    if (typeof (Storage) != "undefined") {
        // Store
        localStorage.setItem("lastname", "Smith");
        // Retrieve
        alert(localStorage.getItem("lastname"));
    } else {

    }
}