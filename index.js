// Note: You can wrap your JavaScript code in an event listener that listens for the "DOMContentLoaded" event, which is
// triggered when the HTML document has been fully loaded. This ensures that the elements exist when you try to access them.

document.addEventListener("DOMContentLoaded", function () {
  let outputBox = document.getElementById("inputAddress");
  let generatePasswordButton = document.getElementById(
    "generatePasswordButton"
  );

  generatePasswordButton.addEventListener("click", function () {
    generatePassword(outputBox);
  });

  function generatePassword(outputBox) {
    const passwordTypes = document.getElementsByName("flexRadioDefault");
    let selectedType = "Super Strong"; // Default selection

    // passwordTypes is an array-like collection of all the radio button elements that have the attribute name="flexRadioDefault"
    passwordTypes.forEach((type) => {
      if (type.checked) {
        selectedType = type.nextElementSibling.innerText.trim();
      }
    });

    let password = generatePasswordOfType(selectedType);
    outputBox.value = password;
  }

  function generatePasswordOfType(passwordType) {
    switch (passwordType) {
      case "Weak":
        return new WeakPassword().generatePassword(); // first create object and then call generatepass fn

      case "Strong":
        return new StrongPassword().generatePassword();

      case "Funny":
        return new FunnyPassword().generatePassword();

      default:
        return new SuperStrongPassword().generatePassword();
    }
  }
});

class PasswordGenerator {
  constructor() {
    this.password = this.generatePassword();
  }

  getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  pickOneUppercase() {
    const uppercaseCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    return this.getRandomItem(uppercaseCharacter);
  }

  pickOneLowercase() {
    const lowercaseCharacter = "abcdefghijklmnopqrstuvwxyz".split("");
    return this.getRandomItem(lowercaseCharacter);
  }

  pickOneSpecialCharacter() {
    const specialCharacter = "!@#$%^&*()_+-=[]{}|\\;:'\"<>,.?/`~".split("");
    return this.getRandomItem(specialCharacter);
  }
  pickoneNumber() {
    const numbers = "0123456789".split("");
    return this.getRandomItem(numbers);
  }

  generatePassword() {
    return "";
  }

  displayPassword(passType) {
    console.log(`${passType} Password: ${this.password}`);
  }
}

// Weak password
class WeakPassword extends PasswordGenerator {
  generatePassword() {
    return (
      this.pickOneLowercase() +
      this.pickOneSpecialCharacter() +
      this.pickOneLowercase() +
      this.pickoneNumber()
    );
  }
}

// Strong Password
class StrongPassword extends PasswordGenerator {
  generatePassword() {
    return (
      this.pickOneLowercase() +
      this.pickOneSpecialCharacter() +
      this.pickOneLowercase() +
      this.pickoneNumber() +
      this.pickOneLowercase() +
      this.pickOneSpecialCharacter() +
      this.pickOneLowercase() +
      this.pickoneNumber()
    );
  }
}

// Super Strong Password
class SuperStrongPassword extends PasswordGenerator {
  generatePassword() {
    return (
      this.pickOneLowercase() +
      this.pickOneSpecialCharacter() +
      this.pickOneLowercase() +
      this.pickoneNumber() +
      this.pickOneLowercase() +
      this.pickOneSpecialCharacter() +
      this.pickOneLowercase() +
      this.pickoneNumber() +
      this.pickOneLowercase() +
      this.pickOneSpecialCharacter() +
      this.pickOneLowercase() +
      this.pickoneNumber() +
      this.pickOneLowercase() +
      this.pickOneSpecialCharacter() +
      this.pickOneLowercase() +
      this.pickoneNumber()
    );
  }
}

// Funny Password
class FunnyPassword extends PasswordGenerator {
  generatePassword() {
    let funnyPass = [
      "Password",
      "Incorrect",
      "Passwordnotfound",
      "Nopassword",
      "passwordKyaRakhuYrr",
      "OhhToYehaiMeraPassword",
      "ChulladHoKya",
      "timekyahorhahvese",
      "timeisgonebhoolgyivosabkuch",
      "okkbyebaby",
    ];
    return this.getRandomItem(funnyPass);
  }
}
