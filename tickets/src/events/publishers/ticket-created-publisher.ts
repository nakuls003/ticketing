import { Publisher, Subjects, TicketCreatedEvent } from "@nakul-org/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
