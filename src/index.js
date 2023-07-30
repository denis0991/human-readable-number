module.exports = function toReadable (number) {
    function removeSpace(str) {
        if (str.endsWith(' ')) {
            return str.slice(0, -1)
        } else {
            return str
        }
    }
    number = String(number)
    let obj = {
        1: 'one', 2:'two', 3:'three', 4:'four', 5:'five', 6:'six', 7:'seven', 8:'eight', 9:'nine', 10:'ten',
         11:'eleven', 12:'twelve', 13:'thirteen', 14:'fourteen', 15:'fifteen',
          16:'sixteen', 17:'seventeen', 18:'eighteen', 19:'nineteen', 20:'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty',
          60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety', 100: 'one hundred', 200: 'two hundred', 300: 'three hundred',
           400: 'four hundred', 500: 'five hundred', 600: 'six hundred', 700: 'seven hundred', 800: 'eight hundred', 900: 'nine hundred',
      }
      let result = '';

      if (number > 0 && number <= 20 || number === 30 || number === 40 || number === 50 || number === 60 || number === 70 || number === 80 || number === 90 || number === 100
        || number === 200 || number === 300 || number === 400 || number === 500 || number === 600 || number === 700 || number === 800 || number === 900) {
        return obj[number]
        
        
      } if (number > 20 && number.length == 2) {
        result += obj[number[0] + 0] + ' ' + (obj[number[1]] || '')
        result = result.slice(0, 1) + result.slice(1).toLowerCase()
        return removeSpace(result)
      } if (number.length == 3 && number[1] == 1) {
        result += obj[number[0] + 0 + 0] + ' ' + obj[number[1] + number[2]]
        result = result.slice(0, 1) + result.slice(1).toLowerCase()
        return removeSpace(result)
      } if (number.length == 3 && number[1] != 1 && number[1] != 0 && number[2] != 0) {
        result += obj[number[0] + 0 + 0] + ' ' + (obj[number[1] + 0] || '') + ' ' + (obj[number[2]] || '')
        result = result.slice(0, 1) + result.slice(1).toLowerCase()
        return removeSpace(result)
      } if (number.length == 3 && number[1] != 1 && number[2] == 0) {
        result += obj[number[0] + 0 + 0] + ' ' + (obj[number[1] + 0] || '')
        result = result.slice(0, 1) + result.slice(1).toLowerCase()
        return removeSpace(result)
      } if (number.length == 3 && number[1] == 0) {
        result += obj[number[0] + 0 + 0] + ' ' + obj[number[2]]
        result = result.slice(0, 1) + result.slice(1).toLowerCase()
        return removeSpace(result)
      } if (number == 0) {
        return 'zero'
      }
}