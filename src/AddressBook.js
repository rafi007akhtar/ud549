function AddressBook() {
    this.contacts = [];
    this.initialComplete = false;
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

AddressBook.prototype.getInitialContacts = function(cb) {
    let self = this;
    
    setTimeout(function() {
        self.initialComplete = true;
        if (cb)
            return cb();
    }, 3000);
}
