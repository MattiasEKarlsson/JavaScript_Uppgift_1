let id = 1;
export class User {
  constructor(firstName, lastName, email, phone, adress, postal, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.adress = adress;
    this.postal = postal;
    this.city = city;
  }
  id = id++;

  get displayInfo() {
    return `${this.id}. ${this.firstName} ${this.lastName}`;
  }
}