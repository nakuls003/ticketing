import { Publisher, Subjects, TicketUpdatedEvent } from "@nakul-org/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
