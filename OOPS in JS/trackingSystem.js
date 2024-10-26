function main(){
    //Create your constructor funtion with the name Shipment
        function Shipment(id, location, destination, status, resources) {
              this.id = id;
              this.location = location;
              this.destination = destination;
              this.status = status;
              this.resources = resources || [];
            }
    
    //Add the updateStatusAndResources using the object prototype
        Shipment.prototype.updateStatusAndResources = function ( newStatus,newResources) {
              this.status = newStatus;
              this.resources = newResources;
            };
    
    
    //Add the assignResource methods through Object prototype
        Shipment.prototype.assignResources = function (...assignedResources) {
              this.resources.push(...assignedResources);
            };
    
    
    //Create the object literal with tthe name TrackingSystem
            const TrackingSystem = {
              shipments: [],
          
              updateStatus: function (id, newStatus) {
                const shipment = this.shipments.find((shipment) => shipment.id === id);
                if (shipment) {
                  shipment.status = newStatus;
                }
              },
          
              viewShipment: function (id) {
                const shipment = this.shipments.find((shipment) => shipment.id === id);
                if (shipment) {
                  const {
                    id: shipmentId,
                    status,
                    resources,
                    location,
                    destination
                  } = shipment;
                  console.log(`
                  Shipment ID: ${shipmentId}
                  Status: ${status}
                  Resources: ${resources.join(", ")}
                  Location: ${location}
                  Destination: ${destination}
                `);
                }
              }
            };
    
    
    return {Shipment,TrackingSystem};
    //do not modify any other code.
    }

const shipment1 = new Shipment("12345", "New York", "Los Angeles", "En route", ["Driver", "Truck"]);
shipment1.updateStatusAndResources("Delayed", ["Forklift"]);
shipment1.assignResources("Worker", "Pallets");
const shipment2 = new Shipment("67890", "Chicago", "Miami", "In transit", ["Forklift"]);
shipment2.updateStatusAndResources("In transit", ["Driver"]);
TrackingSystem.shipments.push(shipment1, shipment2);
TrackingSystem.updateStatus("12345", "Delivered");
TrackingSystem.viewShipment("12345");