const rgbColor: [number, number, number] = [255, 0, 45];
// const rgbColor: [number, number, number] = [255, 0, 45,6];

type HTTPResponse = [number, string];
const goodRes: HTTPResponse = [200, "ok"];
// const goodRes1: HTTPResponse = ["ok", 200]; -Error
// goodRes[0] = "500";
goodRes.push(123);
goodRes.pop();

const responses: HTTPResponse[] = [
  [404, "Not found"],
  [200, "ok"],
];

// enum OrderStatus {
//   PENDING,
//   SHIPPED,
//   DELIVERED,
//   RETURNED,
// }

// const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);

enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
  Error = 234,
}
ArrowKeys.LEFT;

// More liked method
const enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const myStatus = OrderStatus.DELIVERED;
