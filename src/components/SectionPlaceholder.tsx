interface SectionPlaceholderProps {
  title: string;
  description?: string;
}

export default function SectionPlaceholder({ title, description }: SectionPlaceholderProps) {
  return (
    <div className="border border-dashed border-basix-700 rounded-lg p-12 text-center">
      <h2 className="text-3xl font-bold uppercase tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-basix-400 text-sm max-w-2xl mx-auto">
          {description}
        </p>
      )}
      <div className="mt-6 text-xs text-basix-600 font-mono">
        Section placeholder - content to be added
      </div>
    </div>
  );
}
