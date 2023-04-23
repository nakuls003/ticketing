import { Subjects, Publisher, OrderCancelledEvent } from "@nakul-org/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
