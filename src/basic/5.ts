enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  const today: any = new Date();
  const dayOfWeek: number = today.getDay();

  if (day === dayOfWeek) {
    return true;
  }
  return false;
};

isWeekend(0);
