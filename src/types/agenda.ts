export type MentorType = {
  name: string;
  time_zone: string;
};

export type DateTimeType = {
  date_time: Date;
};

export type AgendaType = {
  mentor: MentorType;
  calendar: DateTimeType[];
};
