function getHandScore(input: string): number {
  const cards = input.split('-'); // แยกคำสำหรับการ์ดทั้งหมด

  const suits: Record<string, number> = {}; // เก็บผลรวมค่าของการ์ดในแต่ละสัญลักษณ์
  const ranks: Record<string, number> = {}; // เก็บจำนวนการ์ดที่เหมือนกันของแต่ละเลข
  let totalScore = 0;

  cards.forEach(card => {
    const rank = card.substring(1); // แยกเลขระหว่างการ์ด (ยกเว้นอักษรแรก)
    const suit = card[0]; // แยกสัญลักษณ์จากตัวอักษรแรกของการ์ด

    // คำนวณค่าของการ์ดตามเลข
    const cardValue = rank === 'A' ? 11 : rank === 'J' || rank === 'Q' || rank === 'K' ? 10 : parseInt(rank);

    // คำนวณคะแนนตามสัญลักษณ์
    suits[suit] = (suits[suit] || 0) + cardValue;

    // นับจำนวนการ์ดที่เหมือนกันของแต่ละเลข
    ranks[rank] = (ranks[rank] || 0) + 1;
  });

  // ตรวจสอบการ์ด 3 ใบที่เหมือนกันตามเลข
  for (const rank in ranks) {
    if (ranks[rank] >= 3) {
      if (rank === 'A') {
        totalScore += 35;
      } else {
        totalScore += 32.5;
      }
      break; // ไม่สามารถมีการ์ดเกิน 1 ชุดที่เหมือนกันได้
    }
  }

  // คำนวณคะแนนตามสัญลักษณ์
  for (const suit in suits) {
    totalScore = Math.max(totalScore, suits[suit]);
  }

  return totalScore;
}

// ตัวอย่าง
console.log(getHandScore("S8 S10 CA")); // ผลลัพธ์ควรเป็น 18