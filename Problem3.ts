function getQuestionPart(phrases: string[]): string[] {
    // หาคำร่วมที่อยู่ในคำถามทั้งสาม
    const commonPart = findCommonPart(phrases);
  
    // สร้างคำถามโดยลบคำร่วมออกจากแต่ละคำถาม
    const questionPart = phrases.map(phrase => removeCommonPart(phrase, commonPart));
  
    return questionPart;
  }
  
  // ฟังก์ชันหาคำร่วม
  function findCommonPart(phrases: string[]): string {
    const firstPhrase = phrases[0];
    for (let i = 0; i < firstPhrase.length; i++) {
      const potentialCommonPart = firstPhrase.substring(0, i + 1);
      if (phrases.every(phrase => phrase.startsWith(potentialCommonPart))) {
        return potentialCommonPart;
      }
    }
    return '';
  }
  
  // ฟังก์ชันลบคำร่วมออกจากคำถาม
  function removeCommonPart(phrase: string, commonPart: string): string {
    return phrase.replace(commonPart, '').trim();
  }
  
  // ตัวอย่าง
  console.log(getQuestionPart(["BATHROOM", "BATH SALTS", "BLOODBATH"])); //  ["ROOM", "SALTS", "BLOOD"]
  console.log(getQuestionPart(["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"])); //  ["BE", "GIRL", "SHIP"]
  