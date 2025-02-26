window.onload = function () {
    const form = document.getElementById("MyForm");
    const radiusInput = document.getElementById("radius");
    const volumeOutput = document.getElementById("volume");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page refresh
        volume_sphere(); // Call the function on form submit
    });

    function volume_sphere() {
        const radius = parseFloat(radiusInput.value); // Convert input to a number
        console.log(radius); // Debugging output

        // Check if input is a valid non-negative number
        if (isNaN(radius) || radius < 0) {
            volumeOutput.value = "NaN"; // Show 'NaN' for invalid input
            return;
        }

        // Calculate the volume of the sphere
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

        // Display the result rounded to 4 decimal places
        volumeOutput.value = volume.toFixed(4);
    }
};
