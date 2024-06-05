import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";

test("Testeo el constructor del controller", (t) => {
  // test de ejemplo
  t.truthy(true);
});

test("Testeo el método processOptions con get y id", (t) => {
  const contactsController = new ContactsController();
  const options: ContactsControllerOptions = {
    action: "get",
    params: { id: 1 },
  };
  const result = contactsController.processOptions(options);
  t.deepEqual(result, {
    id: 1,
    name: "Ana",
  });
});
test("Testeo del metodo save", (t) => {
  const contactsController = new ContactsController();
  const options: ContactsControllerOptions = {
    action: "save",
    params: { id: 123, name: "emilio" },
  };
  contactsController.processOptions(options);
  const savedContact = contactsController.contacts.getOneById(123);
  t.deepEqual(savedContact, { id: 123, name: "emilio" });
});
// test("Testeo el método processOptions con get sin el id", (t) => {
//   const contactsController = new ContactsController();
//   const options: ContactsControllerOptions = {
//     action: "get",
//     params: null,
//   };
//   const arrayDePrueba = [
//     {
//       id: 1,
//       name: "Ana",
//     },
//     {
//       id: 2,
//       name: "Paula",
//     },
//     {
//       id: 3,
//       name: "Mer",
//     },
//     {
//       id: 4,
//       name: "Dana",
//     },
//   ];
//   const resultado = contactsController.processOptions(options);

//   t.deepEqual(resultado, arrayDePrueba);
// });

// test('should return all contacts when action is "get"', t => {
//   const contactsController = new ContactsController();
//   const options: ContactsControllerOptions = { action: 'get', params: null };
//   const result = contactsController.processOptions(options);
//   t.deepEqual(result, /* resultado esperado */);
// });
