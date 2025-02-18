
import { LucideIcon } from 'lucide-react';

interface ContactItemProps {
  icon: LucideIcon;
  text: string;
  href?: string;
  external?: boolean;
}

const ContactItem = ({ icon: Icon, text, href, external }: ContactItemProps) => {
  const content = (
    <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 hover:bg-white/15 transition-colors">
      <Icon className="w-4 h-4" />
      <span className="text-sm">{text}</span>
    </div>
  );

  if (href) {
    return (
      <a 
        href={href} 
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return content;
};

export default ContactItem;
