// Roman Numeral Converter
document.addEventListener('DOMContentLoaded', function() {
    const numberInput = document.getElementById('number');
    const convertBtn = document.getElementById('convert-btn');
    const output = document.getElementById('output');

    // Roman numeral mapping in descending order
    const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];

    // Convert Arabic number to Roman numeral
    function convertToRoman(num) {
        let result = '';
        
        for (let i = 0; i < romanNumerals.length; i++) {
            while (num >= romanNumerals[i].value) {
                result += romanNumerals[i].numeral;
                num -= romanNumerals[i].value;
            }
        }
        
        return result;
    }

    // Validate input and display appropriate message
    function validateAndConvert() {
        const inputValue = numberInput.value.trim();
        
        // Check if input is empty
        if (inputValue === '') {
            output.textContent = 'Please enter a valid number';
            output.className = 'output-section error';
            return;
        }
        
        const number = parseInt(inputValue);
        
        // Check if number is less than 1
        if (number < 1) {
            output.textContent = 'Please enter a number greater than or equal to 1';
            output.className = 'output-section error';
            return;
        }
        
        // Check if number is greater than or equal to 4000
        if (number >= 4000) {
            output.textContent = 'Please enter a number less than or equal to 3999';
            output.className = 'output-section error';
            return;
        }
        
        // Convert to Roman numeral
        const romanNumeral = convertToRoman(number);
        output.textContent = romanNumeral;
        output.className = 'output-section success';
    }

    // Event listeners
    convertBtn.addEventListener('click', validateAndConvert);
    
    // Allow Enter key to trigger conversion
    numberInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            validateAndConvert();
        }
    });
    
    // Clear output when input changes
    numberInput.addEventListener('input', function() {
        output.textContent = '';
        output.className = 'output-section';
    });
});