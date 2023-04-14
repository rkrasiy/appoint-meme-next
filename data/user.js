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
    { numday: '15', day:'HOY', NotAvailable: true },
    { numday: '16', day:'MAR', NotAvailable: true },
    { numday: '17', day:'MIE', NotAvailable: true },
    { numday: '18', day:'JUE', NotAvailable: true },
    { numday: '19', day:'VIE', NotAvailable: true },
    { numday: '20', day:'SAB', NotAvailable: true },

  ],
  "hours": [
    { hour: '12:00 - 13:00', NotAvailable: true },
    { hour: '17:00 - 18:00', NotAvailable: false },
    { hour: '18:00 - 19:00', NotAvailable: false },
    { hour: '20:00 - 21:00', NotAvailable: false },
    { hour: '21:00 - 22:00', NotAvailable: false },
    
  ],
  
}