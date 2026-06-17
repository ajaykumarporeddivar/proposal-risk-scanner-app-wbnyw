export type SortDir = 'asc' | 'desc';

export type ApiResponse<T> = {
  ok: boolean;
  data?: T;
  error?: string;
};

export interface DemoUser {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'member';
  plan: 'free' | 'pro' | 'pro_plus';
  avatar: string; // URL to avatar image
  joinedAt: string; // ISO 8601 date string
}

export type ProposalStatus =
  | 'draft'
  | 'submitted'
  | 'in_review'
  | 'approved'
  | 'rejected'
  | 'blocked'
  | 'completed';

export type RiskLevel = 'low' | 'medium' | 'high' | 'critical';
export type RiskType = 'scope' | 'terms' | 'pricing' | 'resourcing' | 'compliance' | 'delivery';
export type RiskStatus = 'open' | 'addressed' | 'accepted' | 'mitigated';

export interface Risk {
  id: string;
  proposalId: string;
  type: RiskType;
  level: RiskLevel;
  description: string;
  mitigationStrategy: string;
  status: RiskStatus;
  ownerId: string; // Refers to DemoUser.id
  createdAt: string; // ISO 8601 date string
  updatedAt: string; // ISO 8601 date string
}

export type ClientSegment = 'small_biz' | 'enterprise' | 'startup';

export interface Client {
  id: string;
  name: string;
  contactEmail: string;
  segment: ClientSegment;
  logo: string; // URL to client logo
}

export interface Proposal {
  id: string;
  name: string;
  description: string;
  clientId: string; // Foreign key to Client.id
  userId: string; // Foreign key to DemoUser.id (owner)
  status: ProposalStatus;
  riskLevel: RiskLevel; // Overall aggregated risk for the proposal
  submittedAt: string; // ISO 8601 date string
  dueDate: string; // ISO 8601 date string
  value: number; // Monetary value of the proposal
  score: number; // Internal quality score (0-100)
  reviewNotes: string[];
  actions: string[]; // Key actions identified for this proposal
  createdAt: string; // ISO 8601 date string
  updatedAt: string; // ISO 8601 date string
}

export type ActivityType = 'created' | 'updated' | 'reviewed' | 'submitted' | 'approved' | 'rejected' | 'risk_identified' | 'risk_addressed';

export interface Activity {
  id: string;
  userId: string;
  proposalId: string;
  type: ActivityType;
  description: string;
  timestamp: string; // ISO 8601 date string
}

export interface Metric {
  id: string;
  name: string;
  value: number;
  unit: string;
  change: number; // percentage change
  trend: 'up' | 'down' | 'flat';
}

export interface RecordItem { // Generic record for dashboard tables
  id: string;
  title: string;
  status: ProposalStatus | RiskStatus | 'pending' | 'completed';
  priority: 'low' | 'medium' | 'high';
  owner: string;
  dueDate: string;
  type: 'proposal' | 'risk';
}