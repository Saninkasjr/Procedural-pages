// Define the arrays of font families and font weights
const fonts = ["Roboto", "Lobster", "Pacifico", "Dancing Script", "Indie Flower"];
const weights = ["normal", "bold", "bolder", "lighter"];

// Generate a random theme for the page
function generateTheme() {
    // Get a random image from Unsplash
    const imageUrl = "https://source.unsplash.com/random/800x600";
    // Get a random font family
    const fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
    // Get a random font weight
    const fontWeight = weights[Math.floor(Math.random() * weights.length)];
    // Return the theme as an object
    return {
        imageUrl: imageUrl,
        fontFamily: fontFamily,
        fontWeight: fontWeight
    };
}

// Apply the theme to the page elements
function applyTheme(theme) {
    // Get the body element
    const body = document.querySelector("body");
    // Get the card element
    const card = document.querySelector(".card");
    // Get the card title element
    const cardTitle = document.querySelector(".card-title");
    // Get the button element
    const button = document.querySelector("button");
    // Create a new image element
    const image = new Image();
    // Set the image source to the theme image url
    image.src = theme.imageUrl;
    // Create a new color thief instance
    const colorThief = new ColorThief();
    // When the image is loaded
    image.onload = function() {
        // Get the dominant color of the image
        const color = colorThief.getColor(image);
        // Convert the color to a hex string
        const hexColor = rgbToHex(color[0], color[1], color[2]);
        // Set the background image of the body to the theme image url
        body.style.backgroundImage = `url(${theme.imageUrl})`;
        // Set the background color of the card to a slightly transparent white
        card.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
        // Set the color of the card title to the dominant color of the image
        cardTitle.style.color = hexColor;
        // Set the background color of the button to the dominant color of the image
        button.style.backgroundColor = hexColor;
        // Set the border color of the button to the dominant color of the image
        button.style.borderColor = hexColor;
        // Set the font family of the body to the theme font family
        body.style.fontFamily = theme.fontFamily;
        // Set the font weight of the body to the theme font weight
        body.style.fontWeight = theme.fontWeight;
    };
}

// Validate the user input and display a message
function login() {
    // Get the username and password inputs
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    // Check if the username and password are correct
    if (username === "admin" && password === "1234") {
        // Display a success alert
        Swal.fire({
            icon: 'success',
            title: 'Login successful!',
            text: 'Welcome to the dashboard!',
            confirmButtonText: 'OK'
        });
    } else {
        // Display an error alert
        Swal.fire({
            icon: 'error',
            title: 'Invalid username or password!',
            text: 'Please try again!',
            confirmButtonText: 'OK'
        });
    }
    // Prevent the form from submitting
    return false;
}

// Convert RGB values to a hex string kt
function rgbToHex(r, g, b) {
    // Convert each value to a two-digit hexadecimal string
    const rHex = r.toString(16).padStart(2, "0");
    const gHex = g.toString(16).padStart(2, "0");
    const bHex = b.toString(16).padStart(2, "0");
    // Concatenate the strings with a # prefix
    const hex = "#" + rHex + gHex + bHex;
    // Return the hex string
    return hex;
}

// Generate and apply a theme when the page is loaded
window.onload = function() {
    const theme = generateTheme();
    applyTheme(theme);
};

// Generate and apply a theme when the page is refreshed-- yes
window.onbeforeunload = function() {
    const theme = generateTheme();
    applyTheme(theme);
};

// Generate and apply a theme when the page is refreshed
window.addEventListener("unload", function() {
    const theme = generateTheme();
    applyTheme(theme);
});