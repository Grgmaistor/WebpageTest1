var closeButton = document.querySelector(".sideBar");

let navOpen = localStorage.getItem("navBarOpen");
if (navOpen == "true") // Apply navigation bar state
{
    openSideBar();
} else {
    closeSideBar();
}
function toggleSideBar() // Toggle navigation bar
{
    var navOpen = localStorage.getItem("navBarOpen");
    if (navOpen == "false") // Appley navigation bar status
    {
        openSideBar();
    } else {
        closeSideBar();
    }
}
function openSideBar() {
    closeButton.style.width = "100px";
    closeButton.style.left = "0";
    localStorage.setItem("navBarOpen", true);
}

function closeSideBar() {

    closeButton.style.width = "0";
    closeButton.style.left = "-100px";
    localStorage.setItem("navBarOpen", false);
}
toggleTheme(localStorage.getItem("pageTheme") == "false" ? false : true)
function toggleTheme(override = null) {
    var darkMode;
    if (override != null) {
        darkMode = override;
    }
    else {
        darkMode = localStorage.getItem("pageTheme") == "false" ? true : false; // Invert the current theme that is selected
    }
    localStorage.setItem("pageTheme", darkMode)

    document.body.className = darkMode ? "body darktheme" : "body";
}