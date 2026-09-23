/**
 * Type definitions for InspectPro Forklift Inspection Checklist
 */

export type InspectionStatus = 'pass' | 'fail' | 'na' | 'pending';

export interface ChecklistItem {
  id: string;
  category?: string;
  name: string;
  description: string;
  status: InspectionStatus;
  note?: string;
  hasMaintenanceAlert?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface IndustryCard {
  id: string;
  title: string;
  description: string;
  iconName: 'warehouse' | 'construction' | 'manufacturing';
}

export interface FeatureBenefit {
  id: string;
  title: string;
  description: string;
  iconName: 'standardize' | 'identify' | 'records' | 'process';
}
