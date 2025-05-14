document.addEventListener('DOMContentLoaded', function() {
    const valueInput = document.getElementById('value');
    const fromUnitSelect = document.getElementById('fromUnit');
    const toUnitSelect = document.getElementById('toUnit');
    const convertBtn = document.getElementById('convertBtn');
    const resultInput = document.getElementById('result');

    convertBtn.addEventListener('click', function() {
        const value = parseFloat(valueInput.value);
        const fromUnit = fromUnitSelect.value;
        const toUnit = toUnitSelect.value;

        if (isNaN(value)) {
            resultInput.value = 'Please enter a valid number';
            return;
        }

        let result;

        // Length conversions
        if (fromUnit === 'cm' && toUnit === 'in') {
            result = value / 2.54;
        } else if (fromUnit === 'in' && toUnit === 'cm') {
            result = value * 2.54;
        } else if (fromUnit === 'm' && toUnit === 'ft') {
            result = value * 3.28084;
        } else if (fromUnit === 'ft' && toUnit === 'm') {
            result = value / 3.28084;
        } else if (fromUnit === 'cm' && toUnit === 'm') {
            result = value / 100;
        } else if (fromUnit === 'm' && toUnit === 'cm') {
            result = value * 100;
        } else if (fromUnit === 'in' && toUnit === 'ft') {
            result = value / 12;
        } else if (fromUnit === 'ft' && toUnit === 'in') {
            result = value * 12;
        }
        // Weight conversions
        else if (fromUnit === 'kg' && toUnit === 'lb') {
            result = value * 2.20462;
        } else if (fromUnit === 'lb' && toUnit === 'kg') {
            result = value / 2.20462;
        }
        // Same unit conversion
        else if (fromUnit === toUnit) {
            result = value;
        } else {
            result = 'Conversion not supported';
        }

        resultInput.value = result.toFixed(2); // Display result with 2 decimal places
    });
});
