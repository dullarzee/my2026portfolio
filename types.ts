export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  mainImage: string;
  images: string[];
  badge: string;
  tagline: string;
  description: string;
  disclaimer?: string;
  siteUrl: string;
  highlights: {
    icon: string;
    text: string;
  }[];
  techStack: string[];
  role?: string;
  architectureDetails: {
    problem: string;
    solution: string;
    keyDecisions: string[];
    schemaSample?: string;
    endpointsSample?: string[];
    metrics: { label: string; value: string }[];
  };
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  tags: string;
  typeValue: string;
}

export interface CodeSnippet {
  filename: string;
  language: string;
  envBadge: string;
  code: string;
  notes: string;
}

export interface ProjectInquiry {
  id: string;
  name: string;
  email: string;
  organization: string;
  type: string;
  budget: string;
  message: string;
  submittedAt: string;
}
