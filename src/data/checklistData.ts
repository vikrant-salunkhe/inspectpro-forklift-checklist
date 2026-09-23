import { ChecklistItem } from '@/types/checklist';

/**
 * Standard forklift pre-shift inspection items matching OSHA guidelines
 * and the design reference layout.
 */
export const INITIAL_CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: 'forks-mast',
    category: 'Mechanical',
    name: 'Forks and mast',
    description: 'Inspect condition of forks, lock pins, carriage, and mast channels for cracks or bends.',
    status: 'pass',
    note: '',
    hasMaintenanceAlert: false,
  },
  {
    id: 'tires-wheels',
    category: 'Mechanical',
    name: 'Tires and wheels',
    description: 'Check condition, tread wear, embedded debris, lug nuts, and inflation pressure.',
    status: 'pass',
    note: '',
    hasMaintenanceAlert: false,
  },
  {
    id: 'brakes',
    category: 'Operational',
    name: 'Brakes',
    description: 'Test service brake pedal resistance, parking brake hold, and emergency stopping.',
    status: 'fail',
    note: 'Hydraulic pedal spongy, requires pressure bleeding before next shift.',
    hasMaintenanceAlert: true,
  },
  {
    id: 'steering',
    category: 'Operational',
    name: 'Steering',
    description: 'Verify smooth steering wheel rotation, zero excessive free play, and power assist.',
    status: 'pass',
    note: '',
    hasMaintenanceAlert: false,
  },
  {
    id: 'warning-devices',
    category: 'Safety Systems',
    name: 'Warning devices',
    description: 'Test operational horn loudness, automatic reverse backup alarm, and safety strobes.',
    status: 'fail',
    note: 'Reverse buzzer volume is muffled; clean speaker grill.',
    hasMaintenanceAlert: true,
  },
  {
    id: 'seat-belt',
    category: 'Safety Systems',
    name: 'Seat belt & restraint',
    description: 'Inspect seat belt webbing for frays, retract mechanism, and positive latch engagement.',
    status: 'pass',
    note: '',
    hasMaintenanceAlert: false,
  },
  {
    id: 'hydraulics',
    category: 'Hydraulic Systems',
    name: 'Hydraulic cylinders & lines',
    description: 'Check lift and tilt cylinders for fluid leaks, hose chafing, and smooth actuation.',
    status: 'na',
    note: '',
    hasMaintenanceAlert: false,
  },
  {
    id: 'lights',
    category: 'Electrical',
    name: 'Lights and indicators',
    description: 'Verify headlights, rear working lights, turn signals, and instrument cluster gauges.',
    status: 'pass',
    note: '',
    hasMaintenanceAlert: false,
  },
];
