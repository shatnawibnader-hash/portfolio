import { LucideIcon } from 'lucide-react';

export interface CourseFeature {
  text: string;
}

export interface SoftwareModule {
  name: string;
  levels: string;
}

export interface CourseData {
  id: string;
  code: string;
  title: string;
  description: string;
  features: string[];
  software: SoftwareModule[];
}

export interface NavItem {
  id: string;
  label: string;
}

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}