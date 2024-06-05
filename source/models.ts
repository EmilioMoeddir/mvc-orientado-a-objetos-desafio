import * as jsonfile from "jsonfile";

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  arrayDeDatos: Contact[] = [];

  load() {
    const cargaDeData = jsonfile.readFileSync(__dirname + "/contacts.json");
    this.arrayDeDatos = cargaDeData;
  }
  getAll() {
    return this.arrayDeDatos;
  }
  addOne(contact) {
    this.arrayDeDatos.push(contact);
  }
  save() {
    jsonfile.writeFileSync(__dirname + "/contacts.json", this.arrayDeDatos);
  }
  getOneById(id) {
    return this.arrayDeDatos.find((index) => index.id == id);
  }
}

export { ContactsCollection };
