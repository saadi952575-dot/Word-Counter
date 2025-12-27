const textInput = document.getElementById("textInput");
const wordCount = document.getElementById("wordCount");
const letterCount = document.getElementById("letterCount");
const letterFreq = document.getElementById("letterFreq");

function updateCounts() {
    let text = textInput.value.trim();

    if(text === "") {
        wordCount.textContent = 0;
        letterCount.textContent = 0;
        letterFreq.innerHTML = "";
        return;
    }

    // Word count
    let words = text.split(/\s+/);
    wordCount.textContent = words.length;

    // Letter count
    let letters = text.replace(/[^a-zA-Z]/g, "");
    letterCount.textContent = letters.length;

    // Letter frequency
    let freq = {};
    letters.toLowerCase().split("").forEach(char => {
        freq[char] = (freq[char] || 0) + 1;
    });

    let sortedKeys = Object.keys(freq).sort();

    // Display frequency (all same color)
    let freqHtml = "<h3>Letter Frequency:</h3><ul>";
    sortedKeys.forEach(key => {
        freqHtml += `<li style="color: black">${key}: ${freq[key]}</li>`;
    });
    freqHtml += "</ul>";
    letterFreq.innerHTML = freqHtml;
}

// Live update on typing
textInput.addEventListener("input", updateCounts);

// Initial update (for placeholder text)
updateCounts();
