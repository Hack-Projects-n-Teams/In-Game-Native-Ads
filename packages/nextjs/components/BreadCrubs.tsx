interface Step {
  title: string;
  path: string;
}

interface BreadcrumbsProps {
  steps: Step[];
  currentStep: number;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ steps, currentStep }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div className={`text-sm ${index === currentStep ? "font-bold" : "text-gray-500"}`}>{step.title}</div>
          {index < steps.length - 1 && <span className="mx-2">➡️</span>}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
