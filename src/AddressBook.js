function AddressBook() {
    this.contacts = [];
}

AddressBook.prototype.addContact = function(contact) {
    this.contacts.push(contact);   
}

AddressBook.prototype.getContact = function(ind) {
    return this.contacts[ind];
}

AddressBook.prototype.deleteContact = function(ind) {
    this.contacts.splice(ind, 1);
}
