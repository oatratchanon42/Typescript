function getClockAngle(hh_mm: string): number {
    // แยกชั่วโมงและนาทีจากสตริง
    const [hoursStr, minutesStr] = hh_mm.split(':');
    const hours = parseInt(hoursStr);
    const minutes = parseInt(minutesStr);
  
    // คำนวณมุมของเข็มชั่วโมงและนาฬิกา
    const hourAngle = (hours % 12) * 30 + (minutes / 60) * 30; // 12 ชั่วโมง * 30 องศา
    const minuteAngle = minutes * 6; // 60 นาที * 6 องศา
  
    // คำนวณความต่างของมุมองศา
    const angleDifference = Math.abs(hourAngle - minuteAngle);
  
    // คำนวณความต่างของมุมองศาที่เล็กที่สุด
    const smallerAngle = Math.min(360 - angleDifference, angleDifference);
  
    return smallerAngle;
  }
  
  // ตัวอย่าง
  console.log(getClockAngle("09:00")); //  90
  console.log(getClockAngle("17:30")); //  15