import { Publisher, OrderCreatedEvent, Subjects } from "@nakul-org/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
