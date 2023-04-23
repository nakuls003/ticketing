import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@nakul-org/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
