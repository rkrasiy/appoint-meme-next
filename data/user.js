export const user = {
    "id": 1,
    "name": "Elon Musk",
    "subtitle": "drive cutting-edge initiatives",
    "email": "elonkmusk@twitter.com",
    "phone": "951 620 0273",
    "logo": "./hombre.svg",
    "employers": [
        { id: 1, name: "Juan", cargo: "Jefe", selected: false },
        { id: 1, name: "Jose", cargo: "Empleado", selected: false },
        { id: 1, name: "Dani", cargo: "Empleado", selected: false },
    ],
    "services": [
    { id: 1, title: "Corte de pelo adulto", precio: "15€", selected: false },
    { id: 2, title: "Corte de pelo niño", precio: "10€", selected: false },
    { id: 4, title: "Corte de barba", precio: "8€", selected: false },
    { id: 5, title: "Corte de pelo bebe", precio: "9€", selected: false },
  ], "days": [
    { day: '15 HOY', NotAvailable: true },
    { day: '16 MIÉ',  NotAvailable: false },
    { day: '18 JUEVES', NotAvailable: false },
    { day: '19 VIER',  NotAvailable: false },
    { day: '20 SAB',  NotAvailable: false },
    { day: '21 DOM',  NotAvailable: true },

  ],
  "hours": [
    { hour: '12:00 - 13:00', NotAvailable: true },
    { hour: '17:00 - 18:00', NotAvailable: false },
    { hour: '18:00 - 19:00', NotAvailable: false },
    { hour: '20:00 - 21:00', NotAvailable: false },
    { hour: '21:00 - 22:00', NotAvailable: false },
    
  ],
  
}