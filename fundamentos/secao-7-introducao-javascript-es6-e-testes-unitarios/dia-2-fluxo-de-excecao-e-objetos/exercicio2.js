const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
  
    //  Complete a função customerInfo() para que seu retorno seja similar a 
    // “Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, 
    // R. Rua das Flores, Nº: 389, AP: 701”.
    // 💡Note que o parâmetro da função já está sendo passado na chamada da função.    
    
    const person = order.order.delivery.deliveryPerson;
    const person1 = order.name;
    const telephone = order.phoneNumber;
    const address = order.address.street;
    const addressNumber = order.address.number;
    const apart = order.address.apartment;

    console.log(`Olá, ${person}, entrega para: ${person1}, Telefone: ${telephone}, R. ${address}, Nº: ${addressNumber}, AP: ${apart}.\n`);
};
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    // Complete a função orderModifier() para que seu retorno seja similar a 
    // “Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.”
    // Modifique o nome da pessoa compradora.
    // Modifique o valor total da compra para R$ 50,00.

   const secondName = order.name = 'Luiz Silva';
   const newPayment = order.payment.total = 50;
   const flavor = order.order.pizza.marguerita;
   const flavor1 = order.order.pizza.pepperoni;
   const soda = order.order.drinks.coke.type;

    console.log(`Olá ${secondName}, o total do seu pedido de ${flavor}, ${flavor1} e ${soda} é de R$${newPayment},00.`);
   
  };
  
  orderModifier(order);