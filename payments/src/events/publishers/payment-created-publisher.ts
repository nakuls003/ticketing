import { Subjects, Publisher, PaymentCreatedEvent } from "@nakul-org/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
