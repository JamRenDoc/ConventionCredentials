export class Attendee {
    constructor (
        public Vanid: number,
        public FirstName: string,
        public MiddleName: string,
        public LastName: string,
        public suffix: string,
        public StreetAddress: string,
        public City: string,
        public zip: string,
        public county: string,
        public email: string,
        public PhoneNumber: number,
        public delAlt: string,
        public district: number,
        public group: string,
        public delegateNumber: string,
        public checkinTime: string,
        public hasEdits: boolean,
        public alternateAssignment: boolean,
        public alternateName: string
    ) {  }
}
