import type { Service } from './types';

export const INITIAL_SERVICES: Service[] = [
  {
    id: 1,
    title: "1. בסיס נתונים (CRM – Airtable)",
    description: "בניית טבלת CRM מרכזית לניהול לידים ולקוחות, כולל ניהול הרשאות והכנת דוחות וסטטיסטיקות למדידת ביצועים.",
    price: 2000,
    selected: true,
  },
  {
    id: 2,
    title: "2. אוטומציות (Make)",
    description: "חיבור כל מקורות הלידים, יצירת טריגרים אוטומטיים לשליחת וואטסאפ, התראות לאנשי מכירות, פולו-אפים, עדכון סטטוסים ושליחת חומרים ללקוחות סגורים.",
    price: 2300,
    selected: true,
  },
  {
    id: 3,
    title: "3. אינטגרציות",
    description: "חיבור המערכות: Airtable (CRM), Make (אוטומציה), משולם (סליקה), WhatsApp API, וטפסי האתר (WordPress/Elementor).",
    price: 800,
    selected: true,
  },
  {
    id: 4,
    title: "4. מערכת וואטסאפ אוטומטית",
    description: "הגדרת בוט לקליטת לידים, שאלות סינון ראשוניות, הודעות אוטומטיות (תודה, פולואפ, סגירה) וחיבור מלא ל-CRM למעקב.",
    price: 700,
    selected: true,
  },
];