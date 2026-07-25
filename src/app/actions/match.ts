"use server";

// 1. Umang's Verified Stack (Positive Points)
const UMANG_SKILLS: Record<string, string[]> = {
  Python: ["python", "py", "pandas", "numpy"],
  Java: ["java", "spring", "springboot", "j2ee"],
  TypeScript: ["typescript", "ts", "javascript", "js"],
  "React / Next.js": ["react", "reactjs", "next.js", "nextjs", "next"],
  "Node.js": ["node", "nodejs", "express", "backend"],
  "Cloud & DevOps": [
    "aws",
    "docker",
    "kubernetes",
    "k8s",
    "ci/cd",
    "deployment",
  ],
  Database: ["sql", "mysql", "postgresql", "postgres", "supabase", "rdbms"],
  "Machine Learning": [
    "ml",
    "machine learning",
    "tensorflow",
    "pytorch",
    "nlp",
    "lstm",
    "model",
  ],
  "Data Science": ["data science", "data analysis", "statistics", "analytics"],
};

// 2. Competitor/Alternative Stack (Penalty Points - Grouped fairly into categories)
const OTHER_SKILLS: Record<string, string[]> = {
  "Other Languages": ["c++", "c#", "ruby", "php", "golang", "rust", "swift"],
  "Other Frontends": ["angular", "vue", "svelte"],
  "Other Backends": ["django", "laravel", "ruby on rails", "spring boot"],
  "Other Clouds": ["azure", "gcp", "google cloud"],
  "NoSQL / Big Data": ["mongodb", "cassandra", "hadoop", "spark", "oracle"],
};

// Helper function to safely escape regex characters like ++ or #
const escapeRegExp = (string: string) =>
  string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export async function analyzeJobDescription(
  _prevState: unknown,
  formData: FormData,
) {
  const jdText = formData.get("jd")?.toString().toLowerCase();

  if (!jdText || jdText.length < 20) {
    return {
      error: "Please paste a longer job description for an accurate match.",
    };
  }

  // Simulate AI processing time for UX
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const matchedSkills: string[] = [];
  let umangSkillCount = 0;

  // 1. Count what the JD asks for that Umang HAS
  for (const [category, synonyms] of Object.entries(UMANG_SKILLS)) {
    const hasMatch = synonyms.some((synonym) => {
      // Using \W (non-word char) or ^/$ boundaries handles C++ and C# safely
      const regex = new RegExp(`(^|\\W)${escapeRegExp(synonym)}($|\\W)`, "i");
      return regex.test(jdText);
    });

    if (hasMatch) {
      matchedSkills.push(category);
      umangSkillCount++;
    }
  }

  // 2. Count what the JD asks for that Umang DOES NOT have (by category)
  let missingSkillCount = 0;
  for (const synonyms of Object.values(OTHER_SKILLS)) {
    const hasMissingMatch = synonyms.some((synonym) => {
      const regex = new RegExp(`(^|\\W)${escapeRegExp(synonym)}($|\\W)`, "i");
      return regex.test(jdText);
    });

    if (hasMissingMatch) {
      missingSkillCount++;
    }
  }

  // 3. Flawless ATS Scoring Algorithm
  const totalJdSkillsDetected = umangSkillCount + missingSkillCount;
  let finalScore = 0;

  if (totalJdSkillsDetected === 0) {
    // JD has no technical keywords (e.g., generic text). Give a soft score.
    finalScore = Math.floor(Math.random() * 15) + 20; // 20-35%
  } else {
    // Calculate balanced ratio
    const baseScore = (umangSkillCount / totalJdSkillsDetected) * 100;

    // Add ATS-style organic variance (+/- 2%)
    const variance = Math.floor(Math.random() * 5) - 2;
    finalScore = Math.min(Math.max(Math.round(baseScore + variance), 15), 98);
  }

  // Severe cap if zero overlap is found but technical skills WERE requested
  if (matchedSkills.length === 0 && missingSkillCount > 0) {
    finalScore = Math.min(finalScore, 12);
  }

  return {
    success: true,
    score: finalScore,
    matched: matchedSkills,
    error: undefined,
  };
}
