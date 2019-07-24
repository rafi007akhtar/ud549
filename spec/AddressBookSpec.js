describe("Address book", function() {
    it("Should be able to add a contact", function() {
        let addressBook = new AddressBook(),
            contact = new Contact();
        
        addressBook.addContact(contact);
        
        expect(addressBook.getContact(0).toBe(contact));
    })
});
