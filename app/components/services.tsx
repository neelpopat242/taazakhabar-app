import { 
  MonitorSmartphone, 
  ShieldCheck, 
  ActivitySquare
} from 'lucide-react';

const services = [
  {
    icon: <MonitorSmartphone className="h-6 w-6" />,
    title: "Web & Mobile Development",
    description: "React, Next.js, React Native, Node, Python, Go",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Architecture & DevOps",
    description: "Scalable cloud, CI/CD, IaC, observability",
  },
  {
    icon: <ActivitySquare className="h-6 w-6" />,
    title: "Product Consulting",
    description: "MVP road-mapping, user research, GTM strategy",
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Our <span className="text-blue-500">Services</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="ring-1 ring-gray-200 dark:ring-gray-800 rounded-2xl p-6 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-500 mb-5">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
