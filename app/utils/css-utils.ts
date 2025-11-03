type GradientClassMap = {
  [key: string]: string;
};

const gradientClasses: GradientClassMap = {
  'bg-gradient-to-b': 'bg-linear-to-b',
  'bg-gradient-to-r': 'bg-linear-to-r',
  'bg-gradient-to-br': 'bg-linear-to-br',
  'flex-shrink-0': 'shrink-0',
  '-z-0': 'z-0'
};

export function updateGradientClasses(className: string): string {
  return className.split(' ')
    .map(cls => gradientClasses[cls] || cls)
    .join(' ');
}