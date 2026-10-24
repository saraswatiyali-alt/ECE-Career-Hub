export type DomainId = 
  | 'embedded-firmware'
  | 'vlsi-chip-design'
  | 'iot-connected-devices'
  | 'communication-telecom'
  | 'hardware-pcb-design'
  | 'signal-processing'
  | 'robotics-automation'
  | 'automotive-ev';

export interface SubRole {
  title: string;
  description: string;
  level: 'Entry' | 'Mid' | 'Senior';
  avgFresherSalary: string;
  avgExpSalary: string;
  keySkills: string[];
}

export interface SkillItem {
  category: string;
  whatToLearn: string;
  importance: 'High' | 'Essential' | 'Recommended';
  tools: string[];
}

export interface RoadmapStep {
  stepNumber: number;
  title: string;
  description: string;
  duration: string;
  keyTopics: string[];
  recommendedPractice: string;
}

export interface ProjectIdea {
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  summary: string;
  componentsOrTools: string[];
  learningOutcome: string;
}

export interface CompanyHiring {
  name: string;
  domain: DomainId;
  logoText: string;
  fresherSalary: string; // e.g. "₹8 - 16 LPA ($85k-$110k)"
  experiencedSalary: string; // e.g. "₹22 - 45 LPA ($140k-$220k)"
  hiringRoles: string[];
  locations: string[];
  hiringRounds: string[];
  interviewTips: string;
  website: string;
}

export interface CourseModule {
  id: string;
  title: string;
  duration: string;
  topics: string[];
  labOrExercise: string;
}

export interface CourseQuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface FreeCourse {
  id: string;
  domainId: DomainId;
  title: string;
  instructorOrSource: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  levelTag?: 'Basic' | 'Intermediate' | 'Advanced' | 'Industry Level';
  trackStage?: number; // 1 to 6 for the progressive Embedded track
  durationHours: number;
  description: string;
  modules: CourseModule[];
  quiz: CourseQuizQuestion[];
  skillsGained: string[];
}

export interface CareerField {
  id: DomainId;
  title: string;
  symbol: string; // icon identifier or symbol like </>
  badgeText: string;
  shortDescription: string;
  overview: string;
  marketOutlook: string;
  subRoles: SubRole[];
  skillsRequired: SkillItem[];
  roadmap: RoadmapStep[];
  roadmapSummary: string; // "C/C++ → Microcontrollers → Sensors → Wireless protocols..."
  projectIdeas: ProjectIdea[];
  hiringCompanies: CompanyHiring[];
  featuredCourseId: string;
  tags: string[];
}

export interface CertificateData {
  id: string;
  studentName: string;
  courseTitle: string;
  domainTitle: string;
  issueDate: string;
  credentialId: string;
  grade: string;
}
