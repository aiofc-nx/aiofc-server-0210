export enum TenantStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  SUSPENDED = 'suspended',
  EXPIRED = 'expired',
}

export enum TenantCategory {
  ENTERPRISE = 'enterprise',
  GOVERNMENT = 'government',
  EDUCATION = 'education',
  PERSONAL = 'personal',
  OTHER = 'other',
}

export enum TenantIsolationStrategy {
  DATABASE = 'database',
  SCHEMA = 'schema',
  ROW = 'row',
}
